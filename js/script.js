$(function() {

    var email = $('#email');
    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var country = document.getElementById("country");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');
    
    // GET info of all the countries and regions
 var settings = {
  "url": "https://countriesnow.space/api/v0.1/countries/states",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
    country.innertHTML = '';
  console.log(response);
    for(let item of response.data){
      country.innerHTML += `
                        <option value='${item.iso3}' selected>${item.name}</option> 
                    `
    };
    
    var selectedIndex="USA"; 
    $('#country').val(selectedIndex);
    
});

    // hide the cards images and only shows the one which the number belongs
    cardNumber.keyup(function() {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });
    
    
    // validate the fields when button is pushed
    confirmButton.click(function(e) {

        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());
        var mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var currentDate = new Date();
        
        if(email.val().match(mailFormat)){
        
            if(owner.val().length < 5){
                alert("Wrong owner name");
                owner.focus(); //Message if the cardholder name has less than 5 characters
            } else if (!isCardValid) {
                alert("Wrong card number"); //Message for wrong card number
                cardNumber.focus();
            } else if (!isCvvValid) {
                alert("Wrong CVC"); //Message for wrong cvc number
                CVV.focus();
            } else if (year.value < currentDate.getYear().toString().substr(-2)) {
                alert("Your card has expired"); //Message if the card has expired years ago
            } else if ((year.value==currentDate.getYear().toString().substr(-2)) && (month.value < (currentDate.getMonth() + 2))) {
                alert("Your card has expired"); // Message if the card has expired months ago
            } else {
                // Message if everything is correct:
                alert("Everything is correct");
            }
            
        } else {
                // If mail format is not correct show that message:
                alert("Mail format is not valid");
                email.focus();
            }    
    });
});

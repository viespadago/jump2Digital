# Minimalistic checkout

Minimalistic checkout para la Hackaton de Jump2Digital

> Breve descripción del proyecto: 

Pasarela de pago para que el usuario pueda efectuar una compra utilizando una tarjeta, de crédito o débito, en una página de e-commerce.


## Background | Not using the common-readme | Not required

Reto a desarrollar para la fase online
Para la fase online, que tendrá lugar del 22 – 28 de noviembre, se pondrán a prueba las habilidades de maquetación y uso de APIs de terceros para rellenar los campos de un formulario.

Las pasarelas de pago son una parte esencial en cualquier página web y es necesario que el usuario tenga la experiencia más cómoda posible a la hora de efectuar la compra. De esta manera, en el momento de valorar vuestros desarrollos, los equipos del Barcelona Digital Talent y de NUWE tendrán en cuenta como de minimalista y fácil sea la navegación de vuestra pasarela para un hipotético usuario.

Así pues, se propone la maquetación y manejo de errores de una pasarela de pago minimalista y responsive.


## Usage

Hay dos archivos JavaScript que sirven para validar el formulario: srcript.js y jquery.payform.min.js. 

El primero, srcript.js es un archivo de ejemplo que he modificado para que valide también los nuevos campos y otros como la fecha que no lo hacía tampoco antes. También lo he modificado para coja los datos de la API y los meta dentro del select de Country.

jquery.payform.min.js es una librería para validar el pago con tarjeta que valida el número de tarjeta, el codigo CVV e indica de que tipo de tarjeta se trata. No la he modificado.


## API/Component

De las dos APIs propuestas se ha utilizado la de Countriesnow (https://countriesnow.space/), porque era la que me parecía más fácil de utilizar y la que tenía la documentación más sencilla de entender. 

Se ha hecho un GET con AJAX a https://countriesnow.space/api/v0.1/countries/states, que es la página que muestras los estados/provincias/CCAA de cada país porque en principio tenía pensado crear otro select que se rellenara con ellos al seleccionar país, pero después pensé que no era muy minimalista. Igualmente lo he seguido utilizando en vez del countries por defecto, porque he aprovechado el iso3 para rellenar el value de cada select respectivo, con lo que es más fácil y corto recoger los datos del país seleccionado. 


## Installation

No necesita instalación ya que no se ha utilizado ningún framework al no creerlo necesario.


## Stack | Not using the common-readme | Not required

[HTML5](http://www.w3.org/TR/html5/)
[CSS3](http://www.w3.org/TR/CSS/)
[BOOTSTRAP](http://getbootstrap.com/)
[JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


## Roadmap and visuals | Not using the common-readme | Not required

Se ha utilizado el diseño del ejemplo que se mostraba en NUWE (https://nuwe.io/challenge/jump2digital-front) como modelo, pero haciéndolo todavía más minimalista y en una sola columna. 

La imágen del MAC también se ha extraído de la imagen de ejemplo. Las imágenes de las tarjetas están extraídas de Google y redimensionadas con Photoshop.


## Contribución y Apoyo | Not using the common-readme | Not required

Cualquiera lo puede utilizar si le apetece. 


## Contact info | Not using the common-readme | Not required  | Recommended

victor.espada@iesjoandaustria.org


## Reconocimientos | Not using the common-readme | Not required

Se ha utilizado este tutorial como modelo: https://tutorialzine.com/2016/11/simple-credit-card-validation-form


## License 

[MIT](https://opensource.org/licenses/MIT)


# Prueba Tecnica - Pokedex

Este proyecto consiste en una aplicación para ver una lista de pokemones, ver detalles de cada uno, compartir información y guardar tus pokemones favoritos.

## Tecnologías utilizadas

- Vue 3
- Vue class components
- Typescript
- Jest & Vue testing utils
- Vue Router
- Vuex
- Vetur
- Vue CLI
- ESLint & Prettier
- SASS

## Resumen de tecnologias

### Ecosistema Vue

Se ha utilizado Vue como framework web de acuerdo al requerimiento de la prueba técnica, específicamente en la versión 3. Adicionalmente se ha utilizado otras librerías parte de stack del ecosistema. A continuación un resumen de cada uno de ellos:

- Vue Class Components: Nos permite estructurar el código usando la sintaxis de clases de JavaScript. Es comun utilizarla en otros frameworks, principalmente Angular y en menor medida React.

- Vue Router: importante para poder navegar por las distintas vistas de la aplicación

- Vetur: Mejora la experiencia del desarrollador al dar funcionalidades extras al editor.

- Vue CLI: Nos permite rapidamente levantar un proyecto en Vue, y nos deja seleccionar diversas herramientas que necesitemos.

- Vuex: Fue necesario el uso del patrón7librería Vuex para implementar un store central como "unica fuente de verdad". Con esto no es necesario pasar información entre componentes de padre a componentes hijos ni formar cadenas complicadas. Adicionalmente, tener un store centralizado nos da la opción de implementar permanencia de datos de manera más sencillas haciendo uso de APIs web como LocalStorage, entre otros.

### Typescript

Typescript fue utilizado para utilizar el tipado a la hora del desarrollo y por su integración con el editor de texto. Sin embargo, a la hora de desarrollar con Vue 3 se notó una carencia de documentación sobre como trabajar con el tipado, específicamente con los Class Components. Para un trabajo adicional lo mejor sería revisar y ampliar los tipados de nuestras clases para obtener los mayores beneficios

### Jest

Jest es uno de los test runners mas populares. Junto con Vue test utils se puede testear los componentes UI de forma efectiva

### ESLint & Prettier

Estas herramientas nos permiten mantener un código limpio y no preocuparnos mucho en el formato.

### SASS

Con SASS he implementado una arquitectura ITCSS para tener ordenado nuestros estilos globales y las herramientas del preprocesador

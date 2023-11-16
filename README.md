# Comerç Ideal

**Comerç ideal** es un buscador de inmuebles en alquiler para que pequeños comerciantes puedan conocer aquellos locales que se encuentran disponibles en su barrio, así como puntos calientes o "Golden miles" en las que, según esta aplicación, sus negocios podrían ser más prósperos.

El punto de partida para el desarrollo de esta solución fue conocer el tipo de datos del que se podría disponer, para que los bloques BackEnd, Data y FrontEnd pudieran dibujar, desde sus distintos backgrounds una forma en común de hacer llegar Comerç Ideal al usuario.

### Implementaciones

- Búsqueda de locales disponibles por distrito
- Búsqueda de actividades comerciales por distrito para conocer lugares estratégicos donde ubicar el nuevo negocio

### Futuras implementaciones

Escalada de la aplicación a B2C

- Autentificación de usuario mediante Login y Register para que un inviduo pueda crear una cuenta y acceder a ella.
- Búsqueda de comercios en su barrio
- Implementación de fidelización mediante descuentos en compras de los comercios asociados a la red de comercios sostenibles de su barrio.

## FrontEnd

A lo largo del desarrollo de la aplicación, el control de versiones se gestionó mediante GIT, siguiendo un flujo de trabajo de Integración Continua/Entrega Continua (CI/CD) en el pipeline, (trunk-based development), supervisando todo el código que se volcaba a la rama principal (main) mediante husky hooks. Para mantener prácticas de calidad de código, se utilizaron herramientas como Eslint y Prettier.

### Tecnologías usadas

- **TypeScript**: lenguaje de programación que extiende JavaScript al agregar tipos estáticos.

- **React**: biblioteca de código abierto en JavaScript para construir interfaces de usuario.

- **Redux**: biblioteca en JavaScript para la gestión del estado en aplicaciones.

- **React Router**: biblioteca que permite la navegación entre diferentes vistas en una aplicación React.

- **Axios**: cliente HTTP basado en promesas para realizar solicitudes a un servidor.

- **Vite**: bundler que se destaca por su capacidad para ofrecer una experiencia de desarrollo ágil y eficiente

- **Styled Components**: biblioteca que permite escribir estilos CSS en componentes React.

### Herramientas adicionales

- **ESLint**: herramienta de análisis estático de código para identificar y reportar patrones problemáticos en el código JavaScript.

- **Git Hooks Workflows**: estrategia de desarrollo basada en trabajar directamente en la rama principal (main) y utilizar ganchos de Git (husky hooks) para el control de calidad y revisiones de código.

- **Prettier**: herramienta de formateo de código que ayuda a mantener un estilo de código consistente en el proyecto.

- **Figma**: herramienta de diseño y prototipado basada en la nube utilizada para el diseño de interfaces, prototipado, colaboración y sistemas de diseño.

## Backend

### Tecnologías Utilizadas

- Java
- Spring Boot
- Hibernate
- MySQL
- Firebase

### Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **src/main/java/com/backcomerideal**: Contiene el código fuente de la aplicación.
  - **model**: Clases de modelo que representan entidades como `Local`.
  - **repository**: Repositorios JPA para acceder a la base de datos, como `LocalRepository`.
  - **service**: Lógica de negocio y servicios, incluyendo `LocalService`.
  - **controller**: Controladores REST, como `LocalController`.
- **src/main/resources**: Contiene archivos de configuración de la aplicación.

### Funcionalidades Principales

- **LocalController**: Controlador REST para manejar las operaciones relacionadas con los locales, como obtener todos los locales, filtrarlos por distrito o tipo de actividad.
- **LocalService**: Implementa la lógica de negocio para operaciones relacionadas con locales.

### Configuración

- **application.properties**: Archivo de configuración de Spring Boot para la conexión a la base de datos MySQL y otras propiedades de la aplicación.
- **FirebaseConfig**: Configuración para la integración con Firebase.

### Ejecución

1. Clonar el repositorio: `git clone https://github.com/tu-usuario/backcomer-ideal.git`
2. Importar el proyecto en tu IDE favorito.
3. Configurar la conexión a la base de datos MySQL en `application.properties`.
4. Ejecutar la aplicación.

## Autores

[@facundh23](https://github.com/facundh23),
[@BalaguerDev](https://github.com/BalaguerDev),
[@caminolosada](https://github.com/caminolosada),
[@RubenRaMar](https://github.com/RubenRaMar),
[@abde7h](https://github.com/abde7h),
[@AdriaMartiComas](https://github.com/AdriaMartiComas)
[@laxhoni](https://github.com/laxhoni)

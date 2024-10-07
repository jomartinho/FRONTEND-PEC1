# S01_PEC1_Solucion_Ejercicio_1.md

## 1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno.

### 1. ¿Cuáles son las ventajas del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.

- **SEO mejorado**: Las etiquetas semánticas como `<header>`, `<nav>`, `<article>` y `<footer>` proporcionan significado semántico al código HTML, lo que facilita a los motores de búsqueda entender la estructura y el contenido de una página web, mejorando su indexación y clasificación.
- **Accesibilidad mejorada**: Las etiquetas semánticas mejoran la accesibilidad, haciendo que el contenido web sea más usable para personas con discapacidades. Los lectores de pantalla, por ejemplo, pueden usar la estructura semántica para navegar y comprender el contenido de la página de manera más efectiva.
- **Mantenimiento mejorado**: El código HTML semántico es más fácil de entender y mantener tanto para los desarrolladores como para las máquinas. La estructura clara proporcionada por las etiquetas semánticas hace que el código sea más organizado y legible, lo que facilita su depuración y actualización.

### 2. Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

- **Geolocalización**: La API de Geolocalización permite que los sitios web accedan a la ubicación geográfica del usuario. Con el consentimiento del usuario, la API puede proporcionar información como latitud y longitud, que se pueden usar para ofrecer servicios basados en la ubicación.
- **Canvas**: La API de Canvas proporciona una manera de dibujar gráficos de forma dinámica en una página web usando JavaScript. Permite la creación de formas, imágenes, texto y animaciones complejas, adecuada para visualizaciones de datos, juegos y editores de imágenes.
- **Almacenamiento Local**: La API de Almacenamiento Local proporciona una manera para que los sitios web almacenen datos localmente en el navegador del usuario. A diferencia de las cookies, que tienen una capacidad limitada y se envían al servidor en cada petición, el almacenamiento local permite guardar más datos solo en el lado del cliente.

### 3. Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).

- **Media Queries**: Las Media Queries permiten que los desarrolladores apliquen estilos CSS diferentes según las características del dispositivo que está visualizando la página web, incluyendo el tamaño de la pantalla, resolución, orientación (retrato o paisaje), entre otros. Esto permite crear páginas web responsivas que se adaptan a diferentes dispositivos y tamaños de pantalla.

### 4. Cita al menos 4 de las características principales de TypeScript.

- **Tipado estático**: TypeScript introduce tipado estático a JavaScript, permitiendo a los desarrolladores declarar tipos para variables, funciones y parámetros. El tipado estático ayuda a detectar errores en tiempo de compilación y mejora el mantenimiento del código, especialmente en grandes bases de código.
- **Programación orientada a objetos**: TypeScript proporciona soporte completo para conceptos de programación orientada a objetos (OOP) como clases, interfaces, herencia y encapsulamiento, facilitando la escritura de código modular y reutilizable.
- **Herramientas avanzadas**: TypeScript incluye herramientas avanzadas como un compilador, un analizador de código estático y soporte para entornos de desarrollo integrados (IDE) populares. Estas herramientas ayudan a mejorar la productividad del desarrollador y la calidad del código.
- **Interoperabilidad con JavaScript**: TypeScript es un superconjunto de JavaScript, lo que significa que todo el código JavaScript válido también es válido en TypeScript. Esto permite a los desarrolladores adoptar TypeScript gradualmente y usar bibliotecas y frameworks de JavaScript existentes.

---

## 2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas.

### 1. Cita al menos 2 de estos preprocesadores.

- **SASS (Syntactically Awesome Style Sheets)**
- **LESS (Leaner Style Sheets)**

### 2. Cita al menos 4 ventajas que ofrecen estos preprocesadores.

- **Variables**: Permiten que los desarrolladores almacenen valores reutilizables como colores, fuentes o tamaños y los reutilicen en todo el código CSS, facilitando mantener la consistencia y realizar actualizaciones globales.
- **Mixins**: Permiten que los desarrolladores definan grupos de propiedades CSS que se pueden reutilizar varias veces, reduciendo la repetición de código y facilitando aplicar estilos consistentes.
- **Funciones**: Permiten que los desarrolladores realicen operaciones en valores CSS, como aclarar u oscurecer colores, convertir unidades o realizar cálculos, proporcionando una manera eficiente de generar valores dinámicos.
- **Anidamiento**: Permiten que los desarrolladores aniden selectores CSS de una forma que refleje la estructura HTML, haciendo que el código CSS sea más organizado, legible y fácil de mantener.

### 3. Explica brevemente en qué consisten los sourcemaps.

- **Sourcemaps**: Son archivos que mapean el código compilado de vuelta al código fuente original. Al usar preprocesadores CSS o minificadores, el código resultante puede ser difícil de depurar, ya que no se asemeja al código original escrito por el desarrollador. Los sourcemaps actúan como un puente entre el código compilado y el código fuente, permitiendo que los desarrolladores depuren el código compilado como si estuvieran depurando el código fuente original.

### 4. Explica qué es un transpilador.

- **Transpilador**: Un transpilador es un tipo de compilador que convierte el código fuente de un lenguaje de programación a otro lenguaje en el mismo nivel de abstracción. En el contexto del desarrollo front-end, los transpiladores se usan frecuentemente para convertir lenguajes como TypeScript, SASS o LESS en JavaScript o CSS, respectivamente. El código transpilado puede ser ejecutado por los navegadores web.

---

## 3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos.

### 1. Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.

- **Sistemas de control de versiones**: 
  - **Git**
  - **Subversion (SVN)**
  
- **Herramientas de gestión de módulos**:
  - **npm (Node Package Manager)**
  - **Yarn**

### 2. Cita y explica al menos 3 comandos de Git.

- `git init`: Este comando se usa para crear un nuevo repositorio Git en un directorio. Inicializa el repositorio Git, creando un directorio oculto `.git` que almacena los metadatos y el historial del repositorio.
- `git add`: Este comando se usa para preparar cambios en el índice de staging. Después de realizar cambios en un archivo, se usa `git add <nombre_del_archivo>` para preparar los cambios para el próximo commit. Usa `git add .` para preparar todos los archivos modificados.
- `git commit -m "mensaje_de_commit"`: Este comando toma una "instantánea" de los archivos que se han preparado en el índice de staging, creando un nuevo commit con esos cambios. El mensaje de commit se usa para describir las modificaciones introducidas en el commit.

### 3. Cita y explica brevemente las características más definitorias de WebPack.

- **Agrupador de módulos**: Webpack es un agrupador de módulos que toma diferentes módulos o archivos como JavaScript, CSS, imágenes y fuentes, y los combina en un único paquete (o varios paquetes) que pueden ser cargados por un navegador web.
- **Gestión de dependencias**: Webpack puede gestionar las dependencias entre diferentes módulos y asegurarse de que se carguen en el orden correcto. Puede manejar diferentes sistemas de módulos, como CommonJS, AMD y ES modules.
- **Pipeline de activos**: Webpack puede procesar diferentes tipos de archivos, como JavaScript, CSS, imágenes y fuentes, utilizando loaders. Los loaders permiten a Webpack transformar archivos, como transpilar TypeScript a JavaScript o minificar archivos CSS.
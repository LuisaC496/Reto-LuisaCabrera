# Desarrollo del código fuente.
1. Creación de las carpetas login y citas. 
2. Creación de los archivos:
- Html (login.htm-citas.html)
- CSS (style.css) 
- JavaScript(script.js)
para cada carpeta. 
~~~
\RETO1-LuisaCabrera\citas
~~~
~~~
\RETO1-LuisaCabrera\login
~~~
3. Creación del formulario(.html) para ambos casos, login y citas. 
4. Creación de arreglo y funciones(.js) para citas.
~~~
let citas = []
~~~
Ejemplo de funciones:
~~~
function guardarEnLocalStorage() {
    localStorage.setItem('citas', JSON.stringify(citas));
}
~~~
5. Creación de estilos con CSS.
Ejemplo de aplicación de estilos con CSS. 
~~~
body {
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    background-color: #f0f0f0;
    margin: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
~~~

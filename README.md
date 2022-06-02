E-commerce inspirado en la UI de MeLi.

La aplicación funciona con la API de Mercado Libre. Utilicé dos endpoints, uno para traer todos los productos y el otro para poder acceder a su detalle. El stock de cada producto, esta dado por la propiedad available_quantity de la API.

Utilicé funciones en la carpeta helpers, para poder parsear los precios de los productos a $AR y poder filtrar por categoría. En este caso, me estoy manejando solamente con productos de catálogo.

Dependencias extras utilizadas:

react-icons: Librería de iconos. La elegí por su fácil implementación. Tiene props interesantes para poder personalizarlos.

classnames: Permite de manera simple aplicar estilos basados en una condición.

react-loading-skeleton: Skeletons para los estados de carga.

react-responsive: Permite implementar media queries de manera sencilla.

reactstrap: Componentes de React Bootstrap, la utilizo porque me parece más eficiente
la importación de componentes y su implementación. Las props funcionan para la mayoría de los componentes, esto facilita no tener que revisar la documentación frecuentemente.

framer-motion: Permite agregarle animaciones a los componentes.


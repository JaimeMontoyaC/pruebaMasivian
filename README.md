Para visualizar correctamente el proyecto.
1.	Es necesario un framework para ejecutar el aplicativo, que fue desarrollado en Angular.
2.	Es necesario tener instalado node.js, de no tenerlo seguir la siguiente guía:
		https://phoenixnap.com/kb/install-node-js-npm-on-windows
3.	Es necesario tener instalado Angular, de no tenerlo en el cmd ejecutar el siguiente comando: 
		npm install -g @angular/cli
4.	Estando en la ruta del proyecto desde la consola ejecutar comando npm install (apartir de la ruta SRC).
5.	Estando en la ruta del proyecto desde la consola ejecutar comando npm start o ng serve.
6.	Una vez completado lo anterior se podrá observar el proyecto en el localhost.

Nota: El api proporcionado tiene bloqueos por políticas de CORS. Ya que no es un api propio; en el navegador Chrome se puede resolver este error mediante una extensión, en caso de que en su ordenador le genere el error de CORS. Para ello por favor agregar la extensión al navegador para solventar el tema. La extensión es la siguiente:
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
Una vez añadido, solo debe activarlo como indica el enlace y podrá consumirse el api correctamente.

Nota: El listado de comics del api, es de aproximadamente 2600 según las pruebas realizadas, pero algunos de ellos tienen actualmente el enlace de la imagen roto. En caso de que el programa seleccione uno de ellos, simplemente dar click en la opción “Mirar otro Cómic”.



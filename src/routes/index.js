// Aqui se importa el objeto "Router" desde la libreria "express"
// "Router" es como un mini manejador de rutas que permite organizar endpoints de la aplicacion en modulos separados, en lugar de todo es un solo archivo
import { Router } from "express"

// Crea una instancia de ese enrutador
// El "router" es como un contenedor donde se define las rutas (/contactos, /sobre nosotros, /) y que debe hacer "express" cuando alguien las visita
const router = Router()

// La variable es "hora", el "new date" crea el objeto que contiene la hora, o tambien puede llevar fecha, año calendario, el "es-co" es formato colombia
const hora = new Date().toLocaleTimeString('es-co', {hour: '2-digit', minute: '2-digit'})

// ".get" define una ruta que responde a peticiones https get, es el metodo que usan los navegadores cuando se visita una pagina web
// "router.get" esta diciendo que cuando alguien visite la url ejecutar tal funcion
router.get('/contactos', (req, res) => res.render('contactos.ejs', {title_contacts: 'Contactos Empresariales'}))
router.get('/sobre_nosotros', (req, res) => res.render('sobre_nosotros.ejs', {title_about_us: 'Sobre Nosotros'}))
router.get('/menu', (req, res) => res.render('menu.ejs', {title_menu: 'Menu Empresarial'}))
router.get('/', (req, res) => res.render('index.ejs', {title_pag_prin: 'Sitio Web Node JS', hora:hora}))
// "(req, res =>)" es una funcion java script
// req -> representa la solicitud del cliente (datos que envia el navegador, parametros, cabeceras, etc)
// res -> es la respuesta del servidor, aqui se decide que enviar devuelta (html, json, archivo, etc) en este caso renderizar una vista ejs y enviarla al navegador 
    
// Ruta GET para el login (unica con mensajes incluidos)
router.get('/login', (req,res) => {res.render('login', {
    etiqueta: 'Vista de Inicio de Sesion',
    mensaje: null
})})

// Ruta POST para el login
router.post('/login', (req,res)=> {
    const {usuario, contrasena} = req.body;
    if(usuario === 'admin' && contrasena === '1234')
        {return res.render('menu.ejs');
        }
    return res.render('login', {
        etiqueta: 'Vista de Inicio de Sesion',
        mensaje: 'Usuario o contrasena incorrectos'
    })
})

// Permite usar este conjunto de rutas en otro archivo
export default router
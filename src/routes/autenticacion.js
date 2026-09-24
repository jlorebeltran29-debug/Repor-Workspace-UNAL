import { Router } from "express";
const router = Router()

//Ruta POST para procesar el login

router.post('/api/login', (req, res) => {
    const {usuario, contrasena } =req.body;

    console.log("Usuario recibido: ", usuario);
    console.log("Contrasena recibida: ", contrasena);

    if (usuario === 'admin' && contrasena === '12345'){
        res.redirect('/contactos');
    } else {
        res.send("Usuario o contrasna es incorrectos");
    }
} );

// 3. Boton "crear Usuario"
router.get('/registro',(req,res) => {
    res.render("registro.ejs", {title_register: 'Registro de Usuario'});
});

// 4. Enlace para "Restablecer contrasena"
router.get('/recuperar-password',(req,res) => {
    res.send("Vista o Logica para enviar el correo de recuperacion de contrasena");
});

// 5 Enlace para "Recordar Usuario"
router.get('/recordar-usuario',(req,res) => {
    res.send("Vista o Logica para recordar el nombre del Usuario");
});

// Ruta de ejemplo para el exito del login 
router.get('/contactos',(req,res) => {
    res.send("Bienvenido al Sistema!");
});

export default router
const express = require('express');
const router = express.Router();
const compradorController = require('../controllers/compradorController');
const {estaAutenticado, esAdmin, esComprador} = require('../middlewares/auth');

// Ruta Registro
router.get('/registro', compradorController.getRegistroForm);
router.post('/registro', compradorController.registerUser);

// Ruta Login
router.get('/login', compradorController.getLoginForm);
router.post('/login', compradorController.loginUser);

//ruta vista comprador
router.get('/comprador', compradorController.viewComprador);

// router.get('/admin/indexAdmin', estaAutenticado, esAdmin, compradorController.viewComprador);
// router.get('/comprador', estaAutenticado, esComprador, compradorController.viewComprador);

//cerrar sesion
router.get('/logout', (req, res)=>{
    req.session.destroy();
    res.clearCookie('token');
    res.redirect('/login')
});

module.exports = router;
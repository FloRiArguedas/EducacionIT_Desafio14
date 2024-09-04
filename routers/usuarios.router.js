import controlador from '../controllers/usuarios.controller.js'
import express from 'express'
const usuariosRouter = express.Router()

//MÉTODOS

usuariosRouter.get('/',controlador.getAll)

usuariosRouter.get('/:id', controlador.getOne)

usuariosRouter.post ('/', controlador.getPost)

usuariosRouter.put ('/:id', controlador.getPut)

usuariosRouter.delete ('/:id', controlador.Delete)

export default usuariosRouter



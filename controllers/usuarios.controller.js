import { usuarios } from "../src/constants/usuarios.js";
import modelos from "../models/usuarios.models.js";

const getAll = (req, res) => {
  const usuarios = modelos.leerUsuarios();

  res.status(200).json(usuarios);
};

const getOne = (req, res) => {
  const id = req.params.id;
  const usuario = modelos.leerUsuario(id);
  res.status(200).json(usuario);
};

const getPost = (req, res) => {
  const newUser = req.body;
  const UsuarioCreado = modelos.crearUsuario(newUser);
  res.status(201).json(usuarios);
};

const getPut = (req, res) => {
  const id = req.params.id;
  const usuarioAEditar = req.body;
  const usuarioEditado = modelos.actualizarUsuario(id, usuarioAEditar);
  res.status(200).json(usuarioEditado);
};

const Delete = (req, res) => {
  const id = req.params.id;
  const UsuarioEliminado = modelos.eliminarUsuario(id);
  res.status(200).send(UsuarioEliminado);
};

const All = (req, res) => {
  const { path, method } = req;
  console.log(path);
  console.log(method);
  res.status(404).send({
    ok: false,
    status: 404,
    mensaje: `Esta página no fue encontrada: ${path}`,
  });
};

export default {
  getAll,
  getOne,
  getPost,
  getPut,
  Delete,
  All,
};

import { usuarios } from "../src/constants/usuarios.js";

//VARIABLES GLOBALES

let idUser = usuarios.length

const leerUsuarios = () => {
  return usuarios;
};

const leerUsuario = (id) => {
  const usuario = usuarios.find(usuario => usuario.id == id) || {};
  return usuario
};

const crearUsuario = (newUser) => {
    newUser.id = ++idUser;
    usuarios.push(newUser)
    return newUser
}

const actualizarUsuario = (id,usuarioAEditar) => {
    usuarioAEditar.id = id;
    let index = usuarios.findIndex((user) => user.id == id);
    usuarios.splice(index, 1, usuarioAEditar);
    return usuarioAEditar
}

const eliminarUsuario = (id) => {
    let index = usuarios.findIndex((user) => user.id == id);
    let user = usuarios.splice(index, 1)[0];
    return user
}

export default {
  leerUsuarios,
  leerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
};

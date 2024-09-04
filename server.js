import express from "express";
import usuariosRouter from "./routers/usuarios.router.js";
import controlador from './controllers/usuarios.controller.js'
const app = express();
const PORT = 8080;

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES

app.use("/api/usuarios", usuariosRouter);
app.all('*', controlador.All)

// ARRANCAR SERVER WEB
app.listen(8080, () => {
  console.log("Arrancando el servidor...");
  console.log(`http://localhost:${PORT}`);
});

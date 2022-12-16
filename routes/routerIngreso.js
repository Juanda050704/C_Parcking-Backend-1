import { Express } from "express";
import {agregarCliente, editarCliente, mostrarCliente, mostrarClientes, eliminarCliente } from "../controllers/controllerCliente";
 
const routerEditar = Express.router();

routerEditar  .post('/', agregarCliente);
routerEditar  .put('/id', editarCliente);
routerEditar  .delete('/id', eliminarCliente);
routerEditar  .get('/:id', mostrarCliente);
routerEditar  .get('/:id', mostrarCliente);
routerEditar  .get('/', mostrarClientes);

export default routerEditar

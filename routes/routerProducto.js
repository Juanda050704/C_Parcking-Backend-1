import { Express } from "express";
import {agregarCliente, editarCliente, mostrarCliente, mostrarClientes, eliminarCliente } from "../controllers/controllerCliente";
 
const routerMostrar = Express.router();

routerMostrar  .post('/', agregarCliente);
routerMostrar  .put('/id', editarCliente);
routerMostrar  .delete('/id', eliminarCliente);
routerMostrar  .get('/:id', mostrarCliente);
routerMostrar  .get('/:id', mostrarCliente);
routerMostrar  .get('/', mostrarClientes);

export default routerMostrar;

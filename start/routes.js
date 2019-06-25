"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { name: "Segurança e Auditoria de Sistemas" };
});

Route.post("/domain", "DomainController.store");
Route.get("/domain", "DomainController.index");
Route.get("/remote_orders/:id", "OrderController.remoteShow");
Route.patch("/remote_orders/:id", "OrderController.remoteUpdate");
Route.delete("/remote_orders/:id", "OrderController.remoteDestroy");

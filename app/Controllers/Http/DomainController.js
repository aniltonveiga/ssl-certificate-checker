"use strict";
const Domain = use("App/Models/Domain");
const https = require("https");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with domains
 */
class DomainController {
  /**
   * Show a list of all domains.
   * GET domains
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const domains = await Domain.all();

    return domains;
  }

  /**
   * Render a form to be used for creating a new domain.
   * GET domains/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new domain.
   * POST domains
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    let { uri, email } = request.only(["uri", "email"]);

    const options = {
      host: uri,
      port: 443,
      method: "GET"
    };
    let req = null;
    try {
      req = https.request(options, function(res) {
        const data = res.connection.getPeerCertificate();
        const obj = {
          uri,
          company: data["subject"].O || null,
          common_name: data["subject"].CN || null,
          emitter: data["issuer"].O || null,
          serie_number: data["serialNumber"] || null,
          expires_in: data["valid_to"] || null,
          emitter_domain: data["issuer"].OU || null,
          emitter_common_name: data["issuer"].CN || null,
          email: email,
          subjectal: data["subjectaltname"] || null
        };

        Domain.create(obj);
      });
    } catch (error) {
      return console.log("Não possui https");
    } finally {
      req.end();
    }
  }

  /**
   * Display a single domain.
   * GET domains/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing domain.
   * GET domains/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update domain details.
   * PUT or PATCH domains/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a domain with id.
   * DELETE domains/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = DomainController;

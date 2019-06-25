"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DomainsSchema extends Schema {
  up() {
    this.create("domains", table => {
      table.increments();
      table.string("uri");
      table.string("company");
      table.string("common_name");
      table.text("subjectal");
      table.string("emitter");
      table.string("emitter_domain");
      table.string("emitter_common_name");
      table.string("serie_number");
      table.string("expires_in");
      table.string("email");
      table.timestamps();
    });
  }

  down() {
    this.drop("domains");
  }
}

module.exports = DomainsSchema;

// {
// "uri": "ri",
// "company": "ny",
// "common_name": "me",
// "emitter": "er",
// "emitter_domain": "in",
// "emitter_common_name": "me",
// "serie_number": "er",
// "alg_signature": "re",
// "expires_in": "in",
// "status": "us"
// }

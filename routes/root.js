"use strict";

const fetch = require("cross-fetch");
const { sectionBlock } = require("../lib/block");
const { getCategory } = require("../lib/get-category");

const externalApi = "https://api.chucknorris.io/jokes/random";

module.exports = async function (fastify) {
  fastify.register(require("@fastify/formbody"));

  fastify.post("/", async function (request, reply) {
    const { challenge } = request.body;

    reply.send({ challenge });
  });

  fastify.post("/joke", async function (req, reply) {
    const category = getCategory(req.body);

    const response = await fetch(`${externalApi}${category}`, {
      method: "GET",
    }).then((res) => res.json());

    if (response.status === 404) {
      reply.send(response.message);
    }

    reply.send(sectionBlock(response));
  });
};

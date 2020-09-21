import { FastifyPluginAsync } from "fastify";
import about from "./about";
import garda from "./garda";

const services: FastifyPluginAsync = async (app) => {
  app.register(about);
  app.register(garda);
};

export default services;

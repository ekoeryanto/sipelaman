import { FastifyPluginCallback } from "fastify";
import fp from "fastify-plugin";
import pkg from "../../package.json";

const pkgPlugin: FastifyPluginCallback = (app, _opts, next) => {
  app.decorate("pkg", pkg);
  next();
};

export default fp(pkgPlugin, {
  fastify: "3.x"
});

declare module "fastify" {
  interface FastifyInstance {
    pkg: typeof pkg
  }
}

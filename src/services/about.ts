import { FastifyPluginAsync } from "fastify";
import pkg from "../../package.json";

const about: FastifyPluginAsync = async app => {
  app.get("/about", async () => pkg);
};

export default about;

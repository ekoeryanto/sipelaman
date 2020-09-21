import fastify from "fastify";
import pkg from "../../package.json";
import pkgPlugin from "../../src/plugins/pkg.plugin";

const app = fastify();

beforeAll(async () => {
  await app.register(pkgPlugin);
});

afterAll(() => {
  app.close();
});

describe("pkg plugin", () => {
  it("decorates pkg", () => {
    expect(app.hasDecorator("pkg")).toBe(true);
  });

  it("has author in pkg", () => {
    expect(app.pkg.author).toBe(pkg.author);
  });
});

const v1ApiController = require("./apis/v1");

module.exports = {
  async register(app) {
    app.use("/v1", v1ApiController);
    app.get("/", ({ res }) => {
      res.json({
        appName: "Verx! API",
      });
    });
  },
};

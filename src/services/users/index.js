const Model = require("../../models/User");
const mongoose = require("mongoose");
const Service = require("../service");
const { date } = require("faker");
const Entity = "user";

class User extends Service {
  constructor() {
    super(Entity, Model);
  }

  index = (req, res) => {
    super.index(req, res, async () => {
      const users = Model.find({ dueDate: { $lt: new Date() } });
      return users;
    });
  };

  show = (req, res) => {
    super.show(req, res);
  };

  store = async (req, res) => {
    await super.store(req, res);
  };

  update = (req, res) => {
    super.update(req, res);
  };

  destroy = (req, res) => {
    super.destroy(req, res);
  };
}

module.exports = User;

const faker = require("faker");

const list = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0];

module.exports = list.map((bool) => ({
  name: faker.name.findName(),
  mail: faker.internet.email(),
  dueDate: bool ? faker.date.future() : faker.date.past(),
  value: faker.finance.amount(),
}));

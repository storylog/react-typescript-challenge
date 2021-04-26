module.exports = function() {
  const faker = require('faker');
  const _ = require('lodash');

  return {
    comments: _.times(23, function(index) {
      return {
        id: index,
        name: faker.name.findName(),
        comment: faker.lorem.sentences(),
        avatar: faker.internet.avatar(),
        profileUrl: faker.internet.url(),
        createAt: faker.date.between('2021-03-01', '2021-03-03'),
      }
    })
  }
}
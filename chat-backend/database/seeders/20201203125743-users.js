'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      password: bcrypt.hashSync('secret', 10),
      gender: 'male'
    },
    {
      firstName: 'mayer',
      lastName: 'jeon',
      email: 'mayer.jeon@gmail.com',
      password: 'secret',
      gender: 'male'
    },
    {
      firstName: 'sana',
      lastName: 'kim',
      email: 'sana@gmail.com',
      password: 'secret',
      gender: 'female'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

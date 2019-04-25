'use strict';
const faker = require("faker");

let ads = [];

 for(let i = 1 ; i <= 15 ; i++){
   ads.push({
     title: faker.hacker.noun(),
     description: faker.hacker.phrase(),
     createdAt: new Date(),
     updatedAt: new Date()
   });
 }


module.exports = {
  up: (queryInterface, Sequelize) => {

     return queryInterface.bulkInsert("Ads", ads, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Ads", null, {});
  }
};

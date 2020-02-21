'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Slides', [{
      name: 'Devil May Cry 5',
      image_url: 'https://initiate.alphacoders.com/images/948/cropped-1366-768-948585.png?8957',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Dark Souls III',
      image_url: 'https://initiate.alphacoders.com/images/600/cropped-1366-768-600921.jpg?6545',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Nier:Automata',
      image_url: 'https://images6.alphacoders.com/655/655990.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Sekiro: Shadows Die Twice',
      image_url: 'https://initiate.alphacoders.com/images/106/cropped-1366-768-1061234.jpg?4330',
      createdAt: new Date,
      updatedAt: new Date
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Slides', null, {});
  }
};

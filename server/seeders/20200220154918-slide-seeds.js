'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Slides',
      [
        {
          name: 'New York',
          image_url:
            'https://cdn.birdwatchingdaily.com/2019/12/nyc-skyline-shutterstock_412523491-1600x1067.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Los Angeles',
          image_url:
            'https://www.avianca.com/content/dam/avianca_new/destinos/lax/us_lax_playa_07_2880_1620.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Seattle',
          image_url:
            'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/seattle-travel.adapt.1900.1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chicago',
          image_url: 'https://media.timeout.com/images/105383118/image.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Florida',
          image_url:
            'https://www.fodors.com/wp-content/uploads/2019/04/ACLU-florida.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Slides', null, {});
  }
};

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'histories',
      [
        {
          userId: 1,
          ip: '1.1.1.1',
          hostname: 'PLDT',
          city: 'Makati City',
          region: 'Metro Manila',
          country: 'PH',
          loc: '1111,1111',
          org: ' Philippine Long Distance Telephone Company',
          postal: '1234',
          timezone: 'Asia/Manila',
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        },
      ],
      {},
    );
  },



  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('histories', null, {});
  },
};

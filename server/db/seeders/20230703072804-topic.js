/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Сериалы и фильмы",
        },
        {
          title: "География",
        },
        {
          title: "Мемопедия",
        },
        {
          title: "О, вы из англии",
        },
        {
          title: "Звездные воины",
        },{
          title: "Футбол",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics", null, {});
  },
};

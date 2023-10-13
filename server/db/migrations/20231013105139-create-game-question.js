/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GameQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Games',
          },
          key: 'id',
        },
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Questions',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GameQuestions');
  },
};

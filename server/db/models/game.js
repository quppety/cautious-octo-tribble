const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsToMany(models.Question, {
        through: models.GameQuestion,
        foreignKey: 'gameId',
      });
    }
  }
  Game.init(
    {
      userId: DataTypes.INTEGER,
      totalPoints: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};

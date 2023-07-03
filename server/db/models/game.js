const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id" });
      this.belongsTo(models.Topic, { foreignKey: "topic_id" });
    }
  }
  Game.init(
    {
      user_id: DataTypes.INTEGER,
      topic_id: DataTypes.INTEGER,
      corr_answer: DataTypes.STRING,
      total_points: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Game, { foreignKey: "topic_id" });
      this.hasMany(models.Question, { foreignKey: "topic_id" });
    }
  }
  Topic.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};

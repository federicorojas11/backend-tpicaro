const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");
const constants = require("../common/constants");

const MemorandumRecModel = sequelizeConnection.define(
  "memorandumReceived",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "title",
    },
    message: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "message",
    },
    sender_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "sender_id",
    },
    time: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "time",
      defaultValue: constants.estado.FALSE,
    },
    readed: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "readed",
      defaultValue: constants.estado.FALSE,
    },
  },
  {
    tableName: "memorandumReceived",
    timestamps: false,
  }
);
module.exports = MemorandumRecModel;
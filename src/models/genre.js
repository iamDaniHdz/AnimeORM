import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Genre = sequelize.define('genre', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    genre_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'genre',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "genre_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
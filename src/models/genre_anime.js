import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Genre_Anime  = sequelize.define('genre_anime', {
    id_anime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'anime',
        key: 'id'
      }
    },
    id_genre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'genre',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'genre_anime',
    schema: 'public',
    timestamps: false
  });
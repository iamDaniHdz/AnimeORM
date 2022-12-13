import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Genre_Anime } from "./genre_anime.js";

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

  Genre.hasMany(Genre_Anime,{
    foreignKey: 'id_genre',
    sourceKey : 'id'
  });

  Genre_Anime.belongsTo(Genre,{
    foreignKey: 'id_genre',
    target : 'id'
  });
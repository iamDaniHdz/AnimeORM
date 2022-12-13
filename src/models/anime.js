import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Genre_Anime } from "./genre_anime.js";
import { Rating } from "./rating.js";
export const Anime =  sequelize.define('anime', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    episodes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'anime',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anime_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  Anime.hasMany(Genre_Anime,{
    foreignKey: 'id_anime',
    sourceKey : 'id'
  });

  Genre_Anime.belongsTo(Anime,{
    foreignKey: 'id_anime',
    target : 'id'
  });

  Anime.hasMany(Rating,{
    foreignKey: 'id_anime',
    sourceKey : 'id'
  });

  Rating.belongsTo(Anime,{
    foreignKey: 'id_anime',
    target : 'id'
  });
import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import { Rating } from "./rating.js";
export const Source_Site =  sequelize.define('source_site', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    source_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'source_site',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "source_site_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  Source_Site.hasMany(Rating,{
    foreignKey : "id_source",
    sourceKey:'id'
  });

  Rating.belongsTo(Source_Site,{
    foreignKey : "id_source",
    target: 'id'
  })
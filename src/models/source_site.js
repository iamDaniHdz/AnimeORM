const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('source_site', {
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
};
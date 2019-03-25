"use strict";
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define("Burger", {
      burger_name: {
        type: DataTypes.STRING,
        validate: { notEmpty: true, len: [1, 140] }
      },
      devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
    });
  return Burger;
};

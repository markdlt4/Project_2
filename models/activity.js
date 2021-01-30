// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Activity = sequelize.define("Activity", {
    // The email cannot be null, and must be a proper email before creation
    parkName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The password cannot be null
    parkActivity: {
      type: DataTypes.STRING,
      allowNull: false
    }


  });

  Activity.associate = function (models) {
    models.Activity.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    })
  }
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database  User.prototype.validPassword = function(password) {

  return Activity;
};

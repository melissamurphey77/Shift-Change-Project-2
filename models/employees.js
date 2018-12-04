const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = function(sequelize, DataTypes) {
    const Employees = sequelize.define('Employees', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      role: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },{
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword
      }
    });

    Employees.prototype.comparePassword = function (password) {
      return bcrypt.compareAsync(password, this.password)
    }
    return Employees;
  };
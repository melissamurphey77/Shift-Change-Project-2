const db = require('../models');
const jwt = require('jsonwebtoken')
const config = require('../config/config.js')
const ONE_WEEK = 60 * 60 * 24 * 7

module.exports = {
  findAll: (req, res) => {
    db.Employees.findAll({}).then((results) => {
      res.json(results);
    });
  },
  findOne: (req, res) => {
    res.json({
      msg: `Find One: ${req.params.id}`,
    });
  },
  async create (req, res) {
    try {
      const user = await db.Employees.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwt.sign(userJson, config.authentication.jwtSecret, {
          expiresIn: ONE_WEEK
        })
      })
    } catch(err) {
      res.status(400).send({
        error: 'This email is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await db.Employees.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'This login information was incorrect 1'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'This login information was incorrect 2'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwt.sign(userJson, config.authentication.jwtSecret, {
          expiresIn: ONE_WEEK
        })
      })
    } catch(error) {
      res.status(500).send({
        error: 'An error has occured trying to login ' + error
      })
    }
  },
  update: (req, res) => {
    res.json({
      msg: 'Update One: ${req.params.id}',
    });
  },
  delete: (req, res) => {
    db.Employees.destroy({where: {id: req.params.id}}).then((results) => {
      res.json(results);
    });
  },
};

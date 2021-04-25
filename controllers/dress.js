const Dress = require('../models/dress')
const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async function(req, res) {
    try {
      const dresses = await Dress.find()
      res.status(200).json(dresses)
    } catch (e) {
      errorHandler(res, e)
    }
  }
  
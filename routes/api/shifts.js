const router = require('express').Router(); // eslint-disable-line new-cap
const shiftController = require('../../controllers/shift');

router.get('/', shiftController.findAll);
router.get('/:id', shiftController.findOne);
router.post('/', shiftController.create);
router.put('/:id', shiftController.update);
router.delete('/:id', shiftController.delete);

module.exports = router;

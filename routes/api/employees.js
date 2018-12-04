const router = require('express').Router(); // eslint-disable-line new-cap
const employeeController = require('../../controllers/employee');
const AuthenticationControllerPolicy = require('../../policies/AuthenticationControllerPolicy');

router.get('/', employeeController.findAll);
router.get('/:id', employeeController.findOne);
router.post('/register', AuthenticationControllerPolicy.create, employeeController.create);
router.post('/login', employeeController.login);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.delete);

module.exports = router;

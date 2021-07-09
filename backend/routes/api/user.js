const router = require('express').Router();
const userController = require('../../controllers/userController.js');

// Matches with "/api/user"
router.route('/').get(userController.findAll).post(userController.create);

// Matches with "/api/user/:id"
router
  .route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/username/:username"
router.route('/username/:username').get(userController.findByUsername);

module.exports = router;

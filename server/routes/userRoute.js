const exprss = require('express');
const userRouter = exprss.Router();
module.exports = userRouter;

const userController = require('../controllers/usersController.js');

userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);

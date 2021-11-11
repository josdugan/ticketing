import express, { Request, Response } from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middlewares/validate-request';
import { User } from '../models/user';
import { JWTService } from '../services/jwt';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Passowrd must be between 4 and 20 characters in length'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = User.build({
      email,
      password,
    });
    await user.save();

    req.session = {
      jwt: JWTService.generate(user),
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };

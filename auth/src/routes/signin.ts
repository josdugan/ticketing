import express, { Request, Response } from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { User } from '../models/user';
import { Password } from '../services/password';
import {
  BadRequestError,
  validateRequest,
  JWTService,
} from '@josdugantickets/common';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }

    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );

    if (!passwordsMatch) {
      throw new BadRequestError('Invalid credentials');
    }

    req.session = {
      jwt: JWTService.generate(existingUser),
    };

    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };

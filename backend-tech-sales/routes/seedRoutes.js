import express from 'express';
import Product from '../Models/productModels.js';
import data from '../data.js';
import User from '../Models/userModel.js';

const seedRouter = express.Router();
seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.product);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;

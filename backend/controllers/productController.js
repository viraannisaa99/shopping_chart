const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products); // front end will make a req to this endpoint and will got this json response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// const addProduct = async (req, res) => {
//   await new Product(req.body).save((err, data) => {
//     if (err) {
//       res.status(500).json({
//         message: 'Something went wrong',
//       });
//     } else {
//       res.status(200).json({
//         message: 'Product Created',
//         data,
//       });
//     }
//   });
// };

const addProduct = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.status(200).json({
      message: 'Product Created',
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

const deleteProduct = async (req, res) => {
  let productID = req.params.id;

  try {
    const product = await Product.deleteOne({ _id: productID });
    res.status(200).json({ message: 'Product Deleted Successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateProduct = async (req, res) => {
  let productID = req.params.id;

  try {
    const product = await Product.findByIdAndUpdate({ _id: productID }, { $set: req.body });
    res.status(200).json({
      message: 'Product Updated',
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};

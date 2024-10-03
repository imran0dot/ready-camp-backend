// models/productModel.ts
import mongoose, { Document, Schema } from 'mongoose';
import IProduct from './product.interface';

interface IProductDocument extends IProduct, Document { }

const productSchema: Schema = new Schema<IProductDocument>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  salePrice: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  tags: {
    type: [String],
    default: [],
  },
  brand: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  dimensions: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
  },
  images: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

const Product = mongoose.model<IProductDocument>('Product', productSchema);

export default Product;

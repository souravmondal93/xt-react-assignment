import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { ProductItemSchema, ProductItem } from './product-item.schema';

export type CartDocument = Cart & Document;

@Schema({ timestamps: true })
export class Cart {
  @Prop({ type: [ProductItemSchema] })
  products: ProductItem[];

  @Prop({ default: 0, required: true })
  total: number;

  @Prop({ required: true })
  customerId: string;
}

const CartSchema = SchemaFactory.createForClass(Cart);

export { CartSchema };

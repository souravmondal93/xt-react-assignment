import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type ProductItemDocument = ProductItem & Document;

@Schema()
export class ProductItem {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  quantity: number;
}

export const ProductItemSchema = SchemaFactory.createForClass(ProductItem);

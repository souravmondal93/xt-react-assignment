import {
  IsNumber,
  ValidateNested,
  IsString,
  IsNotEmpty,
  Min,
  IsMongoId,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProductItem {
  @IsMongoId()
  _id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsNumber()
  @Min(1)
  quantity: number;
}

export class CreateCartDto {
  @ValidateNested({ each: true })
  @Type(() => ProductItem)
  products: ProductItem[];

  @IsNumber()
  @IsNotEmpty()
  total: number;
}

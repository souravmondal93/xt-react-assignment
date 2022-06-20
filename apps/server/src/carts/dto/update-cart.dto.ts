import { PartialType } from '@nestjs/mapped-types';
import {
  IsNumber,
  ValidateNested,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Exclude, Type } from 'class-transformer';

import { CreateCartDto, ProductItem } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  @IsOptional()
  @Exclude()
  _id?: string;

  @ValidateNested({ each: true })
  @Type(() => ProductItem)
  products: ProductItem[];

  @IsOptional()
  @Exclude()
  total: number;

  @IsOptional()
  @Exclude()
  customerId?: string;
}

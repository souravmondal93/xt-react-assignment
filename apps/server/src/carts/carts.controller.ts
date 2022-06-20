import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ForbiddenException,
} from '@nestjs/common';

import { CONSTANTS } from '../constants';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cookies } from '../decorators';

import { IsMongoId } from 'class-validator';

class ParamsWithId {
  @IsMongoId()
  id: string;
}

export default ParamsWithId;

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post('/create')
  async create(
    @Body() createCartDto: CreateCartDto,
    @Cookies(CONSTANTS.CUSTOMER_COOKIE_KEY) customerId: string,
  ) {
    if (!customerId) {
      throw new ForbiddenException({
        message: `Error: CustomerID is missing`,
      });
    }

    const cart = await this.cartsService.findOne(customerId);
    if (cart.length) {
      throw new ForbiddenException({
        message: `Error: Can't create new cart as the customer has existing cart with products`,
      });
    }

    const updatedCart = {
      ...createCartDto,
      customerId,
    };

    return await this.cartsService.create(updatedCart);
  }

  @Get()
  findAll() {
    return this.cartsService.findAll();
  }

  @Get('/my-cart')
  async findMyCart(@Cookies(CONSTANTS.CUSTOMER_COOKIE_KEY) customerId: string) {
    const myCart = await this.cartsService.findByCustomerId(customerId);

    if (!myCart) {
      const emptyCart = {
        products: [],
        total: 0,
        customerId,
      };

      const newCart = await this.cartsService.create(emptyCart);
      return newCart;
    }

    return myCart;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(id);
  }

  @Put('/update-cart')
  async update(
    @Cookies(CONSTANTS.CUSTOMER_COOKIE_KEY) customerId: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    const total = updateCartDto.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
    const myCart = await this.cartsService.findByCustomerId(customerId);
    const cart = {
      ...updateCartDto,
      customerId: myCart.customerId,
      total,
      _id: myCart._id,
    };

    return this.cartsService.update(customerId, cart);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}

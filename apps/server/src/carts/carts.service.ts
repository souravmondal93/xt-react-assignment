import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Cart, CartDocument } from './schemas/cart.schema';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel(Cart.name)
    private readonly cartModel: Model<CartDocument>,
  ) {}

  async create(createCartDto) {
    const createdCart = new this.cartModel(createCartDto);

    return createdCart.save();
  }

  findAll() {
    return `This action returns all carts`;
  }

  async findOne(id) {
    const cart = await this.cartModel.find({ _id: id });
    return cart;
  }

  async findByCustomerId(customerId) {
    const cart = await this.cartModel.findOne({
      customerId: { $eq: customerId },
    });
    return cart;
  }

  async update(id, updateCartDto: UpdateCartDto) {
    const updatedCart = await this.cartModel
      .findOneAndUpdate(
        {
          customerId: { $eq: id },
        },
        updateCartDto,
      )
      .setOptions({ new: true });

    if (!updatedCart) {
      throw new NotFoundException();
    }

    return updatedCart;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}

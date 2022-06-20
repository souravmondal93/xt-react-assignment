import { faker } from '@faker-js/faker';

const generateRandomProductDetails = () => {
  return {
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(1, 1000, 2, '$'),
    description: faker.commerce.productDescription(),
    imageUrl: faker.image.food(640, 480, true),
  };
};

const generateProductsList = (number) => {
  const products = [];
  for (let i = 0; i < number; i++) {
    const product = generateRandomProductDetails();
    products.push(product);
  }

  return products;
};

console.log('Products: ', generateProductsList(1024));

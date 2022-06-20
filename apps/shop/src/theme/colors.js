import * as C from './color-tokens';

const colors = {
  colorSchemes: {
    light: {
      cta: {
        primary: `
          background-color: ${C.primaryColor[900]};
          color: ${C.primaryColor[100]};
          border: 1px solid ${C.primaryColor[900]};
          &:disabled {
            background-color: ${C.primaryColor[600]};
            color: ${C.primaryColor[100]};
            border: 1px solid ${C.primaryColor[600]};
          }
        `,
        secondary: `
          background-color: ${C.primaryColor[50]};
          color: ${C.primaryColor[900]};
          border: 1px solid ${C.primaryColor[900]};
          &:disabled {
            background-color: ${C.primaryColor[200]};
            color: ${C.primaryColor[500]};
            border: 1px solid ${C.primaryColor[500]};
          }
        `,
      },
      header: `
        background-color: ${C.primaryColor[900]};
        color: ${C.primaryColor[100]};
      `,
      link: {
        primary: `
          color: ${C.primaryColor[100]};
        `,
        secondary: `
          background-color: ${C.primaryColor[50]};
          color: ${C.primaryColor[900]};
        `,
      },
      productCard: {
        wrapper: `
          border: 1px solid ${C.primaryColor[900]};
        `,
      },
      cartItem: {
        price: `
          color: ${C.primaryColor[500]};
        `,
        subTotal: `
          color: ${C.primaryColor[900]};
        `,
      },
      pagination: {
        paginationItem: `
          border: 1px solid ${C.primaryColor[900]};
          background-color: ${C.primaryColor[50]};
        `,
      },
    },
    dark: {},
  },
};

export default colors;

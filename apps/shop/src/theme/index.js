import colors from './colors';

const theme = {
  animation: {
    easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  },
  borderWidths: [0, '1px'],
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  fonts: {
    normal:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px'],
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
  },
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    default: 1.5,
  },
  radii: ['0', '3px', '6px', '100px'],
  sizes: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px',
  },
  space: [
    '0',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
    '40px',
    '48px',
    '64px',
    '80px',
    '96px',
    '112px',
    '128px',
  ],
  ...colors,
};

export default theme;

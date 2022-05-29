import '@unocss/reset/tailwind.css';
import '../src/index.css';
import 'uno.css';
import 'virtual:unocss-devtools';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#333'
      }
    ]
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Documentation', 'Pages', ['Home'], 'Components'],
    },
  },
}

import { ThemeProvider } from '@emotion/react';
import { withTests } from '@storybook/addon-jest';

import { GlobalStyle } from "../utils";
import defaultTheme from '../themes/default';

import results from '../__test-results__/.jest-results.json';

export const decorators = [(Story) => (
  <>
    <GlobalStyle theme={defaultTheme} />
    <Story />
  </>
), (Story) => (
  <ThemeProvider theme={defaultTheme}>
    <Story />
  </ThemeProvider>
), withTests({ results })];

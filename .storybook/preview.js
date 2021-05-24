export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Documentation', 'Pages', ['Home'], 'Components'],
    },
  },
}

import { ThemeProvider } from '@emotion/react';

import { GlobalStyle } from "../utils";
import defaultTheme from '../themes/default';

export const decorators = [(Story) => (
  <>
    <GlobalStyle theme={defaultTheme} />
    <Story />
  </>
), (Story) => (
  <ThemeProvider theme={defaultTheme}>
    <Story />
  </ThemeProvider>
)];

import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import configureStore from '@/stores/config';
import { GlobalStyle } from '@/utils';
import defaultTheme from '@/themes/default';

const store = configureStore();

export type State = ReturnType<typeof store.getState>


function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Provider store={store}> 
    <GlobalStyle theme={defaultTheme} />
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} /> 
    </ThemeProvider>
  </Provider>;
}
export default MyApp;

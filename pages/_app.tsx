import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '@/store';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

const App: FC<AppProps> = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App

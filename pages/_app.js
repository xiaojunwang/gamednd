import App from 'next/app';
import { StoreProvider } from 'easy-peasy';
import store from '../store';

function MyApp({ Component, pageProps, user }) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;

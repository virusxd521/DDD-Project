import type { AppProps } from 'next/app';
import '../application/styles/reset.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

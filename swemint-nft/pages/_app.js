import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'


function MyApp({ Component, pageProps }) {
  const serverUrl = "https://fgobknghleyp.usemoralis.com:2053/server";
  const appId = "b6IxjhUZhcj7B3Y1TxRcyKGVPqICIlr4rDVVlTZ4";
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl} >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp

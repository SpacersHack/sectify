
import type { AppProps } from "next/app";
import Head from "next/head";
import { sepolia } from "viem/chains";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "@/styles/globals.css";


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()]
);



const config = createConfig({
  autoConnect: false,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}
    theme={darkTheme({
      accentColor: 'rgb(9,84,148)'
    })}>
        
          <Head>
            <title>Sectify</title>
          </Head>

          
            
              <Component {...pageProps} />
            
          
              </RainbowKitProvider>
      
    </WagmiConfig>
  );
}

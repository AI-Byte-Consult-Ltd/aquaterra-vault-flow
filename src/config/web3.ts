import { createConfig, http } from 'wagmi'
import { mainnet, cronos } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

// WalletConnect project ID - In production, replace with your own
const projectId = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'

export const config = createConfig({
  chains: [cronos, mainnet],
  connectors: [
    injected(),
    walletConnect({ projectId }),
  ],
  transports: {
    [cronos.id]: http(),
    [mainnet.id]: http(),
  },
})

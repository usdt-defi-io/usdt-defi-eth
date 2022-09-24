import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'USDTd',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      1: '0x93D00A0fBd822F249458C5f973bee6C5248670a9',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'USDTd-ETH LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      1: '0x7ffe6ed7f1f04b2aa92a92f1dd1cc61c9c228aa3',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  }
 

  ,
  {
    pid: 2,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      97: '',
      1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  }
  ,
  {
    pid: 3,
    lpSymbol: 'USDTd-MATIC LP',
    lpAddresses: {
      97: '',
      1: '0xa9a572c36125577ce800cf25bc78fdc6a956606f',
    },
    token: serializedTokens.matic,
    quoteToken: serializedTokens.cake,
  }
 
  ,
  {
    pid: 4,
    lpSymbol: 'USDTd-USDC LP',
    lpAddresses: {
      97: '',
      1: '0x921c289e54e3eff5d83914752699f96fd6f1c0b0',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.cake,
  }
  ,
  {
    pid: 5,
    lpSymbol: 'USDTd-BTC LP',
    lpAddresses: {
      97: '',
      1: '0x1cf2a8af13d56beeefc6cb2e1bd2d85f382993ea',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.cake,
  }
  

]

export default farms

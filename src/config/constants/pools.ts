import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      1: '0x7CE7E250faf3D974703493279725a6A1BF2Fa478',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.03',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 1,
    stakingToken: serializedTokens.usdt,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      1: '0xe4f7a4f766e68292ec02e7af1774b877de3d8242',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '314',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.busd,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      1: '0xf1bcf20991101304efb9f34f84df43026b6b0d15',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '311',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.wbnb,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      1: '0x076c826ac6647e43d4aa9c823c2b9365f53c312c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '402',
    sortOrder: 1,
    isFinished: false,
  }
  
]

export default pools

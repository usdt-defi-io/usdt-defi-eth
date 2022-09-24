export const getBaseNftFields = () => `
  tokenId
  metadataUrl
  currentAskPrice
  currentSeller
  latestTradedPriceInETH
  tradeVolumeETH
  totalTrades
  isTradable
  updatedAt
  otherId
  collection {
    id
  }
`

export const getBaseTransactionFields = () => `
  id
  block
  timestamp
  askPrice
  netPrice
  withETH
  buyer {
    id
  }
  seller {
    id
  }
`

export const getCollectionBaseFields = () => `
  id
  name
  symbol
  active
  totalTrades
  totalVolumeETH
  numberTokensListed
  creatorAddress
  tradingFee
  creatorFee
  whitelistChecker
`

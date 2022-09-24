import { ChainId, Currency, currencyEquals, JSBI, Price } from '@pancakeswap/sdk'
import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import tokens, { mainnetTokens } from 'config/constants/tokens'
import { PairState, usePairs } from './usePairs'
import { wrappedCurrency } from '../utils/wrappedCurrency'

const USDC_MAINNET = mainnetTokens.busd
const { wbnb: WETH } = tokens

/**
 * Returns the price in USDC of the input currency
 * @param currency currency to compute the USDC price of
 */
export default function useBUSDPrice(currency?: Currency): Price | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(currency, chainId)
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [chainId && wrapped && currencyEquals(WETH, wrapped) ? undefined : currency, chainId ? WETH : undefined],
      [wrapped?.equals(USDC_MAINNET) ? undefined : wrapped, chainId === ChainId.MAINNET ? USDC_MAINNET : undefined],
      [chainId ? WETH : undefined, chainId === ChainId.MAINNET ? USDC_MAINNET : undefined],
    ],
    [chainId, currency, wrapped],
  )
  const [[ethPairState, ethPair], [busdPairState, busdPair], [busdEthPairState, busdEthPair]] = usePairs(tokenPairs)
  // console.log(busdEthPair)
  return useMemo(() => {
    if (!currency || !wrapped || !chainId) {
      return undefined
    }
    // handle weth/eth
    if (wrapped.equals(WETH)) {
      if (busdPair) {
        const price = busdPair.priceOf(WETH)
        return new Price(currency, USDC_MAINNET, price.denominator, price.numerator)
      }
      return undefined
    }
    // handle busd
    if (wrapped.equals(USDC_MAINNET)) {
      return new Price(USDC_MAINNET, USDC_MAINNET, '1', '1')
    }

    const ethPairETHAmount = ethPair?.reserveOf(WETH)
    const ethPairETHUSDCValue: JSBI =
      ethPairETHAmount && busdEthPair ? busdEthPair.priceOf(WETH).quote(ethPairETHAmount).raw : JSBI.BigInt(0)


      
    // all other tokens
    // first try the busd pair
    if (
      busdPairState === PairState.EXISTS &&
      busdPair &&
      busdPair.reserveOf(USDC_MAINNET).greaterThan(ethPairETHUSDCValue)
    ) {
      const price = busdPair.priceOf(wrapped)
      return new Price(currency, USDC_MAINNET, price.denominator, price.numerator)
    }
    if (ethPairState === PairState.EXISTS && ethPair && busdEthPairState === PairState.EXISTS && busdEthPair) {
      if (busdEthPair.reserveOf(USDC_MAINNET).greaterThan('0') && ethPair.reserveOf(WETH).greaterThan('0')) {
        const ethBusdPrice = busdEthPair.priceOf(USDC_MAINNET)
        const currencyEthPrice = ethPair.priceOf(WETH)
        const busdPrice = ethBusdPrice.multiply(currencyEthPrice).invert()
        return new Price(currency, USDC_MAINNET, busdPrice.denominator, busdPrice.numerator)
      }
    }

    return undefined
  }, [chainId, currency, ethPair, ethPairState, busdEthPair, busdEthPairState, busdPair, busdPairState, wrapped])
}

export const useCakeBusdPrice = (): Price | undefined => {
  const cakeBusdPrice = useBUSDPrice(tokens.cake)
  return cakeBusdPrice
}

export const useETHBusdPrice = (): Price | undefined => {
  const bnbBusdPrice = useBUSDPrice(tokens.wbnb)
  return bnbBusdPrice
}

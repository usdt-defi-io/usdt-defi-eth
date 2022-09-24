import { Address } from '../types'

export enum CollectionKey {
  PANUSDTd = 'pancake',
  SQUAD = 'pancakeSquad',
}

export type Collection = {
  name: string
  description?: string
  slug: string
  address: Address
}

export type Collections = {
  [key in CollectionKey]: Collection
}

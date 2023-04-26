//Types from https://docs.github.com/en/graphql/reference/objects
export type PageInfo = {
  hasNextPage: boolean
  endCursor: string
}

//It implements generic types to make it more flexible
export type Edge<T> = {
  cursor: string
  node: T
}

//Marketplace listings data
export type DataFields<T> = {
  marketplaceListings: {
    edges: Edge<T>[]
    pageInfo: PageInfo
    __typename: string
  }
}

export type MarketplaceListingProps = {
  id: string
  name: string
  logoUrl: string
}

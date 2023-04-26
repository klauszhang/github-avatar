import { gql } from '@apollo/client'

const MARKETPLACE_LISTINGS_QUERY = gql`
  query MarketplaceListings($first: Int, $after: String) {
    marketplaceListings(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          logoUrl
          name
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export { MARKETPLACE_LISTINGS_QUERY }

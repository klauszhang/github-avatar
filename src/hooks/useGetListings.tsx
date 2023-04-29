import { QueryResult, gql, useQuery } from '@apollo/client'

export const useGetListings = (): Pick<
  QueryResult,
  'data' | 'loading' | 'error'
> => {
  const avatarQuery = gql`
    query MarketPlaceQuery {
      marketplaceListings(first: 40) {
        edges {
          cursor
          node {
            logoUrl
            name
            url
          }
        }
      }
    }
  `

  const { data, loading, error } = useQuery(avatarQuery)
  return { data, loading, error }
}

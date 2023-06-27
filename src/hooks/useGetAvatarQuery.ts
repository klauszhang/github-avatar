import { gql, useQuery } from '@apollo/client'


export const useGetAvatarQuery = () => {
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

  return useQuery(avatarQuery, {
    variables: { cursor: null },
  })
}
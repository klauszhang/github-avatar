import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Container, Grid } from '@mui/material'
import AvatarCard from './components/AvatarCard'
import useInfiniteScroll from './hooks/useInfiniteScroll'
import { useCallback, useRef, useState } from 'react'
import AvatarCardSkeleton from './components/AvatarCardSkeleton'

export const avatarQuery = gql`
  query MarketPlaceQuery($cursor: String, $first: Int = 40) {
    marketplaceListings(first: $first, after: $cursor) {
      edges {
        cursor
        node {
          logoUrl
          logoBackgroundColor
          name
          shortDescription
        }
      }
      # GQL pagination
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

function App() {
  const { loading, error, data, fetchMore } = useQuery(avatarQuery, {
    variables: { cursor: null, first: 40 },
  })

  // Custom loading state to show skeleton UI at correct time
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const loader = useRef(null)

  const fetchMoreCallback = useCallback(() => {
    if (data && data.marketplaceListings.pageInfo.hasNextPage) {
      setIsLoadingMore(true)
      fetchMore({
        variables: {
          cursor: data.marketplaceListings.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          setIsLoadingMore(false)
          if (!fetchMoreResult) return prev
          return {
            marketplaceListings: {
              ...fetchMoreResult.marketplaceListings,
              edges: [
                ...prev.marketplaceListings.edges,
                ...fetchMoreResult.marketplaceListings.edges,
              ],
            },
          }
        },
      })
    }
  }, [data, fetchMore])

  useInfiniteScroll(loader, fetchMoreCallback)

  // Todo: Add useful error handling UI
  if (error) return <div>error</div>

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid container columnSpacing={2} rowSpacing={4} alignItems="stretch">
        {loading && !data // If it's loading and data is still not there (initial load)
          ? Array.from({ length: 12 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <AvatarCardSkeleton />
              </Grid>
            ))
          : data.marketplaceListings.edges.map((d: any) => {
              const { logoUrl, logoBackgroundColor, name, shortDescription } =
                d.node
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={d.cursor}>
                  <AvatarCard
                    cardName={name}
                    imgUrl={logoUrl}
                    imgBgColor={logoBackgroundColor}
                    description={shortDescription}
                  />
                </Grid>
              )
            })}

        {/* Intersection Obeserver Element  */}
        <div ref={loader} />

        {isLoadingMore
          ? Array.from({ length: 20 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <AvatarCardSkeleton />
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  )
}

export default App

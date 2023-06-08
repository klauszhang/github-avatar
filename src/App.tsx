import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Container, Grid, Button, Box, LinearProgress } from '@mui/material'
import AvatarCard from './components/AvatarCard'

export const avatarQuery = gql`
  query MarketPlaceQuery($cursor: String) {
    marketplaceListings(first: 40, after: $cursor) {
      edges {
        cursor
        node {
          logoUrl
          logoBackgroundColor
          name
          shortDescription
        }
      }
      # GraphQL pagination specification
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

function App() {
  const { loading, error, data, fetchMore } = useQuery(avatarQuery, {
    variables: { cursor: null },
  })

  // Adding loading page animation
  if (loading) return <LinearProgress color="success" />
  if (error) return <div>error</div>

  //load More function to fetch more data on button click
  const loadMore = () => {
  fetchMore({
    variables: {
      cursor: data.marketplaceListings.pageInfo.endCursor,
    },
    // update cache after fetchMore to render new array of data
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      return {
        marketplaceListings: {
          ...fetchMoreResult.marketplaceListings,
          edges: [
            ...prev.marketplaceListings.edges,
            ...fetchMoreResult.marketplaceListings.edges,
          ],
        },
      };
    },
  });
};

  return (
    <Container maxWidth="xl">
      <Grid container columnSpacing={2} rowSpacing={4}>
        {data.marketplaceListings.edges.map((d: any) => {
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
      </Grid>
      {/* Load More button to fetch more data and render them */}
      {data.marketplaceListings.pageInfo.hasNextPage && (
        <Box sx={{ position: 'fixed', right: 0, bottom: 0, margin: 3 }}>
          <Button variant="contained" color='primary' onClick={loadMore}>
            Load more
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default App
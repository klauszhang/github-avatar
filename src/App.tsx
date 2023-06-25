import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Container, Grid } from '@mui/material'
import AvatarCard from './components/AvatarCard'

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

  if (loading) return <div>loading...</div>
  if (error) return <div>error</div>

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
    </Container>
  )
}

export default App

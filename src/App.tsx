import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Container, Grid } from '@mui/material'
import AvatarCard from './components/AvatarCard'

export const avatarQuery = gql`
  query MarketPlaceQuery {
    marketplaceListings(first: 40) {
      edges {
        cursor
        node {
          logoUrl
          name
        }
      }
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(avatarQuery)

  if (loading) return <div>loading...</div>
  if (error) return <div>error</div>

  return (
    <Container maxWidth="xl">
      <Grid container columnSpacing={2} rowSpacing={4}>
        {data.marketplaceListings.edges.map((d: any) => {
          const { logoUrl, name } = d.node
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={d.cursor}>
              <AvatarCard cardName={name} logoUrl={logoUrl} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default App

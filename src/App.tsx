import { gql } from '@apollo/client'
import { Container } from '@mui/material'
import MarketplaceListing from './components/MarketplaceListing/MarketplaceListing'

export const avatarQuery = gql`
  query MarketPlaceQuery {
    marketplaceListings(first: 40) {
      edges {
        cursor
        node {
          logoUrl
          logoBackgroundColor
          name
          shortDescription
        }
      }
    }
  }
`

function App() {

  return (
    <Container maxWidth="xl">
      <MarketplaceListing />
    </Container>
  )
}

export default App

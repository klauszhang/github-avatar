import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Container, Grid, Pagination } from '@mui/material'
import AvatarCard from './components/AvatarCard'
import { useState } from 'react'

const COUNT_PER_PAGE = 40

function getAvatarQuery(page: number) {
  const offset = (page - 1) * COUNT_PER_PAGE

  return gql`
  query MarketPlaceQuery {
    marketplaceListings(first: ${COUNT_PER_PAGE}, offset: ${offset}) {
      totalCount,
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
}

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const { loading, error, data } = useQuery(getAvatarQuery(currentPage))

  if (loading) return <div>loading...</div>
  if (error) return <div>error</div>

  const numberOfPages = Math.ceil((data?.marketplaceListings?.totalCount || 1) / COUNT_PER_PAGE)

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
  }

  return (
    <Container maxWidth="xl">
      <Pagination count={numberOfPages} onChange={handlePageChange} page={currentPage} />
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
      <Pagination count={numberOfPages} onChange={handlePageChange} page={currentPage} />
    </Container>
  )
}

export default App

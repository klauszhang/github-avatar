import { useState, useLayoutEffect } from 'react'

import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { gql } from '@apollo/client'

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


const padding = 5

const AppWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const Row = styled.div({
  display: 'flex',
  flexDirection: 'row',
})

export const iconWidth = 120

export const borderWidth = 1
export const cardWidth = 120 + borderWidth * 2

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: `${borderWidth}px solid #ccc`,
  width: iconWidth,
})

const ImageWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding,
})

const Image = styled.img({
  width: iconWidth - padding * 2,
  height: iconWidth - padding * 2,
})

const Title = styled.h5({
  overflow: 'hidden',
})

function App() {
  const { loading, error, data } = useQuery(avatarQuery)
  const [[columCount, rowCount], setSize] = useState([0, 0])

  useLayoutEffect(() => {
    function updateSize() {
      if (loading) return
      if (error) return
      const columCount = Math.floor(window.innerWidth / cardWidth)
      const rowCount = Math.ceil(
        data.marketplaceListings.edges.length / columCount
      )

      setSize([columCount, rowCount])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [data, loading, error])

  if (loading) return <div>loading...</div>
  if (error) return <div>error</div>

  return (
    <AppWrapper>
      {Array.from({ length: rowCount }).map((_, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {data.marketplaceListings.edges
              .slice(rowIndex * columCount, (rowIndex + 1) * columCount)
              .map((d: any) => {
                const { logoUrl, name } = d.node
                return (
                  <Wrapper key={d.cursor}>
                    <Title>{name}</Title>
                    <ImageWrapper>
                      <Image src={logoUrl} alt="avatar" />
                    </ImageWrapper>
                  </Wrapper>
                )
              })}
          </Row>
        )
      })}
    </AppWrapper>
  )
}

export default App

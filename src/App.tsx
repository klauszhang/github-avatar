import styled from 'styled-components'
import useLoadMore from './hooks/useLoadMore'
import { MARKETPLACE_LISTINGS_QUERY } from './api/queries/github'
import { MarketplaceListingProps } from './types/common'

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
  const { dataList, loading, error, handleLoadMore } =
    useLoadMore<MarketplaceListingProps>(MARKETPLACE_LISTINGS_QUERY)

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <AppWrapper>
      {dataList.map((item) => (
        <Wrapper key={item.id}>
          <Title>{item.name}</Title>
          <ImageWrapper>
            <Image src={item.logoUrl} alt="avatar" />
          </ImageWrapper>
        </Wrapper>
      ))}
      {loading && <div>Loading...</div>}
      {handleLoadMore && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </AppWrapper>
  )
}

export default App

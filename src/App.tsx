import useLoadMore from './hooks/useLoadMore'
import { MARKETPLACE_LISTINGS_QUERY } from './api/queries/github'
import { MarketplaceListingProps } from './types/common'
import { AppWrapper, Wrapper, Title, ImageWrapper, Image } from './App.styled'

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

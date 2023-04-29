import * as styled from './styles/App.styled'
import { useGetListings } from './hooks/useGetListings'
import { AvatarCard } from './components/AvatarCard'

function App() {
  const { loading, error, data } = useGetListings()

  if (loading) return <div>loading...</div>
  if (error) return <div>error</div>
  if (!data) return <div>No data available</div>

  return (
    <styled.AppWrapper>
      {data.marketplaceListings.edges.map((d: any) => {
        const { logoUrl, name, url } = d.node
        return (
          <AvatarCard key={d.cursor} name={name} logoUrl={logoUrl} url={url} />
        )
      })}
    </styled.AppWrapper>
  )
}

export default App

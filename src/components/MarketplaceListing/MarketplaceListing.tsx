import { Box, Grid } from '@mui/material'
import AvatarCard from '../AvatarCard'
import { useGetAvatarQuery } from '../../hooks/useGetAvatarQuery'
import CircularProgress from '@mui/material/CircularProgress';
import * as styles from './MarketplaceListing.styles'


const MarketplaceListing =()=>  {
    const { loading, error, data } = useGetAvatarQuery()
  
    if (loading) return <Box sx={styles.Container}> <CircularProgress /></Box>
    if (error) return <div>error</div>
  
    return (
        <Grid container columnSpacing={2} rowSpacing={4}>
          {data.marketplaceListings.edges.map((d: any) => {
            const { logoUrl, url, name } =
              d.node
              console.log(d.node);
              
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={d.cursor}>
                <AvatarCard
                  cardName={name}
                  imgUrl={logoUrl}
                  url={url}
                />
              </Grid>
            )
          })}
        </Grid>
    )
  }
  
  export default MarketplaceListing
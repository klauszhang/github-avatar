import React from 'react'
import { Box, Card, CardMedia, CardContent, Link } from '@mui/material'
import EllipsisContentTypographyProps from '../EllipsisContentTypography'
import * as styles from './AvatarCard.styles'

interface AvatarCardProps {
  cardName: string
  imgUrl: string
  url: string 
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  cardName,
  imgUrl,
  url,
}) => {
  return (
    <Card
      raised={true}
      sx={styles.CardContainer}
    >
      <Box
        sx={styles.Box}
      >
        <CardMedia
          component="img"
          sx={styles.CardMedia}
          image={imgUrl}
          alt={cardName}
        />
      </Box>
      <CardContent sx={styles.CardContent}>
        <Box>
          
          <EllipsisContentTypographyProps variant="h6" lines={2} sx={styles.Typography}>
            <Link href={url} underline="hover" target="_blank" rel="noreferrer">
              {cardName}
            </Link> 
          </EllipsisContentTypographyProps>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AvatarCard

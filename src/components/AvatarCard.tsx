import React from 'react'
import { Box, Card, CardMedia, CardContent } from '@mui/material'
import EllipsisContentTypography from './EllipsisContentTypography'

interface AvatarCardProps {
  cardName: string
  imgUrl: string
  imgBgColor: string // The hex color code, without the leading '#'
  description: string
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  cardName,
  imgUrl,
  imgBgColor,
  description,
}) => {
  const imgBgColorWithSharp = '#' + imgBgColor

  return (
    <Card
      raised={true}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: {
          xs: '100%',
          sm: 400,
        },
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          p: 2,
          backgroundColor: imgBgColorWithSharp,
        }}
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: 200 }}
          image={imgUrl}
          alt={cardName}
        />
      </Box>
      <CardContent sx={{ p: 3, width: '100%' }}>
        <Box>
          <EllipsisContentTypography variant="h6" sx={{ mb: 1 }} lines={2}>
            {cardName}
          </EllipsisContentTypography>
          <EllipsisContentTypography variant="body1" lines={3}>
            {description}
          </EllipsisContentTypography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AvatarCard

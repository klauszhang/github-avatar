import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { color } from '@mui/system'

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
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
          <Typography variant="h6" sx={{ mb: 1 }}>
            {cardName}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AvatarCard

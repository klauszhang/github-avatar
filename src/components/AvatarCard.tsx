import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'

interface AvatarCardProps {
  cardName: string
  logoUrl: string
}

const AvatarCard: React.FC<AvatarCardProps> = ({ cardName, logoUrl }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ maxWidth: 200 }}
        image={logoUrl}
        alt={cardName}
      />
      <CardContent>
        <Typography variant="body1">{cardName}</Typography>
      </CardContent>
    </Card>
  )
}

export default AvatarCard

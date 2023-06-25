import { Card, CardContent, Skeleton } from '@mui/material'
const AvatarCardSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" width="100%" height={250} />
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  )
}

export default AvatarCardSkeleton

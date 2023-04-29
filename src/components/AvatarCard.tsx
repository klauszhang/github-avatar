import { Card, CardHeader, CardMedia } from '@mui/material'
import * as styled from './AvatarCard.styled'

interface IProps {
  name: string
  logoUrl: string
  url: string
}
export const AvatarCard = (props: IProps) => {
  const { name, logoUrl, url } = props
  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <styled.CardLink href={url} target="blank">
            {name}
          </styled.CardLink>
        }
      />

      <CardMedia component={'img'} image={logoUrl} alt={`${name} avatar`} />
    </Card>
  )
}

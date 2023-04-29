import { Card } from '@mui/material'
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
      <styled.CardTitle>
        <styled.CardLink href={url} target="blank">
          {name}
        </styled.CardLink>
      </styled.CardTitle>
      <styled.CardIconWrapper>
        <styled.CardIcon src={logoUrl} alt="avatar" />
      </styled.CardIconWrapper>
    </Card>
  )
}

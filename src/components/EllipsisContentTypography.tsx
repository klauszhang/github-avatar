import Typography, { TypographyProps } from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

interface EllipsisContentTypographyProps extends TypographyProps {
  lines: number
}

const EllipsisContentTypography = styled(
  Typography
)<EllipsisContentTypographyProps>(({ theme, lines }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
  wordBreak: 'break-word',
}))

export default EllipsisContentTypography

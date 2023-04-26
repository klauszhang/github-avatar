import styled from 'styled-components'

const padding = 5
export const iconWidth = 120
export const borderWidth = 1
export const cardWidth = 120 + borderWidth * 2

export const AppWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '1rem',
})

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: `${borderWidth}px solid #ccc`,
  width: iconWidth,
})

export const ImageWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding,
})

export const Image = styled.img({
  width: iconWidth - padding * 2,
  height: iconWidth - padding * 2,
})

export const Title = styled.h5({
  overflow: 'hidden',
})

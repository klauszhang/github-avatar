import styled from 'styled-components'

const iconSizing = 80

export const CardTitle = styled.h3({
  textAlign: 'center',
})

export const CardIconWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5',
})

export const CardIcon = styled.img({
  width: iconSizing,
  height: iconSizing,
})

export const CardLink = styled.a({
  textDecoration: 'none',
  "&:hover": {
    textDecoration: 'underline'
  }
})

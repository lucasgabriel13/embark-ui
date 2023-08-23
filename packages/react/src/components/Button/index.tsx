import React from 'react'
import { IButtonProps } from './Button.types'
import { ButtonStyled } from './Button.styles'

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  )
}

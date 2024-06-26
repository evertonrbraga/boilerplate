import styled, { css } from 'styled-components'
import * as T from './types'

export const HomeContainer = styled.main<T.HomeProps>`
  ${({ theme }) => css`
    background: ${theme['gray500']};
  `}
`

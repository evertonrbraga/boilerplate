import { ReactNode } from 'react'
import { render as renderRtl } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'styles/themes/default'

interface WrapperProps {
  children: ReactNode
  theme?: typeof defaultTheme
}

function Wrapper({ children, theme = defaultTheme }: WrapperProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export function render(ui: ReactNode) {
  return renderRtl(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'

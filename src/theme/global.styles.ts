import { GlobalStylesProps } from '@mui/material'

export const gloablStyles = (): GlobalStylesProps['styles'] => ({
  body: {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    scrollBehavior: 'smooth',
  },
})

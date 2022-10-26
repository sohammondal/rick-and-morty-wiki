import useMediaQuery from '@mui/material/useMediaQuery'

interface Return {
  desktopLarge: boolean
  desktop: boolean
  tabletLandscape: boolean
  tabletPortrait: boolean
  phone: boolean
}

export const useDeviceDetect = (): Return => {
  const device = {
    desktopLarge: useMediaQuery('(min-width: 1920px)'),
    desktop: useMediaQuery('(min-width: 1366px)'),
    tabletLandscape: useMediaQuery('(min-width: 1024px)'),
    tabletPortrait: useMediaQuery('(min-width: 768px)'),
    phone: useMediaQuery('(min-width: 600px)'),
  }

  return device
}

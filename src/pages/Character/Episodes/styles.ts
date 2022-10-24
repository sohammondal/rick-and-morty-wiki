import { media } from 'theme/common.styles'

export const boxSx = { width: '100%', height: '100%', bgcolor: 'background.paper' }

export const listSx = {
  width: '100%',
  height: '100%',
  bgcolor: 'background.paper',
  overflow: 'hidden scroll',
  padding: '10px',
  [media.tabletPortrait]: {
    padding: '20px 0 5vh 0',
  },
}

import styled from '@emotion/styled'
import { SxProps, Theme } from '@mui/material'

import { flexCol, flexColCenter, flexRow, hw, media } from 'theme/common.styles'

export const modalSx: SxProps = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

export const closeIconSx = {
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme: Theme): string => theme.palette.grey[500],
}

export const ModalContent = styled.div`
  width: 100vw;
  height: 75vh;
  padding: 50px 20px;
  background-color: #fff;
  border-radius: 4px;
  ${flexCol}
  overflow: auto;
  position: relative;
  align-self: end;

  .character-information {
    ${flexCol}
    flex-basis: 60%;

    img {
      ${hw.full}
      border-radius: 4px;
    }
  }
  .character-episodes {
    flex-basis: 40%;
    overflow: unset;
  }

  ${media.tabletPortrait} {
    width: 85vw;
    height: 60vh;
    padding: 25px;
    ${flexRow}
    overflow: unset;
    align-self: center;

    .character-information {
      ${flexColCenter}
      img {
        ${hw.custom(50, '%', 75)}
      }
    }

    .character-episodes {
      overflow: hidden;
    }
  }

  ${media.tabletLandscape} {
    width: 70vw;
    height: 65vh;

    .character-information {
      img {
        ${hw.half}
      }
    }
  }

  ${media.desktop} {
    width: 65vw;
    height: 75vh;
    padding: 25px;
    ${flexRow}

    .character-information {
      img {
        ${hw.half}
      }
    }

    .character-episodes {
      overflow: hidden;
    }
  }
`

export const CharInfo = styled.div`
  ${flexRow}
  margin: 5px 0;
  p:nth-of-type(1) {
    width: 70px;
  }

  ${media.tabletPortrait} {
    margin: 10px 0;
  }
`

export const errorSx: SxProps = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

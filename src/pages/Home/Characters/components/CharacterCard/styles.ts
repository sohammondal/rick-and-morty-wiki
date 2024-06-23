import styled from '@emotion/styled'
import MUICard from '@mui/material/Card'

import { flexCol, hw, media, textEllipsis } from 'theme/common.styles'

export const Status = styled.div`
  ${hw.custom(10, 'px')}
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`

export const CharInfo = styled.div`
  ${flexCol}
  margin: 2.5px 0;
  p:nth-of-type(1) {
    width: 50px;
  }
  p:nth-of-type(2) {
    ${textEllipsis}
  }
`

export const Card = styled(MUICard)`
  margin: 20px 0;
  width: 100%;
  border-radius: 4px;
  transition: 0.5s ease;

  .card-media {
    height: 300px;
  }

  .card-content {
    .character-name {
      display: flex;
      align-items: center;
      h5 {
        margin-block: 0;
        ${textEllipsis}
      }
    }
  }

  ${media.tabletPortrait} {
    width: 550px;
    height: 220px;
    margin: 20px;

    .card-action-area {
      display: flex;
      height: 100%;
    }
    .card-media {
      height: 100%;
      width: 40%;
    }

    .card-content {
      height: 100%;
      width: 60%;
    }
  }
`

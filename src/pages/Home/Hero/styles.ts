import styled from '@emotion/styled'

import { flexRowCenter, hw, media } from 'theme/common.styles'

export const Section = styled.section`
  ${flexRowCenter}
  text-align: center;
  position: relative;
  width: 100%;
  height: calc(35vh - 60px);

  h1 {
    flex-grow: 1;
    margin: 0px;
    color: rgb(32, 35, 41);
    border: none;
    font-weight: 900;
    font-size: 3.625rem;

    ${media.tabletPortrait} {
      font-size: 5.625rem;
    }
  }

  div {
    position: absolute;
    ${hw.full}
    z-index: -1;
    svg {
      ${hw.full}
    }
  }
`

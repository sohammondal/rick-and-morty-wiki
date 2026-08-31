import styled from '@emotion/styled'

import { flexRowCenter, media } from 'theme/common.styles'

export const Section = styled.section`
  ${flexRowCenter}
  text-align: center;
  position: relative;
  width: 100%;
  padding: 2rem 15px;
  overflow: hidden;

  h1 {
    margin: 0;
    color: rgb(32, 35, 41);
    border: none;
    font-weight: 900;
    font-size: 1.75rem;

    ${media.tabletPortrait} {
      font-size: 2.5rem;
    }
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 130px;
    z-index: -1;

    ${media.tabletPortrait} {
      width: 200px;
      height: 200px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
`

import styled from '@emotion/styled'

import { flexCol, flexRowCenter, media } from 'theme/common.styles'

export const Section = styled.section`
  ${flexCol}
  align-items: center;
  padding: 5vh 15px;

  min-height: 100vh;
  width: 100vw;

  background-color: #202329;
  color: #fff;

  ${media.tabletPortrait} {
    padding: 5vh;
  }
`

export const CharacterCards = styled.div`
  ${flexRowCenter}
  flex-wrap: wrap;
  min-height: 60vh;
`

export const PaginationWrapper = styled.div`
  ${flexRowCenter}
  margin-top: 2rem;

  .MuiPagination-ul {
    flex-wrap: nowrap;
  }

  .MuiPaginationItem-root {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.5);

    &.Mui-selected {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.2);
    }

    &.Mui-disabled {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`

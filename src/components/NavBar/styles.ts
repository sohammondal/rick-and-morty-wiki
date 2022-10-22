import styled from '@emotion/styled'

export const Logo = styled.img`
  width: 45px;
  margin-right: 10px;
  cursor: pointer;

  filter: grayscale(0.3);

  :hover {
    filter: grayscale(0);
  }

  transition: ease 0.5s;
`

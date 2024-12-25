

import styled from 'styled-components';

export const Arrow = styled.div`
  position: fixed;
  top: 120px;
  left: 20px;
  cursor: pointer;
  z-index: 2;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #5036ac;
    padding: 10px;
   
    &:hover {
      background: #fff;
    }
  }
`;

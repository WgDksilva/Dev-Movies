
import styled, { keyframes } from 'styled-components'

const scale = keyframes`
   from {
        transform: scale(0);
   }
   to {
        transform: scale(1);
   }
`

export const Title = styled.h4`
 color: #ffffff;
 font-size: 25px;
 font-weight: 700;
`

export const Container = styled.div`
 display: flex;
 margin-top: 5px;
 gap: 30px;

  div {
    display: flex;
    flex-direction: column;
  }

  P {
    color: #ffffff;
  }

  img {
    height: 140px;
    border-radius: 10px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

`


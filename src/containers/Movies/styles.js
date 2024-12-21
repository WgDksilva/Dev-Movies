
import styled,  { keyframes } from 'styled-components'

const scale = keyframes`
   from {
        transform: scale(0);
   }
   to {
        transform: scale(1);
   }
`

export const Background = styled.div`
  background-image: url( ${(props) => props.img} );
  
  height: 97vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }

`
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
   
`
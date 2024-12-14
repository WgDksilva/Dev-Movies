
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
export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 60%;
  margin-top: 200px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`
export const Poster = styled.div`
  z-index: 2;
  

  img {
    width: 280px;
    border-radius: 30px;
    margin-top: 100px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
   
  }
`

export const ContainerButtons = styled.div`
   display: flex;
   gap: 20px;
   margin-top: 2px;
`
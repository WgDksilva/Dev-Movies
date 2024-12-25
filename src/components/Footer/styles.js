
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #5036ac;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;


  p {
    font-size: 20px;
    color: #fff;
    text-decoration: none;

    @media (max-width: 430px) {
      font-size: 18px;
      height: 50px;
      justify-content: center;
      flex-direction: column;
      
   }
  }

  @media (max-width: 430px) {
      width: auto;
      height: 110px;
      padding: 16px 10px;
      justify-content: center;
      flex-direction: column;
   }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 3px;
  margin-left: 10px;


  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #5036ac;

   
    &:hover {
      background: #fff;
    }
  }
`;






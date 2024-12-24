
import styled from 'styled-components'

export const Container = styled.div`
 z-index: 4;
 min-height: 100px;
 position: fixed;
 top: 0;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 50px;
 background-color: ${props => props.changeBackground ? '#000' : 'transparent'};
 border-bottom: ${(props) => props.changeBackground ? '4px dashed #189b20' : 'none'};
 transition: background-color 0.6s ease-in-out;

 img {
    width: 25%;
 }
`

export const Menu = styled.ul`
 display: flex;
 list-style: none;
 gap: 50px;
`

export const Li = styled.li`
 font-weight: 500;
 cursor: pointer;
 font-size: 28px;
 position: relative;

 a {
 text-decoration: none;
 color: #ffffff;
 }

 &::after {
 content: '';
 height: 3px;
 width: ${(props) => (props.isActive ? '100%' : 0)};
 background-color: #189b20;
 position: absolute;
 bottom: -10px;
 left: 50%;
 transform: translateX(-50%);
 transition: width 0.5s ease-in-out;
 border: ${(props) => (props.isActive ? '1px dotted #5036ac' : 'none')};
 }

 &:hover::after {
    width: 100%;
    border: 1px dotted #5036ac;
 }
`


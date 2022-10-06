import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Button = styled.button`
     background-color: #FF4040;
     color: #FFF;
     border: none;
     padding: 0.5rem 1rem;
     cursor: pointer;
     font-size: 1rem;
     transition: all 0.6s ease-in-out;
     font-weight: 600;

     &:hover {
          background-color: #FFF;
          color: #FF4040;
     }
`

export const Center = styled.div`
     text-align: center;
`
export const H1 = styled.h1`
     font-family: 'Mukta', sans-serif;
     font-size: 40px;
`

export const P = styled.p`
     font-family: 'Montserrat', sans-serif;
     font-size: 25px;
     padding: 0.41rem 0;

`

export const Row = styled.div`
     display: flex;
     gap: 1rem;
`
export const Col = styled.div`
     flex: 1;
`

export const Flex = styled.div`
     display: flex;
     gap: 1rem;
     flex-wrap: nowrap;
`

export const Span = styled.button`
     padding: 0.74rem;
     background: rgb(224, 49, 35);
     width: 100px;
     margin: 0 auto;
     text-align: center;
     border-radius: 15px;
     cursor: pointer;
     color: #FFF;
     border: none;
     font-size: 15px;
     transition: all 0.7s ease-in-out;

     &:hover {
          background-color: #FFF;
          color: rgba(224, 49, 35, 0.9);
          border: 1px solid rgb(224, 49, 35);;
     }
     &:active {
          font-weight: 600;
     }
`
export const ButtonCus = styled.button`
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  color: #FFF;
  border: 1px solid #FF0404;
  outline: none;
  transition: 1s ease-in-out;
  font-size: 27px;
  font-weight: 500;

  &:hover {
  transition: 1s ease-in-out;
  background: #FF0404;
  }
`
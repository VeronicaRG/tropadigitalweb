import styled from 'styled-components'

export const Header = styled.div`
 display:flex;
 margin-bottom: 30px;
 flex-direction: column;

  div {
    display: flex;
    gap:10px;
    margin-top: 10px;
    align-items: center;
  }

  p {
    color: #636363;
    font-size: 16px;
    font-weight: 400; 
  }

  strong {
    color: #101010;
    font-size: 16px;
    font-weight: 700; 
  }
`

export const Title = styled.h2`
  color: #000000;
  font-size: 20px;
  font-weight: 700; 
`

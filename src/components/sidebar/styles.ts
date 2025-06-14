import styled from 'styled-components'

export const Sidebar = styled.aside`
  display: flex;  
  width: 210px;
  padding: 30px 15px ;
  flex-direction: column;
  background-color: #ffffff;
  border-right: 1px solid #E5E5E5;

    @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 161px;
    height: 25px;
    object-fit: cover;
  }
  nav {
    h1 {
      color: #A3A3A3;
      font-size: 9px;
      font-weight: 700;
      margin-bottom: 7px;
    }
  }

  nav ul {
    h1 {
      color: #A3A3A3;
      font-size:15px;
      font-weight: 500;
    }
  }

  nav li {
    display: flex;
    height: 35px;
    width: 180px;
    cursor: pointer;
    gap: 10px;
    padding: 10px;
    margin-bottom: 7px;
    border-radius: 5px;

 h1 {
      color: #252525;
      font-size:15px;
      font-weight: 500;
    }
  }

  nav li.active {
    background: #CC6237;
     h1 {
      color: #ffffff;
      font-size:15px;
      font-weight: 500; 
    }
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 1px solid #eee;
  li {
   &:hover {
      background: #f1f1f1;
      border-radius: 5px;
    }
  }
`
export const InfoUserWrapper = styled.div`
  display: flex;
  margin: 30px 5px 0 5px;
  flex-direction: column;

  .userInfo {
    gap: 10px;
    display: flex;
 
    img {
      width: 40px;
      height: 40px;
      padding: 2px;
      border-radius: 15px;
      border: 1px solid #CC6237;
    }
    div {
      display: flex;
      flex:1;
      flex-direction: column;
      justify-content: center;
    }
    strong {
      font-size:14px;
      color: #000000;
      font-weight: 700; 
    }
    span {
      font-size:11px;
      color: #808080;
      font-weight: 500; 
    }
  }
  
  .option {
   display: flex;
   flex:1;
   cursor: pointer;
   gap: 10px;
   padding: 15px 10px;
   align-items: center;
   margin-top: 5px;
   &:hover {
      background: #f1f1f1;
      border-radius: 5px;
    }
    p {
      font-size: 15px;
      font-weight: 700; 
      color: #252525;
    }
  }
`
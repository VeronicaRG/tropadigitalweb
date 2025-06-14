import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    right: 0px;
  }
`

export const HamburgerButton = styled.button`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;

  span {
    display: block;
    height: 3px;
    margin: 6px 0;
    border-radius: 2px;
    background: #ffffff;
  }
`

export const MobileHeader = styled.header`
  display: none;
  background-color: #CC6237;
  border-radius: 10px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  }
`


export const MainContent = styled.main`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
`

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #eee;

  @media (min-width: 769px) {
    display: none;
  }
  div.active {
       display: flex;
    background-color: #cc6237;
    color: #FFFFFF;
    padding: 15px 10px;
  }

  .option {
    height: 32px;
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

  div {
    padding: 5px;
    border-radius:5px;
    justify-content: space-between;
    gap: 5px;
  }

  a {
      color: #252525;
      font-size:15px;
      font-weight: 500;
    }
    nav {
    display: flex;
    height: 35px;
    cursor: pointer;
    gap: 10px;
    padding: 10px;
    margin-bottom: 7px;
    border-radius: 5px;
  
  }

`

export const InfoUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: #000000;
  border-top-width: 1px;

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
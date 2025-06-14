import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #F9FBFF;

  @media (max-width: 768px) {
    background-color: #FFFFFF;
   }  
`

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 500px;
  max-width: 756px;
  border-radius: 20px;
  padding: 10px;
  align-items: flex-start;
  background-color: #FFFFFF;
  justify-content: space-between;
  box-shadow: 0px 100px 200px 0px #00000040;
  overflow:hidden;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
    box-shadow:none;
    justify-content: center;
  }   

`
export const FormWrapper = styled.div`
  display: flex;
  width: 300px;
  margin: 40px 0 0 20px;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;

    button{
      top: 5px;
      right: 10px;
      width: 32px;
      height: 32px;
      border: none;
      cursor: pointer;
      position: absolute;
      background-color: transparent;
    }
  }

  @media (max-width: 768px) {
    flex:1;
    max-width: 90%;
    margin: 40px 0;
    align-self: center;
  } 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 26px;
  color: #CC6237;
  margin-top: 35px;
`

export const Subtitle = styled.p`
  font-size: 13px;
  color: #94A6C7;
  margin-bottom: 35px;
`

export const Error = styled.span`
  color: red;
  font-size: 10px; 
  margin-top: 10px;
  padding-left: 20px;
`

export const InputLabel = styled.label`
  font-size: 13px;
  color: #CC6237;
  margin-bottom: 7px;
`

export const Input = styled.input`
  display:flex;
  border: none;
  width: 100%;
  height: 40px;
  padding: 20px;
  border-radius: 20px;
  border-color: none;
  background-color: #F6F6F6;
  font-size: 12px;
  color: #657593;

    &:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset !important;
    -webkit-box-shadow: 0 0 0 1000px #F6F6F6 inset !important;
    -webkit-text-fill-color: #000 !important;
    transition: background-color 9999s ease-out;
    transition-delay: 9999s;
  }
`

export const Button = styled.button`
  height: 40px;
  border: none;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
  color: #FFFFFF;
  border-radius: 20px;
  background-color: #CC6237;
`

export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  position: relative; 
  border-radius: 20px;
  align-items: flex-end;
  background-color: #CC6237;

  img {
    position: absolute;
    width: 357px;
    height: 316px;
    left: -40px;
  }

  @media (max-width: 768px) {
    display:none;
  } 
`


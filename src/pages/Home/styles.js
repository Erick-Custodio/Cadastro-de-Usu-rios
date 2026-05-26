import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`


export const Form = styled.form`


  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

export const ContainerInput = styled.div`
display: flex;
align-items: center;
gap: 20px;
flex-wrap: wrap;

div {
  flex: 1;
  min-width: 220px;
}
`

export const Input = styled.input`
border-radius:10px;
border: 1px solid #d2dae2;
background-color: #fff;
padding: 12px 20px;
 outline: none;
 width: 100%; `


export const InputLabel = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500;

    span{
        color: #ef4f45;
        font-weight:bold;
    }
`

export const Title = styled.h2`
  color: #fff;
  font-size: 38px;
  text-align: center;
  font-weight: 600;

`

export const SuccessMessage = styled.p`
  color: #38d46b;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`

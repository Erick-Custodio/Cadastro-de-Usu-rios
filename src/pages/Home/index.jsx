import{useRef, useState} from "react"
import { useNavigate } from "react-router-dom";

import api from "../../services/api"

import {
  
  Container,
  ContainerInput,
  Form,
  Input,
  InputLabel,
  SuccessMessage,
  Title,
  
} from "./styles";

import Button from "../../components/Button"
import TopBackground from "../../components/Button/TopBackgroud";

function Home() {
  const imputName= useRef()
  const imputAge = useRef()
  const imputEmail = useRef()
  const [successMessage, setSuccessMessage] = useState("")
  const navigate = useNavigate()
  async function registerNewUser(){
    try {
      const { data } = await api.post("/usuarios", {
        email: imputEmail.current.value,
        age: parseInt(imputAge.current.value),
        name: imputName.current.value
      })

      console.log(data)
      setSuccessMessage("Usuario cadastrado com sucesso!")
      imputName.current.value = ""
      imputAge.current.value = ""
      imputEmail.current.value = ""
    } catch (error) {
      setSuccessMessage("")
      console.error("Erro ao cadastrar usuario. Verifique se a API esta rodando na porta 3001.", error)
    }
  }

  return (


    <Container>
      
<TopBackground />
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInput>
          
            <div>
              <InputLabel>Nome <span> *</span></InputLabel>
              <Input type="text" placeholder="Nome do Usuário" ref={imputName}/>
            </div>

            <div>
              <InputLabel>Idade <span> *</span></InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={imputAge}/>
            </div>

          
          </ContainerInput>
          <div style={{width:"100%"}}>
            <InputLabel>E-mail <span> *</span></InputLabel>
            <Input type="email" placeholder="E-mail do Usuário" ref={imputEmail} />
          </div>

        
        <Button type="button" onClick={registerNewUser} theme="primary"> 
          Cadastrar Usuário</Button>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </Form>

       <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
         Ver Lista de Usuários </Button>
      

    </Container>
    


  
  )}

export default Home

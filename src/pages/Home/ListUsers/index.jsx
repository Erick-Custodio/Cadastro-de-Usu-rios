import api from "../../../services/api"
import { useNavigate } from "react-router-dom" 
import { useEffect, useState } from "react"
import Button from "../../../components/Button"
import TopBackground from "../../../components/Button/TopBackgroud"
import Trash from "../../../assets/trash.svg"
import { AvatarUser, Container, ContainerUsers, CardUsers, TrashIcon, Title } from "./styles"

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {

            const { data } = await api.get("/usuarios")
            setUsers(data)
        }

        getUsers()



    }, [])

    async function deleteUser(id) {

        await api.delete(`/usuarios/${id}`)
        setUsers(users.filter((user) => user.id !== id))
    }


    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>

                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser
                            src={`https://i.pravatar.cc?=${user.id}`}
                          
                        />
                        <div >
                            <h2>{user.name}</h2>
                            <p>{user.age}</p>
                            <p>{user.email}</p>

                            
                            
                        </div>
                        <TrashIcon src={Trash}  onClick={() => deleteUser(user.id)} alt='icone-lata-de-lixo' />
                    </CardUsers>
                ))}

            </ContainerUsers>

            <Button type="button"onClick={() => navigate("/")} >Voltar</Button>
        </Container>
    )
}

export default ListUsers

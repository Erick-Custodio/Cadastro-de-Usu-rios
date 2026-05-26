import UsersImage from "../../../assets/users.png"
import { Backgroud } from "./styles"

function TopBackground() {
    return (
        <Backgroud>
            <img src={UsersImage} alt="Imagem de Usuários" />
        </Backgroud>
    )
}

export default TopBackground
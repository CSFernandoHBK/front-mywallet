import styled from "styled-components"
import logoutIcon from "../../assets/images/logoutIcon.png"
import minusIcon from "../../assets/images/minusIcon.png"
import plusIcon from "../../assets/images/plusIcon.png"
import AreaFinancas from "./AreaFinancas"
import axios from "axios"
import { useEffect, useState } from "react"
import { urlAPI } from "../../constants/URLs";


export default function HomePage() {
    const token = JSON.parse(localStorage.getItem("token"));
    const [infoUser, setInfoUser] = useState();

    useEffect(() => {
        const requisicao = axios.get(`${urlAPI}home`, 
        {headers: {
            "Authorization": `Bearer ${token}`
        }})
        requisicao.then((res) => {setInfoUser(res.data)})
    }, [])

    console.log(infoUser);

    return(
        <Container>
            <div>
                <h1>Olá, {infoUser.name}</h1>
                <img src={logoutIcon}/>
            </div>
            <AreaFinancas/>
            <div>
                <BotaoInferior>
                    <img src={plusIcon}/>
                    <p>Nova <br/> entrada</p>
                </BotaoInferior>
                <BotaoInferior>
                    <img src={minusIcon}/>
                    <p>Nova <br/> saída</p>
                </BotaoInferior>
            </div>
            
        </Container>
    )
}

const Container = styled.div`
    background-color: #8C11BE;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    & > div:nth-child(1){
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }

    & > div:nth-child(3){
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }

    img{
        height: 25px;
        width: 25px;
    }

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`
const BotaoInferior = styled.div`
    width: 48%;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;

    p{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`
/*const AreaFinancas = styled.div`
    height: 100%;
    width: 326px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%; 
`*/
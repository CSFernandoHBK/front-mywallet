import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { urlAPI } from "../../constants/URLs";

export default function NewOutPage() {
    const [valor, setValor] = useState()
    const [descricao, setDescricao] = useState();
    const [disabled, setDisabled] = useState(false);
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){
          navigate("/");
        }
      }, [])

    function submitNewMovement(event){
        event.preventDefault();
        setDisabled(true);

        const date = new Date();
        const data = `${date.getDate()}/${date.getMonth()+1}`;

        const requisicao = axios.post(`${urlAPI}newmovement`, {
            "date": data,
            "description": descricao,
            "value": String(valor),
            "type": "out"
        }, {headers: {
            "Authorization": `Bearer ${token}`
        }})
        requisicao.then((r) => {console.log(r);navigate("/home")})
    }

    return(
        <Container>
            <h1>Nova saída</h1>
            <form onSubmit={submitNewMovement}>
                <input type="number" 
                value={valor} 
                onChange={(e) => setValor(e.target.value)} 
                placeholder="Valor" 
                disabled={disabled} 
                required />
                <input type="text" 
                value={descricao} 
                onChange={(e) => setDescricao(e.target.value)} 
                placeholder="Descrição" 
                disabled={disabled} 
                required />
                <button type="submit">Salvar saída</button>
            </form>
            <Link to="/home">
                <button>Cancelar</button>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    background-color: #8C11BE;
    width: 100vw;
    height: 100vh;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    form{
        display: flex;
        flex-direction: column;
        height: 188px;
        justify-content: space-between;
        margin-bottom: 36px;
        margin-top: 24px;

        input{
            background-color: #FFFFFF;
            width: 88vw;
            height: 58px;
            border-radius: 5px;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            padding-left: 10px;

            ::placeholder{
                font-family: 'Raleway', sans-serif;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #000000;
            }
        }

        button{
            background: #A328D6;
            border-radius: 5px;
            height: 48px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
        
    }

    p{
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`
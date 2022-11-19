import { useState } from "react"
import styled from "styled-components"

export default function NewOutPage() {
    const [valor, setValor] = useState()
    const [descricao, setDescricao] = useState();
    const [disabled, setDisabled] = useState(false);

    return(
        <Container>
            <h1>Nova saída</h1>
            <form>
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
                <button>Salvar saída</button>
            </form>
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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    function sendLogin(event){
        event.preventDefault();
        setDisabled(true);
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={sendLogin}>
                <input type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="E-mail" 
                disabled={disabled} 
                required />
                <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Senha" 
                disabled={disabled} 
                required />
                <button type="submit" disabled={disabled}>ENTRAR</button>
            </form>
            <Link to={"/sign-up"}>
                <p>Primeira vez? Cadastre-se</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    background-color: #8C11BE;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
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
            width: 326px;
            height: 58px;
            border-radius: 5px;

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
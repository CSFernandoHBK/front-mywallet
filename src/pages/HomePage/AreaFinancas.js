import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { urlAPI } from "../../constants/URLs";

export default function AreaFinancas() {
    const token = JSON.parse(localStorage.getItem("token"));
    const [movements, setMovements] = useState();
    const [hasMovements, setHasMovements] = useState(true);

    useEffect(() => {
        const requisicao = axios.get(`${urlAPI}movements`,
        {headers: {"Authorization": `Bearer ${token}`}})
        requisicao.then((res) => setMovements(res.data));

    }, [])

    console.log(movements);

    if(!movements){
        return(
            <Container>
                <p>Carregando...</p>
            </Container>
        )
    }

    if(movements.length === 0){
        console.log("entrou aqui")
        return(
            <Container>
                <p>Não há registros de entrada ou saída</p>
            </Container>
        )
    }
    
    function calcularSaldo(){
        let saldo = 0;
        movements.map((m) => {
            if(m.type === "in"){
                saldo += parseFloat(m.value)
            } else {
                saldo -= parseFloat(m.value)
            }
        })
        return(saldo);
    }
    const saldo = calcularSaldo();

    return(
        <Container>
            <div>
                {movements.map((m, index) => 
                <ItemLista key={index} type={m.type}>
                    <span>{m.date}</span>
                    <span>{m.description}</span>
                    <span>{m.value}</span>    
                </ItemLista>
                )}
            </div>
            <ItemSaldo saldo={saldo}>
                <span>SALDO</span>
                <span>{saldo}</span>
            </ItemSaldo>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 326px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%; 
    padding: 23px 12px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #868686;
    }
`
const ItemLista = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 23px;
    position: relative;
    display: flex;
    align-items: center;

    & > span:nth-child(1){
        color: #C6C6C6;
        position: absolute;
        left: 0;
        top: 0;
    }
    & > span:nth-child(2){
        color: #000000;
        margin-left: 46px;
    }
    & > span:nth-child(3){
        color: ${(props) => (props.type === "in" ? "#03AC00" : "#C70000")};
        position: absolute;
        right: 0;
    }
`
const ItemSaldo = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    position: relative;

    & > span:nth-child(1){
        color: #000000;
        position: absolute;
        left: 0;
        top: 0;
    }
    & > span:nth-child(2){
        color: ${(props) => (props.saldo >= 0 ? "#03AC00" : "#C70000")};
        position: absolute;
        right: 0;
    }
`
import axios from "axios"
import { useEffect } from "react"
import styled from "styled-components"
import { urlAPI } from "../../constants/URLs";

export default function AreaFinancas() {
    const token = JSON.parse(localStorage.getItem("token"));

    return(
        <Container>
            
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 326px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%; 
`
import React from "react";
import styled from "styled-components";
import Pins from "./Pins";

function Maimboard(props) {

    let {pines} = props;

    return (
        <Wrapper>
            <Container>
                {pines.map((pin, index)=>{
                    let {urls}= pin;

                    return <Pins key={index} urls={urls}/>

                })}
                
            </Container>
        </Wrapper>
    )
}

export default Maimboard;

const Wrapper = styled.div`
background-color: white;
display:flex;
width: 100%;
height: 100%;
margin-top 15px;
justify-content: center;

`
const Container = styled.div`
display: flex;
width:80%;
background-color: white;

`

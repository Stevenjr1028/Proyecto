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
flex-wrap:wrap;
column-count: 5;
column-gap: 10px;
margin: 0 auto;
height: 100%;
max-width: 1260px;
background-color: white;

`

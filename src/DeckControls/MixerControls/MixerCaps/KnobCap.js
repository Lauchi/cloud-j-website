import React, {Component} from 'react';
import styled from 'styled-components'

function KnobCap({width = 60, rotation = -0.4}) {
    return <KnobCircle width={width}>
        <Knob width={width}/>
        <KnobMarker width={width}/>
    </KnobCircle>
}

export default KnobCap;

const KnobCircle = styled.div`
    display: grid;
    justify-items: center;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    border: ${props => props.width / 30}px solid red;
    box-sizing: border-box;
    border-radius: 50%;
`;

const Knob = styled.div`
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    width: ${props => props.width * 0.8}px;
    height: ${props => props.width  * 0.8}px;
    box-sizing: border-box;
    background-color: #333;
    border-radius: 50%;
`;
const KnobMarker = styled.div`
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    overflow: hidden;
    border-radius: ${props => props.width / 15}px;
    width: ${props => props.width * 0.13}px;
    height: ${props => props.width  * 0.45}px;
    margin-bottom: ${props => props.width * 0.42}px;;
    border: ${props => props.width / 30}px solid black;
    box-sizing: border-box;
    background-color: white;
`;

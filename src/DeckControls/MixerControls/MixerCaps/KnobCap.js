import React from 'react';
import styled from 'styled-components'

function KnobCap({diameter = 60, rotation = -50, outerCircleColor = 'orange', label = 'Label', leftCircleText = '-6dB', rightCircleText = '+6dB'}) {
    const rotationNormalized = rotation * maxRotation;
    return <Grid width={diameter}>
        <KnobCircle width={diameter} color={outerCircleColor}>
            <Knob width={diameter}/>
            <MarkerRotateDiv rotation={rotationNormalized}>
                <KnobMarker width={diameter}/>
            </MarkerRotateDiv>
        </KnobCircle>
        <LeftCircleText width={diameter}>{leftCircleText}</LeftCircleText>
        <Label width={diameter}>{label}</Label>
        <RightCircleText width={diameter}>{rightCircleText}</RightCircleText>
    </Grid>
}

export default KnobCap;

const maxRotation = 1.32;

const KnobCircle = styled.div`
    display: grid;
    justify-items: center;
    border: ${props => props.width / 30}px solid ${props => props.color};
    box-sizing: border-box;
    border-radius: 50%;
    border-bottom: 3px solid transparent;
`;

const CenteredGrid = styled.div`
    grid-column: 1;
    grid-row: 1;
    align-self: center;
`;

const Knob = CenteredGrid.extend`
    width: ${props => props.width * 0.8}px;
    height: ${props => props.width * 0.8}px;
    box-sizing: border-box;
    background-color: #333;
    border-radius: 50%;
`;

const MarkerRotateDiv = CenteredGrid.extend.attrs({
    rot: props => props.rotation
})`
    display: grid;
    justify-items: center;
    transform: rotate(${props => props.rot}deg);
`;

const KnobMarker = CenteredGrid.extend`
    overflow: hidden;
    border-radius: ${props => props.width / 15}px;
    width: ${props => props.width * 0.13}px;
    height: ${props => props.width * 0.45}px;
    margin-bottom: ${props => props.width * 0.42}px;;
    border: ${props => props.width / 30}px solid black;
    box-sizing: border-box;
    background-color: white;
`;

const Grid = styled.div`
    position: absolute;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    display: grid;
`;

const UnselectableText = styled.div`
    -webkit-user-select: none;      
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const RightCircleText = UnselectableText.extend`
    grid-row: 2;
    grid-column: 1;
    font-size: ${props => props.width * 0.14}px;
    margin-top: -${props => props.width * 0.15}px;
    align-self: end;
    justify-self: end;
`;

const LeftCircleText = UnselectableText.extend`
    grid-row: 2;
    grid-column: 1;
    font-size: ${props => props.width * 0.14}px;
    margin-top: -${props => props.width * 0.15}px;
    align-self: end;
    justify-self: start;
`;

const Label = UnselectableText.extend`
    grid-row: 3;
    grid-column: 1;
    justify-self: center;
    font-size: ${props => props.width * 0.2}px;
`;
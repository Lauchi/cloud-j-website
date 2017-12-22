import React from 'react';
import styled from 'styled-components'

function KnobCap({width = 60, rotation = -1, outerCircleColor = 'orange', label = 'Filter', leftCircleText = '-6dB', rightCircleText = '+6dB'}) {
    const rotationNormalized = rotation * maxRotation;
    return <Grid width={width}>
        <KnobCircle width={width} color={outerCircleColor}>
            <Knob width={width}/>
            <MarkerRotateDiv rotation={rotationNormalized}>
                <KnobMarker width={width}/>
            </MarkerRotateDiv>
        </KnobCircle>
        <LeftCircleText width={width}>{leftCircleText}</LeftCircleText>
        <Label width={width}>{label}</Label>
        <RightCircleText width={width}>{rightCircleText}</RightCircleText>
    </Grid>
}

export default KnobCap;

const maxRotation = 132;

const KnobCircle = styled.div`
    display: grid;
    justify-items: center;
    width: ${props => props.width}px;
    height: ${props => props.width}px;
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
    height: ${props => props.width  * 0.8}px;
    box-sizing: border-box;
    background-color: #333;
    border-radius: 50%;
`;

const MarkerRotateDiv = CenteredGrid.extend`
    display: grid;
    justify-items: center;
    transform: rotate(${props => props.rotation}deg);
`;

const KnobMarker = CenteredGrid.extend`
    overflow: hidden;
    border-radius: ${props => props.width / 15}px;
    width: ${props => props.width * 0.13}px;
    height: ${props => props.width  * 0.45}px;
    margin-bottom: ${props => props.width * 0.42}px;;
    border: ${props => props.width / 30}px solid black;
    box-sizing: border-box;
    background-color: white;
`;

const Grid = styled.div`
    height: ${props => props.width * 1.35}px;
    display: grid;
`;

const RightCircleText = styled.div`
    grid-row: 2;
    grid-column: 1;
    font-size: ${props => props.width * 0.14}px;
    margin-top: -${props => props.width * 0.15}px;
    align-self: end;
    justify-self: end;
`;

const LeftCircleText = styled.div`
    grid-row: 2;
    grid-column: 1;
    font-size: ${props => props.width * 0.14}px;
    margin-top: -${props => props.width * 0.15}px;
    align-self: end;
    justify-self: start;
`;

const Label = styled.div`
    grid-row: 3;
    grid-column: 1;
    justify-self: center;
    font-size: ${props => props.width * 0.2}px;
`;
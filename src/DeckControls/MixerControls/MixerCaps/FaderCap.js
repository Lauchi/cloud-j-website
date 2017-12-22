import React from 'react';
import styled from 'styled-components'

function FaderCap({widthNew = 80}) {

    return <FaderBoundaries width={widthNew}>
        <CapTop width={widthNew}/>
        <InnerLine/>
        <CapBottom width={widthNew}/>
    </FaderBoundaries>
}

export default FaderCap;


const FaderBoundaries = styled.div`
    position: absolute;
    left: -36px;
    bottom: -16px;
    display: grid;
    height: ${props => props.width / 2}px;
    width: ${props => props.width}px;
`;

const OuterPart = styled.div`
    background-color: #333;
    overflow: hidden;
`;

const InnerLine = styled.div`
    grid-row: 6;
    grid-column: 1;
    background-color: white;
`;

const CapTop = OuterPart.extend`
    grid-row: 1 / 5;
    grid-column: 1;
    border-top-right-radius: ${props => props.width / 12}px;
    border-top-left-radius: ${props => props.width / 12}px;
`;

const CapBottom =  OuterPart.extend`
    grid-row: 6 / 10;
    grid-column: 1;
    border-bottom-right-radius: ${props => props.width / 12}px;
    border-bottom-left-radius: ${props => props.width / 12}px;
`;
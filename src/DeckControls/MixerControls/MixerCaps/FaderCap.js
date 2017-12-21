import React from 'react';
import styled from 'styled-components'

function FaderCap({width = 80}) {

    return <FaderBoundaries width={width}>
        <CornerTop width={width}/>
        <InnerLine/>
        <CornerBottom width={width}/>
    </FaderBoundaries>
}

export default FaderCap;

const OuterPart = styled.div`
    flex: 5;
    background-color: #333;
    overflow: hidden;
`;

const FaderBoundaries = styled.div`
    display: grid;
    height: ${props => props.width / 2}px;
    width: ${props => props.width}px;
`;

const InnerLine = styled.div`
    grid-row: 6;
    grid-column: 1;
    background-color: #fff;
`;

const CornerTop = OuterPart.extend`
    grid-row: 1 / 5;
    grid-column: 1;
    border-top-right-radius: ${props => props.width / 12}px;
    border-top-left-radius: ${props => props.width / 12}px;
`;

const CornerBottom =  OuterPart.extend`
    grid-row: 6 / 10;
    grid-column: 1;
    border-bottom-right-radius: ${props => props.width / 12}px;
    border-bottom-left-radius: ${props => props.width / 12}px;
`;
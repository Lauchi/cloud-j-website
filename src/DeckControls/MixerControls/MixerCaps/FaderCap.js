import React, {Component} from 'react';
import styled from 'styled-components'
import {injectGlobal} from 'styled-components';

function FaderCap() {

    return <FaderBoundaries>
        <CornerTop/>
        <InnerLine/>
        <CornerBottom/>
    </FaderBoundaries>
}

export default FaderCap;



const OuterPart = styled.div`
    flex: 4;
    background-color: #333;
`;

const CornerTop = OuterPart.extend`
`;

const FaderBoundaries = styled.div`
    display: flex;
    flex-direction: column;
    height: 40px;
    width: 70px;
    background-color: #333;
`;

const InnerLine = styled.div`
flex: 1;
    background-color: #fff;
`;

const CornerBottom =  OuterPart.extend`
`;
import React from 'react';
import styled from 'styled-components'
import LineFader from "./MixerControls/LineFader";
import Knob from "./MixerControls/Knob";

function DeckControl({knobsPositionIsLeft}) {
    return <Container>
        <EqContainer knobsPositionIsLeft={knobsPositionIsLeft}>
            <Treble label={'HI'}/>
            <Mid label={'MID'}/>
            <Base label={'LOW'}/>
        </EqContainer>
        <ChannelVolume knobsPositionIsLeft={knobsPositionIsLeft}/>
    </Container>
}

export default DeckControl;

const Container = styled.div`
    display: grid;
`;

const EqContainer = styled.div`
    display: grid;
    grid-row: 1;
    padding-left: 30px;
    padding-right: 30px;
    grid-column: ${props => props.knobsPositionIsLeft ? 1 : 2};
`;

const CenteredKnob = styled(Knob)`
    align-self: center;
    justify-self: center;
`;

const Treble = CenteredKnob.extend`
    grid-row: 1;
`;

const Mid = CenteredKnob.extend`
    grid-row: 2;
`;

const Base = CenteredKnob.extend`
    grid-row: 3;
`;

const ChannelVolume = styled(LineFader)`
    grid-column: ${props => props.knobsPositionIsLeft ? 2 : 1};
    grid-row: 1;
`;

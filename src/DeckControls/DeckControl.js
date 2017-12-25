import React from 'react';
import styled from 'styled-components'
import LineFader from "./MixerControls/LineFader";
import Knob from "./MixerControls/Knob";

function DeckControl() {
    return <Container>
        <Treble label={'HI'}/>
        <Mid label={'MID'}/>
        <Base label={'LOW'}/>
        <ChannelVolume/>
    </Container>
}

export default DeckControl;

const Container = styled.div`
    display: grid;
`;

const CenteredKnob = styled(Knob)`
    align-self: center;
    justify-self: center;
`;

const Treble = CenteredKnob.extend`
    grid-column: 2;
    grid-row: 1;
`;

const Mid = CenteredKnob.extend`
    grid-column: 2;
    grid-row: 2;
`;

const Base = CenteredKnob.extend`
    grid-column: 2;
    grid-row: 3;
`;

const ChannelVolume = styled(LineFader)`
    grid-column: 1;
    grid-row: 1 / 4;
`;

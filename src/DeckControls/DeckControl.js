import React, {Component} from 'react';
import styled from 'styled-components'
import LineFader from "./MixerControls/LineFader";
import Knob from "./MixerControls/MixerCaps/Knob";

class DeckControl extends Component {
    constructor() {
        super();
    }

    render() {

        return <Container>
            <Treble/>
            <Mid/>
            <Base/>
            <ChannelVolume/>
        </Container>
    }
}

export default DeckControl;

const Container = styled.div`
    display: grid;
`;

const Treble = styled(Knob)`
    grid-column: 2;
    grid-row: 1;
`;

const Mid = styled(Knob)`
    grid-column: 2;
    grid-row: 2;
`;

const Base = styled(Knob)`
    grid-column: 2;
    grid-row: 3;
`;

const ChannelVolume = styled(LineFader)`
    grid-column: 1;
    grid-row: 1 / 3;
`;

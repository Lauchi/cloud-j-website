import React from 'react';
import styled from 'styled-components';
import VolumeControl from "../DeckControls/VolumeControls/VolumeControl";
import COLORS from "../Assets/COLORS";
import TransportControl from "../DeckControls/TransportControls/TransportControl";

function TwoChannelMixer() {
    return <Grid>
        <TransportControl index={1}/>
        <VolumeControl index={1}/>
        <Divider/>
        <VolumeControl index={2} knobsPositionIsLeft/>
        <TransportControl index={2}/>
    </Grid>
}

const Divider = styled.div`
    border: 1px solid ${COLORS.PrimaryLightBrown()};
    margin: 20px 40px;
`;

const Grid = styled.div`
    display: flex;
`;

export default TwoChannelMixer;
import React from 'react';
import styled from 'styled-components';
import DeckControl from "../DeckControls/DeckControl";

function TwoChannelMixer() {
    return <Grid>
        <DeckControl index={1}/>
        <DeckControl index={2} knobsPositionIsLeft/>
    </Grid>
}

const Grid = styled.div`
    display: flex;
`;

export default TwoChannelMixer;
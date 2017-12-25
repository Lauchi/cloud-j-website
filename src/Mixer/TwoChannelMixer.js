import React from 'react';
import DeckControl from "../DeckControls/DeckControl";

function TwoChannelMixer() {
    return <div>
        <DeckControl index={1}/>
        <DeckControl index={2} knobsPositionIsLeft/>
    </div>
}

export default TwoChannelMixer;
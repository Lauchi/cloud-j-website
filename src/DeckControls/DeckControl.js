import React, { Component } from 'react';
import LineFader from "./MixerControls/LineFader";
import Knob from "./MixerControls/MixerCaps/Knob";

class DeckControl extends Component {
    constructor() {
        super();
    }
    render() {

        return <div>
            <Knob/>
            <LineFader/>
        </div>
    }
}

export default DeckControl;


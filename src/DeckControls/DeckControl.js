import React, { Component } from 'react';
import styled from 'styled-components'
import LineFader from "./MixerControls/LineFader";

class DeckControl extends Component {
    constructor() {
        super();
    }
    render() {
        return <LineFader/>
    }
}

export default DeckControl;


import React, {Component} from 'react';
import styled from 'styled-components'
import FaderCap from "./MixerCaps/FaderCap";
import ReactSimpleRange from 'react-simple-range';

class LineFader extends Component {
    constructor() {
        super();

        this.state = {
            rate: 0
        }
    }

    render() {
        const {rate} = {...this.state};

        return <FaderContainer>
            <ReactSimpleRange
                vertical
                verticalSliderHeight="400px"
                defaultValue={50}
            >
                <FaderCap/>
            </ReactSimpleRange>
        </FaderContainer>
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({rate: value});
    }
}

export default LineFader;

const FaderContainer = styled.div`
    position: relative;
    background-color: black;
    width: 90px;
    padding-top:30px;
    padding-bottom:30px;
`;




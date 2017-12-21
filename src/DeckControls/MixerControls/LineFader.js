import React, {Component} from 'react';
import styled from 'styled-components'
import {injectGlobal} from 'styled-components';

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
            <FaderInput type="range"
                        min="0"
                        max="127"
                        value={rate} step="1"
                        onChange={(event) => this.handleChange(event)}/>
        </FaderContainer>
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({rate: value});
    }
}

export default LineFader;

const FaderContainer = styled.div`
    background-color: black;
    border: 3px solid silver;
    padding-bottom: 0;
    display: flex;
`;

const FaderInput = styled.input`
    flex: 1;
    height: 400px;
    width: 50px;
    -webkit-appearance: slider-vertical;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 40px;
        height: 40px;
        border:3px solid black;
  }
`;




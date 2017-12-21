import React, {Component} from 'react';
import styled from 'styled-components'
import { injectGlobal } from 'styled-components';

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
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border:1px solid black;
        
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #80e4df; /* Old browsers */
        background: -webkit-linear-gradient(#55eff7 0%, #44def6 13%, #33cde5 33%, #22bcd4 47%, #11abc3 80%, #009ab2 100%);
        background: -moz-linear-gradient(#55eff7 0%, #44def6 13%, #33cde5 33%, #22bcd4 47%, #11abc3 80%, #009ab2 100%);
        background: -o-linear-gradient(#55eff7 0%, #44def6 13%, #33cde5 33%, #22bcd4 47%, #11abc3 80%, #009ab2 100%);
        background: linear-gradient(#55eff7 0%, #44def6 13%, #33cde5 33%, #22bcd4 47%, #11abc3 80%, #009ab2 100%); /* W3C */
  }
`;




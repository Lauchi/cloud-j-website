import React, {Component} from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
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
        const {rate} = this.state;
        const {length, className} = this.props;
        let lengthString = length + 'px';
        return <FaderContainer className={className}>
            <ReactSimpleRange
                vertical
                verticalSliderHeight={lengthString}
                value={rate}
                onChange={(event) => this.handleChange(event)}
            >
                <FaderCap/>
            </ReactSimpleRange>
        </FaderContainer>
    }

    handleChange(event) {
        const value = event.value;
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

LineFader.defaultProps = {
    length: 400
};

LineFader.propTypes = {
    length: PropTypes.number
};




import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import KnobCap from "./KnobCap";

export default class Knob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            doubleClicked: false,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.value !== this.state.value
    }

    handleChange(event) {
        const newValue = event.target.value;
        const {value} = this.state;
        if (newValue > value) this.setState({value: value + 1});
        if (newValue < value) this.setState({value: value - 1});
    }

    render() {
        const {diameter, className} = this.props;
        const {value} = this.state;
        return (
            <Container diameter={diameter} className={className}>
                <KnobInput
                    diameter={diameter}
                    type="range"
                    min={-100}
                    max={100}
                    ref="input"
                    value={value}
                    onChange={event => this.handleChange(event)}
                    onClick={() => this.resetKnob()}
                    onWheel={() => React.findDOMNode(this.refs.input).focus()}
                />
                <KnobCap diameter={diameter} rotation={value}/>
            </Container>
        )
    }

    resetKnob() {
        const {doubleClicked} = this.state;
        if (doubleClicked) {
            this.setState({
                value: 0,
                offset: 0,
            });
        }
        else {
            this.setState({doubleClicked: true});
            setTimeout(() => {
                this.setState({doubleClicked: false})
            }, 333);
        }
    }
}

const Container = styled.div`
    position: relative;
    width: ${props => props.diameter}px;
    height: ${props => props.diameter}px;
`;

const KnobInput = styled.input`
    position: absolute;
    -webkit-appearance: none;
    height: ${props => props.diameter}px;
    left: 0;
    width: ${props => props.diameter}px;
    background-color: transparent;
    transform: rotate(-90deg);
    z-index: 2;
    
    &:focus{
        outline: none;
    }
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0;
        height: 0;
    }
`;

Knob.defaultProps = {
    diameter: 60
};

Knob.propTypes = {
    diameter: PropTypes.number
};
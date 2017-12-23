import React from 'react'
import styled from 'styled-components'
import KnobCap from "./KnobCap";

export default class Knob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.value !== this.state.value
    }

    handleChange(value) {
        const newValue= value.target.value;
        this.setState({
            value: newValue,
        }, () => {
            if (this.props.onChangeValue) {
                this.props.onChangeValue(this.state.value)
            }
        })
    }

    render() {
        const { diameter } = this.props;
        return (
            <Container diameter={diameter}>
                <UpperFaderHider diameter={diameter}/>
                <KnobInput
                    diameter={diameter}
                    type="range"
                    min={-100}
                    max={100}
                    ref="input"
                    value={this.state.value}
                    onChange={event => this.handleChange(event)}
                    onWheel={ () => React.findDOMNode(this.refs.input).focus()}
                />
                <LowerFaderHider diameter={diameter}/>
                <KnobCap diameter={diameter} rotation={this.state.value}/>
            </Container>
        )
    }
}

const Container = styled.div`
    position: relative;
    width: ${props => props.diameter}px;
    height: ${props => props.diameter * 4}px;
`;

const FaderHider = styled.div`position: absolute;
    width: ${props => props.diameter}px;
    height: ${props => props.diameter * 1.6}px;
    z-index: 3;
`;

const UpperFaderHider = FaderHider.extend`
    top: ${props => props.diameter}px;
`;

const LowerFaderHider = FaderHider.extend`
    top: -${props => props.diameter * 1.6}px;
`;

const KnobInput = styled.input`
    position: absolute;
    -webkit-appearance: none;
    height: ${props => props.diameter}px;
    left: -${props => props.diameter * 1.6}px;
    width: ${props => props.diameter * 4}px;
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

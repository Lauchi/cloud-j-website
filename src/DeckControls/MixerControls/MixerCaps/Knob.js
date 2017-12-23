import React from 'react'
import styled from 'styled-components'
import KnobCap from "./KnobCap";

export default class Knob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            offset: 0,
            doubleClicked: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.value !== this.state.value
    }

    handleChange(value) {
        const newValue = value.target.value;
        const {offset} = this.state;
        let valueCleaned = newValue - offset;
        if (valueCleaned > maxValue) valueCleaned = maxValue;
        if (valueCleaned < minValue) valueCleaned = minValue;
        this.setState({
            value: valueCleaned,
        }, () => {
            if (this.props.onChangeValue) {
                this.props.onChangeValue(this.state.value)
            }
        })
    }

    render() {
        const {diameter} = this.props;
        const {value} = this.state;
        return (
            <Container diameter={diameter}>
                <UpperFaderHider diameter={diameter}/>
                <KnobInput
                    diameter={diameter}
                    type="range"
                    min={minValue}
                    max={maxValue}
                    ref="input"
                    value={value}
                    onChange={event => this.handleChange(event)}
                    onClick={() => this.resetKnob()}
                    onMouseUp={() => this.restOffset()}
                    onWheel={() => React.findDOMNode(this.refs.input).focus()}
                />
                <LowerFaderHider diameter={diameter}/>
                <KnobCap diameter={diameter} rotation={value}/>
            </Container>
        )
    }

    restOffset() {
        const {value} = this.state;
        this.setState({
            offset: -value
        });
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

const maxValue = 100;
const minValue = -100;

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

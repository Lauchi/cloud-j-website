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
        return (
            <Container>
                <UpperFaderHider/>
                <KnobInput
                    type="range"
                    min={-100}
                    max={100}
                    ref="input"
                    value={this.state.value}
                    onChange={event => this.handleChange(event)}
                    onWheel={ () => React.findDOMNode(this.refs.input).focus()}
                />
                <LowerFaderHider/>
                <KnobCapFocused rotation={this.state.value}/>
            </Container>
        )
    }
}

const Container = styled.div`
    position: relative;
    width: 60px;
    height: 250px;
`;

const KnobCapFocused = styled(KnobCap)`
    top: 120px;
`;

const FaderHider = styled.div`position: absolute;
    width: 60px;
    height: 92px;
    z-index: 3;
`;

const UpperFaderHider = FaderHider.extend`
    top: 60px;
`;

const LowerFaderHider = FaderHider.extend`
    top: -95px;
`;

const KnobInput = styled.input`
    position: absolute;
    -webkit-appearance: none;
    height: 50px;
    left: -93px;
    width: 240px;
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

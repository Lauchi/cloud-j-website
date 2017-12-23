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
                <KnobCap rotation={this.state.value}/>
            </Container>
        )
    }
}

const Container = styled.div`
    position: relative;
    display: grid;
    width: 60px;
    height: 250px;
    border: 2px solid blue;
`;

const UpperFaderHider = styled.div`
    position: absolute;
    bottom: 60px;
    width: 60px;
    height: 60px;
    border: 2px solid green;
`;

const LowerFaderHider = styled.div`
    position: absolute;
    bottom: -60px;
    width: 60px;
    height: 60px;
    border: 2px solid green;
`;

const KnobInput = styled.input`
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    -webkit-appearance: none;
    border: 2px solid red;
    height: 40px;
    width: 240px;
    background-color: transparent;
    transform: rotate(-90deg);
    
    &:focus{
        outline: none;
    }
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0;
        height: 0;
    }
`;

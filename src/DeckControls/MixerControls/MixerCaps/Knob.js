import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import KnobCap from "./KnobCap";

export default class Knob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            offset: 0,
            doubleClicked: false,
            isDragging: false
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
        const {value, isDragging} = this.state;
        return (
            <Container diameter={diameter}>
                <KnobInput
                    diameter={diameter}
                    isDragging={isDragging}
                    type="range"
                    min={minValue}
                    max={maxValue}
                    ref="input"
                    value={value}
                    onChange={event => this.handleChange(event)}
                    onClick={() => this.resetKnob()}
                    onMouseUp={() => this.restOffset()}
                    onMouseDown={() => this.widenDragBox()}
                    onWheel={() => React.findDOMNode(this.refs.input).focus()}
                />
                <KnobCap diameter={diameter} rotation={value}/>
            </Container>
        )
    }

    restOffset() {
        const {value} = this.state;
        this.setState({
            offset: -value,
            isDragging: false
        });
        this.forceUpdate();
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

    widenDragBox() {
        this.setState({isDragging: true});
    }
}

const maxValue = 100;
const minValue = -100;

const Container = styled.div`
    position: relative;
    width: ${props => props.diameter}px;
    height: ${props => props.diameter}px;
`;

const KnobInput = styled.input`
    border: 1px solid red;
    position: absolute;
    -webkit-appearance: none;
    height: ${props => props.diameter}px;
    left: ${props => props.isDragging ? -props.diameter * 1.6 : 0}px;
    width: ${props => props.isDragging ? props.diameter * 4 : props.diameter}px;
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
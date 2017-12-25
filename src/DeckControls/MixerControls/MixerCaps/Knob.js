import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import KnobCap from "./KnobCap";

export default class Knob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            previousValue: 0,
            doubleClicked: false,
            isDragging: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.value !== this.state.value
    }

    handleChange(event) {
        const {value, previousValue, isDragging} = this.state;
        if (isDragging) {
            const newValue = event.screenY;
            if (newValue > previousValue) this.setState({value: value + 1, previousValue: newValue});
            if (newValue < previousValue) this.setState({value: value - 1, previousValue: newValue});
        }
    }

    render() {
        const {diameter, className} = this.props;
        const {value, isDragging} = this.state;
        return (
            <Container diameter={diameter}
                       className={className}
                       onMouseDown={() => this.startDragging()}
                       onClick={() => this.resetKnobOnDoubleClick()}>
                <DragContainer isDragging={isDragging}
                               diameter={diameter}
                               onMouseMove={(event) => this.handleChange(event)}
                               onMouseUp={() => this.stopDragging()}>
                    <KnobCap diameter={diameter} rotation={value}/>
                </DragContainer>
            </Container>
        )
    }

    resetKnobOnDoubleClick() {
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

    startDragging() {
        this.setState({isDragging: true});
        this.forceUpdate()
    }

    stopDragging() {
        this.setState({isDragging: false});
        this.forceUpdate()
    }
}

const Container = styled.div`
    border: 1px solid red; 
    position: relative;
    width: ${props => props.diameter}px;
    height: ${props => props.diameter}px;
`;

const DragContainer = styled.div.attrs({
    zindex: props => props.isDragging ? 9 : -1,
    bordercol: props => props.isDragging ? 'blue' : 'green'
})`
    position: absolute;
    border: 1px solid ${props => props.bordercol};
    width: ${props => props.diameter * 4}px;
    height: ${props => props.diameter * 8}px;
    z-index: ${props => props.zindex};
`;

Knob.defaultProps = {
    diameter: 60
};

Knob.propTypes = {
    diameter: PropTypes.number
};
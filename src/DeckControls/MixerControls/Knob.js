import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import KnobCap from "./MixerCaps/KnobCap";

export default class Knob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            previousValue: 0,
            doubleClicked: false,
            isDragging: false,
            firstDragEvent: true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.value !== this.state.value
    }

    handleChange(event) {
        const {value, previousValue, isDragging, firstDragEvent} = this.state;
        if (firstDragEvent) this.setState({firstDragEvent: false, previousValue: event.screenY});
        else {
            if (isDragging) {
                let newValue = event.screenY;
                let cleanedValue = value + previousValue - newValue;
                if (cleanedValue > 100) cleanedValue = 100;
                if (cleanedValue < -100) cleanedValue = -100;
                this.setState({
                    value: cleanedValue,
                    previousValue: newValue
                });
            }
        }
    }

    render() {
        const {diameter, className, label} = this.props;
        const {value, isDragging} = this.state;
        return (
            <Container diameter={diameter}
                       className={className}
                       onMouseDown={() => this.startDragging()}
                       onClick={() => this.resetKnobOnDoubleClick()}>
                <DragContainer isDragging={isDragging}
                               diameter={diameter}
                               onMouseMove={(event) => this.handleChange(event)}
                               onMouseUp={() => this.stopDragging()}/>
                <KnobCap diameter={diameter} rotation={value} label={label}/>
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
        this.setState({isDragging: false, firstDragEvent: true});
        this.forceUpdate()
    }
}

const Container = styled.div`
    width: ${props => props.diameter}px;
    height: ${props => props.diameter}px;
    position: static !important;
`;

const DragContainer = styled.div.attrs({
    zindex: props => props.isDragging ? 9 : -1,
})`
    position: absolute;
    height:100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: ${props => props.zindex};
`;

Knob.defaultProps = {
    diameter: 60
};

Knob.propTypes = {
    diameter: PropTypes.number
};
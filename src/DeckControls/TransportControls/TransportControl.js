import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './style.css';


function TransportControl({index}) {
    return <Container>
        <div className="classOne classTwo">jeah</div>
        <ControlButton>Play</ControlButton>
        <ControlButton>Sync</ControlButton>
        <ControlButton>Sync</ControlButton>
        <ControlButton>Sync</ControlButton>
    </Container>
}

export default TransportControl;

const Container = styled.div`
    display: grid;
`;

const ControlButton = styled.button`
    border-radius: 8px;
    width: 80px;
    height: 80px;
    &:focus {
        outline: none;
    }
`;

TransportControl.propTypes = {
    index: PropTypes.number.isRequired
};
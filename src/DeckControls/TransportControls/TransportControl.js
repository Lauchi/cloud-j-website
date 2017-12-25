import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function TransportControl({index}) {
    return <Container>
        <button>jeah</button>
    </Container>
}

export default TransportControl;

const Container = styled.div`
    display: grid;
`;

TransportControl.propTypes = {
    index: PropTypes.number.isRequired
};
import React, {Component} from 'react';
import styled from 'styled-components'
import TwoChannelMixer from "./Mixer/TwoChannelMixer";
import COLORS from "./Assets/COLORS";

class App extends Component {
    render() {
        return (
            <Container>
                <Header>Cloud-J</Header>
                <Content>
                    <TwoChannelMixer/>
                </Content>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${COLORS.PrimaryLightColor()};
    flex-direction: column;
`;

const Header = styled.div`
    text-align: center;
    padding-top: 60px;
    padding-bottom: 30px;
    background-color: ${COLORS.PrimaryDarkOrange()};
    font-size: 60px;
`;

const Content = styled.div`
    display: flex; 
    justify-content: center;
`;

export default App;
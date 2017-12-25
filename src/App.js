import React, {Component} from 'react';
import styled from 'styled-components'
import TwoChannelMixer from "./Mixer/TwoChannelMixer";

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
    flex-direction: column;
`;

const Header = styled.div`
    text-align: center;
    padding-top: 60px;
    padding-bottom: 30px;
    background-color: aquamarine;
    font-size: 60px;
`;

const Content = styled.div`
    display: flex; 
    justify-content: center;
`;

export default App;
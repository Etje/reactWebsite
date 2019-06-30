import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image from '../assets/image.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${image}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0; 
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid="true" className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>I've learned coding more while I was following along with YouTube tutorials, then i've learned on school</p>
            </Container>
        </Jumbo>
    </Styles>
); 

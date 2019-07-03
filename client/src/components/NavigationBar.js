import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .navbar-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand className="text-white" href="/">Et Coding</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/" className="text-white">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/create" className="text-white">Create Product</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/view" className="text-white">View Products</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about" className="text-white">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact" className="text-white">Contact</Nav.Link></Nav.Item> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

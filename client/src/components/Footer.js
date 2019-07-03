import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

export const Footer = () => (
    <footer className="page-footer w-100">
        <div className="align-center justify-content-center text-center text-white h-25 min-h-100 d-flex">
            <p className="align-items-end d-flex m-4 p-0">Some Footer, Copyright {new Date().getFullYear()}</p>
        </div>
    </footer>
)

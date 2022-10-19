import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <Container>
            <Navbar expand="xxl" variant="dark" bg="dark" fixed="top">
                <Container>
                <Navbar.Brand>{props.header}</Navbar.Brand>
                {props.children}
                </Container>
            </Navbar>
        </Container>
    );
}

Header.propTypes = {
    header: PropTypes.string,
    buttonName: PropTypes.string,
    children: PropTypes.element
};

export default Header;
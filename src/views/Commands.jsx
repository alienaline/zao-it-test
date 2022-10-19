import React from 'react';
import Header from '../components/Header/Header';
import CommandCard from '../components/Card/CommandCard';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Commands(props) {
    return (
        <div>
            <Header 
                header='Доступные команды:'
                buttonName='Добавить новую команду'>
                <Button 
                    variant="success"
                    onClick={props.onClick}>
                    Добавить новую команду
                </Button>
            </Header>
            <Container style={{ margin: '5rem auto' }}>
                <CommandCard />
                <CommandCard />
                <CommandCard />
                <CommandCard />
                <CommandCard />
                <CommandCard />
                <CommandCard />
                <CommandCard />
                <CommandCard />
            </Container>
        </div>
    );
}

Commands.propTypes = {
    onClick: PropTypes.func,
};

export default Commands;
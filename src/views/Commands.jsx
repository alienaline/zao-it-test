import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import CommandCard from '../components/Card/CommandCard';
import { Container, Button, Alert } from 'react-bootstrap';
import holder from '../assets/img/holder.jpg';
import PropTypes from 'prop-types';

const hostUrl = 'http://localhost:3001/cards';

function Commands(props) {
    const [data, setData] = useState();

    useEffect(() => {
        try { 
            fetch(hostUrl)
                .then(res => res.json())
                .then(d => d.length > 0 ? setData(d) : setData());
        } catch( errors ) {
            console.log('no data');
        }
    }, [props.view]);

    return (
        <div>
            <Header 
                header='Доступные команды:'
                buttonName='Добавить новую команду'>
                <Button 
                    variant="success"
                    onClick={props.setView}>
                    Добавить новую команду
                </Button>
            </Header>
            <Container style={{ margin: '5rem auto' }}>
                { data ?
                    data.map((item) => 
                        <CommandCard
                            key={item.id} 
                            commandName={item.commandName}
                            img={holder} />
                    )
                    : <Alert variant='info'>Пока нет доступных команд</Alert>
                }
            </Container>
        </div>
    );
}

Commands.propTypes = {
    setView: PropTypes.func,
    view: PropTypes.bool
};

export default Commands;
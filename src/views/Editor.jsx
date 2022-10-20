import React from 'react';
import Header from '../components/Header/Header';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CommandForm from '../components/Form/CommandForm';

function Editor(props) {
    return (
        <div>
            <Header 
                header='Добавить новую команду:'
                buttonName='Назад к списку'>
                <Button 
                    variant="outline-light"
                    onClick={props.setView}>
                    Назад к списку
                </Button>
            </Header>
            <CommandForm />
        </div>
    );
}

Editor.propTypes = {
    setView: PropTypes.func,
};

export default Editor;
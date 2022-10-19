import React from 'react';
import Header from '../components/Header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Editor(props) {
    return (
        <div>
            <Header 
                header='Добавить новую команду:'
                buttonName='Назад к списку'>
                <Button 
                    variant="outline-light"
                    onClick={props.onClick}>
                    Назад к списку
                </Button>
            </Header>
            <Container style={{ margin: '5rem auto' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupImage">
                        <Form.Label>Выберите изображение</Form.Label>
                        <Form.Control type="file" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Введите название команды</Form.Label>
                        <Form.Control type="text" placeholder="Название команды" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Сохранить
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

Editor.propTypes = {
    onClick: PropTypes.func,
};

export default Editor;
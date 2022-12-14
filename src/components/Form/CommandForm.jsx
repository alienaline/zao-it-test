import React, { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';

const hostUrl = 'http://localhost:3001/cards';

function CommandForm() {
    const [commandName, setCommandName] = useState('');
    const [submited, setSubmited] = useState(false);
    const [srcValue, setSrcValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { commandName, src: srcValue };

        await fetch(hostUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        setSubmited(true);
    };

    return (
        <Container style={{ margin: '5rem auto' }}>
            { submited && <Alert variant='success'> Добавлено! </Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupUrl">
                    <Form.Label>Введите ссылку на изображение</Form.Label>
                    <Form.Control 
                        type="url"
                        value={srcValue} 
                        onChange={(event) => setSrcValue(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Введите название команды</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Название команды" 
                        required
                        value={commandName}
                        onChange={(event) => setCommandName(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Сохранить
                </Button>
            </Form>
        </Container>
    );
}

export default CommandForm;
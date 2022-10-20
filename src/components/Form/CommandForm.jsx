import React, { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';

const hostUrl = 'https://alienaline.github.io/zao-it-test';

function CommandForm() {
    const [commandName, setCommandName] = useState('');
    const [submited, setSubmited] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { commandName, file: 'src' };

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
                <Form.Group className="mb-3" controlId="formGroupImage">
                    <Form.Label>Выберите изображение</Form.Label>
                    <Form.Control 
                        type="file" 
                        accept='image/*,.jpg,.png' />
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
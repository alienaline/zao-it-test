import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import holder from '../../assets/img/holder.jpg';

function CommandCard() {
  return (
    <Card bg='light' border='dark' style={{ width: '30rem', display: 'flex', flexDirection: 'row', margin: '15px 0'}}>
      <Card.Img variant="top" src={holder} style={{ maxWidth: '150px', borderRadius: '5px' }}/>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Card.Title>Команда</Card.Title>
        <Button variant="outline-primary">Выполнить</Button>
      </Card.Body>
    </Card>
  );
}

export default CommandCard;
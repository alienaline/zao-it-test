import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

function CommandCard(props) {
  const [isLoading, setLoading] = useState(false);
  const [resolve, setResolve] = useState(true);

  const handleClick = () => {
    setLoading(true);

    return (
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > .7) {
            resolve(true);
          } else {
            reject(false);
          }
        }, 500);
      })
        .then(resolved, rejected)
        .then(() => {
          setLoading(false);
        })
    );
  };

  const resolved = (result) => {
    setResolve(result);
  };

  const rejected = (error) => {
    setResolve(error);
  };

  return (
    <Card bg='light' border='dark' style={{ width: '30rem', display: 'flex', flexDirection: 'row', margin: '15px 0'}}>
      <Card.Img variant="top" src={props.img} style={{ maxWidth: '150px', borderRadius: '5px' }}/>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Card.Title>{props.commandName}</Card.Title>
        { resolve ? false : <Badge bg="danger">Не удалось выполнить</Badge>}
        <Button 
          variant="outline-primary"
          disabled={isLoading}
          type='button'
          onClick={handleClick} >
          {isLoading ? 'Выполняется...' : 'Выполнить'}
        </Button>
      </Card.Body>
    </Card>
  );
}

CommandCard.propTypes = {
  img: PropTypes.string,
  commandName: PropTypes.string
};

export default CommandCard;
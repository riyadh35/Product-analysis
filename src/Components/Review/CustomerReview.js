import React from 'react';
import { Card } from 'react-bootstrap';

const CustomerReview = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <p>{props.text}</p>
                        <p style={{ fontWeight: '500', fontSize: '25px', textAlign: 'left' }}> {props.name}</p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CustomerReview;
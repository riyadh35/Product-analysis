import React from 'react';
import CustomerReview from './CustomerReview';
import { Col, Container, Row } from 'react-bootstrap';

const Review = () => {
    const review = [
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        },
        {
            "title": "Super Car",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias id repudiandae fugiat nisi! Consectetur corrupti voluptas voluptatum ex, sint, labore eveniet amet dolore adipisci quasi exercitationem minima blanditiis quibusdam earum.",
            "Name": "Riayd Mahmud"
        }

    ]
    return (
        <div>
            <h1 className='review'>This is Review </h1>
            <Container>
                <Row>
                    <Col xs><CustomerReview title="Super Car" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, incidunt." name="Riyad Mahmud" /></Col>


                    <Col xs={{ order: 12 }}><CustomerReview title="Vintage Car" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, incidunt." name="Ashraful Alom" /></Col>


                    <Col xs={{ order: 1 }}><CustomerReview title="F1(Formola One)" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, incidunt." name="Shamim Osman" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;
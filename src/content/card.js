import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../css/card.css';

const ContentCard = (props) => {
  return (
    <div>
        <Card class="contentcard">
            <CardImg top width="100%" src="../logo.svg" alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{props.content}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    </div>
  );
};

export default ContentCard;
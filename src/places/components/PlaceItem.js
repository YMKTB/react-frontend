import React from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

const PlaceItem = props => {
    return <li className="place-item">
        <Card className="place-item__content" >
        <div className="place-item__image">
            <img src = {props.image} alt={props.title}></img>
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h2>{props.address}</h2>
            <p>{props.description}</p>

        </div>
        <div className="place-item__actions">
            <Button inverse>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}/places`}>EDIT</Button>
            <Button danger>DELETE</Button>
        </div>
        </Card>
    </li>;
};


export default PlaceItem;
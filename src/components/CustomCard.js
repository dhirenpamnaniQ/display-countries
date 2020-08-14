import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function CustomCard(props)
{
    //const {Meta} = card;

    return (<div>

        <Card style={{ width: '18rem' , height:"400px", float:"left" , margin:"15px" }}>
        <Card.Img variant="top" src={props.flag} style={{height:"150px"}} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            Population : {props.population}
            <br></br>
            currency : {props.currency}
            <br></br>
            capital : {props.capital}
            <br></br>
            region : {props.region}
            </Card.Text>
            <Button variant="primary">{props.name}</Button>
        </Card.Body>
        </Card>
                


    </div>)

}

export default CustomCard
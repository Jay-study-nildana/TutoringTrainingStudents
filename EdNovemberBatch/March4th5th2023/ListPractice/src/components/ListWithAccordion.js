//ListWithAccordion.js

import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

const ListWithAccordion = () => {

    //list of items

    const listOfSuperHeroes = [
        {
            id: 1,
            name: "Superman",
            power: "Super Strength",
            weakness: "Kryptonite",
            img: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
            
        },
        {
            id: 2,
            name: "Batman",
            power: "Money",
            weakness: "Joker",
            img: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
        },
        {
            id: 3,
            name: "Spiderman",
            power: "Spider Sense",
            weakness: "Green Goblin",
            img: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
        },
        {
            id: 4,
            name: "Ironman",
            power: "Iron Suit",
            weakness: "Thanos",
            img: "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png"
        },
        //wonderwoman
        {
            id: 5,
            name: "Wonder Woman",
            power: "Super Strength",
            weakness: "Ares",
            img: "https://upload.wikimedia.org/wikipedia/en/9/93/Wonder_Woman.jpg"
        },
        {
            id: 6,
            name: "Thor",
            power: "Mjolnir",
            weakness: "Hela",
            img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg"
        },

    ];

    //item component

    const Item = ({ item }) => (
        <ListGroup.Item>
            <h3>{item.id}. {item.name}</h3>
            <p>Power: {item.power}. Weakness: {item.weakness}</p>
            <hr></hr>
            {/* <Route path="/listwithaccordion/:id" element={<SuperHeroPage />} /> */}
            <Link to={`/listwithaccordion/${item.id}`}>{item.name}'s Page</Link>
            <hr></hr>
            <img
        src={item.img}
        className="img-fluid"
        alt="..."
      ></img>
        </ListGroup.Item>
    );



    const stuff = (
        <div>
            <div className="container-fluid text-center">
                <p>
                    This is a list with an item component with Accordion.
                </p>
                <div>
                {/* <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
                </div>
                {/* <div>
                    <ListGroup>
                        {listOfSuperHeroes.map((item) => (
                            <Item key={item.id} item={item} />
                        ))}
                    </ListGroup>
                </div> */}
                <div>
                    <Accordion>
                        {
                            listOfSuperHeroes.map((item) => (
                                <Accordion.Item key={item.id} eventKey={item.id}>
                                    <Accordion.Header>{item.name}</Accordion.Header>
                                    <Accordion.Body>
                                        {/* <div>
                                        <img
                                        src={item.img}
                                        className="img-fluid"
                                        alt="..."
                                    ></img>
                                        <p>Power: {item.power}. Weakness: {item.weakness}</p>
                                        </div> */}
                                        <div>
                                        <Item key={item.id} item={item} />                                            
                                        </div>

                                        <hr></hr>
                                        <div>
                                        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
                </div>

            </div>
        </div>
    );

    return stuff;

}
export default ListWithAccordion;
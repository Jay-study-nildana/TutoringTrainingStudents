//ListwithItemComponent.js
import ListGroup from 'react-bootstrap/ListGroup';

const ListwithItemComponent = () => {

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
        }

    ];

    //item component

    const Item = ({ item }) => (
        <ListGroup.Item>
            <h3>{item.id}. {item.name}</h3>
            <p>Power: {item.power}. Weakness: {item.weakness}</p>
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
                    This is a list.
                </p>
                <p>
                    This is a list with an item component.
                </p>
                <div>
                    <ListGroup>
                        <ListGroup.Item>First item</ListGroup.Item>
                        <ListGroup.Item>Second item</ListGroup.Item>
                        <ListGroup.Item>Third item</ListGroup.Item>
                    </ListGroup>

                </div>
                <div>
                    <ListGroup>
                        {listOfSuperHeroes.map((item) => (
                            <Item key={item.id} item={item} />
                        ))}
                    </ListGroup>
                </div>


            </div>
        </div>
    );

    return stuff;

}
export default ListwithItemComponent;
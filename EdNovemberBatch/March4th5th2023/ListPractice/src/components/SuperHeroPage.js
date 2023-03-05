//SuperHeroPage.js

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const SuperHeroPage = ( {} ) => {

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

    let params = useParams();

    const [heroColectedObject, setHeroColectedObject] = useState({});

    useEffect(() => {

        console.log("SuperHeroPage.js useEffect() called");
        console.log(params);
        console.log(listOfSuperHeroes[params.id]);

        //setHeroColectedObject(listOfSuperHeroes[params.id-1]);

        if(heroColectedObject.name == null) {

            console.log("heroColectedObject is undefined");
            setHeroColectedObject(listOfSuperHeroes[params.id-1]);

            
            console.log(heroColectedObject);
        }
        else
        {

            console.log("heroColectedObject is undefined");

            setHeroColectedObject(listOfSuperHeroes[params.id-1]);

            // let tempHero =         {
            //     id: 1,
            //     name: "Superman : Default Object Used",
            //     power: "Super Strength",
            //     weakness: "Kryptonite",
            //     img: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
                
            // };
            // heroColectedObject = tempHero;
        }

        
        console.log(heroColectedObject);

    }, [heroColectedObject])


const stuff = (
    <div>
      <div className="container-fluid text-center">
        <div>
            <p>
            This is the independent SuperHeroPage.
            </p>
            <p>
                this will be used to display the details of a single superhero.
            </p>
            <p>
                from dynamic routing.
            </p>
        </div>
        <div>
            <p>{heroColectedObject.name}</p>
            <p>Power: {heroColectedObject.power}. Weakness: {heroColectedObject.weakness}</p>
            <hr></hr>
            <img
                src={heroColectedObject.img}
                className="img-fluid"
                alt="..."
            ></img>
            <hr></hr>
            <Link to="/listwithaccordion">Return to Super Hero List</Link>
        </div>
      </div>
    </div>
  );

  return stuff;

}
  export default SuperHeroPage;
  
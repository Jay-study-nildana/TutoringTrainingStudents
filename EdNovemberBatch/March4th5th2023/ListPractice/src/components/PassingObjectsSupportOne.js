//InputThingsSupportOne
//supporting component.
//const ShowSomeStuff = ({someObject1,someObject2}) => {
const PassingObjectsSupportOne = ({ Object1, Object2 }) => {
  const stuff = (
    <div>
      <div className="container-fluid text-center">
        <p>Here, we are just showing some things.</p>
        <hr></hr>
        <h1>{Object1.name}</h1>
        <hr></hr>
        <h1>{Object2.name}</h1>

        <hr></hr>
      </div>
    </div>
  );

  return stuff;
};

export default PassingObjectsSupportOne;

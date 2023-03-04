//SimpleBasicList.js
import ListGroup from 'react-bootstrap/ListGroup';

const SimpleBasicList = () => (
    <div>
      <div className="container-fluid text-center">
        <p>
          This is a SimpleBasicList.
        </p>
        <div>
            <ListGroup>
                <ListGroup.Item>First item</ListGroup.Item>
                <ListGroup.Item>Second item</ListGroup.Item>
                <ListGroup.Item>Third item</ListGroup.Item>
            </ListGroup>
            
        </div>
      </div>
    </div>
  );
  export default SimpleBasicList;
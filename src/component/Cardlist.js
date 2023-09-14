import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//  this is the card Selection
const BasicExample = () => {
  // this return the value 
  return (
    
    <div className="container mt-5">
      <div className="row">

        {/* first card  */}
        <div className="col-4">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Monday Plan</Card.Title>
              <Card.Text>
                All plans for Monday. (Let make the new week great)
              </Card.Text>
              <Button variant="primary">View Details</Button>
              
            </Card.Body>
          </Card>
        </div>

        {/* second card  */}
        <div className="col-4">
        <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Tuesday Plan</Card.Title>
              <Card.Text>
                All plans for Tuesday. (Let make the new week great) 
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </div>
        
        {/* third card  */}
        <div className="col-4">
        <Card style={{ width: '100%', hight: '100%'}}>
            <Card.Body>
              <Card.Title>Wednesday Plan</Card.Title>
              <Card.Text>
                All plan for Wednesday. (Let make the new week great)
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};


export default BasicExample;

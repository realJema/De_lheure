 
import React from "react";

// reactstrap components
import {
  Card,
  CardImg,
  Row,
  Col,
} from "reactstrap";

// core components
class Single extends React.Component {
  
    componentDidMount() {
      console.log(this.props.data)
  }
  render() {
    return (
      <>
        <Card key={this.props.id} className="border-top">
          <Row className="align-items-center">
            <Col lg="2">
              <h1 className="title text-center">{this.props.id}</h1>
            </Col>
            <Col lg="8">
              <Row className="align-items-center">
                <Col lg="8">
                  <h5 className="title text-warning">{this.props.data.title}</h5>
                  <p>{this.props.data.artist}</p>
                </Col>
                <Col lg="1">{this.props.data.upvotes}</Col>
                <Col lg="1">{this.props.data.downvotes}</Col>
                <Col lg="1">
                  <i
                    onClick={() => this._upvote(this.props.id)}
                    className="fa fa-play vote-up"
                    aria-hidden="true"
                  ></i>
                </Col>
                <Col lg="1">
                  <i
                    onClick={() => this._downvote(this.props.id)}
                    className="fa fa-play vote-down"
                    aria-hidden="true"
                  ></i>
                </Col>
              </Row>
            </Col>
            <Col lg="2">
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1200x1000.jpg")}
                top
              />
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default Single;

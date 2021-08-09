import React from "react";

// reactstrap components
import { Button, Card, CardImg, Container, Row, Col } from "reactstrap";

// core components
import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";
import data from "./data.json";

class Billboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList : []
    };
  }

  componentDidMount() {
    const postList = data;
    this.setState({
      postList: postList
    })
  }

 
  _upvote(id) {
    const { postList } = this.state;
    let tempData = postList; 
    // iterate over each element in the array
    for (var i = 0; i < tempData.length; i++) {
      // look for the entry with a matching `code` value
      if (tempData[i].id === id) {
        let tempVal = tempData[i];
        tempVal.upvotes++;
        tempData[i] = tempVal; 
      }
    }
    this.setState({
      postList: tempData
    })
  }

  _downvote(id) {
    const { postList } = this.state;
    let tempData = postList;
    // iterate over each element in the array
    for (var i = 0; i < tempData.length; i++) {
      // look for the entry with a matching `code` value
      if (tempData[i].id === id) {
        let tempVal = tempData[i];
        tempVal.downvotes++;
        tempData[i] = tempVal;
      }
    }
    this.setState({
      postList: tempData,
    });
  }

  render() {
    const { postList } = this.state;
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <section className="section bg-primary pt-lg-7">
            {/* other sections pills  */}
            <Row className="justify-content-center text-center mb-3">
              <Button
                outline
                className="pl-2 categories rounded-pill"
                color="default"
                type="button"
                lg="2"
                size="sm"
              >
                Billboard 200
              </Button>
              <Button
                outline
                className="pl-2 categories rounded-pill"
                color="default"
                type="button"
                lg="2"
                size="sm"
              >
                Artist 100
              </Button>
              <Button
                outline
                className="pl-2 categories rounded-pill"
                color="default"
                type="button"
                lg="2"
                size="sm"
              >
                Producers 100
              </Button>
              <Button
                outline
                className="pl-2 categories rounded-pill"
                color="default"
                type="button"
                lg="2"
                size="sm"
              >
                Video Makers 100
              </Button>
            </Row>
            {/* end other sections pills  */}
            {/* Top Section  */}
            <Row className="justify-content-center text-center mb-5">
              <Col lg="8">
                <h1 className="display-1 text-white">THE HOT 100</h1>
              </Col>
            </Row>
            <Container>
              <Row className="row-grid align-items-center">
                <CardImg
                  style={{ height: "35em", objectFit: "cover" }}
                  alt="..."
                  src={require("assets/img/theme/img-1-1200x1000.jpg")}
                  top
                />
              </Row>
              <Row className="row-grid align-items-center">
                <Col md="2">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                  </Card>
                </Col>
                <Col md="2">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* end Top Section  */}
          </section>
          <section className="section section-lg pt-5">
            <Container>
              {postList
                .sort(
                  (a, b) =>
                    Math.abs(b.upvotes - b.downvotes) -
                    Math.abs(a.upvotes - a.downvotes)
                )
                .map((item, i) => {
                  return (
                    <Card key={i} className="border-top">
                      <Row className="align-items-center">
                        <Col lg="2">
                          <h1 className="title text-center">{i + 1}</h1>
                        </Col>
                        <Col lg="8">
                          <Row className="align-items-center">
                            <Col lg="8">
                              <h5 className="title text-warning">
                                {item.title}
                              </h5>
                              <p>{item.artist}</p>
                            </Col>
                            <Col lg="1">{item.upvotes}</Col>
                            <Col lg="1">{item.downvotes}</Col>
                            <Col lg="1">
                              <i
                                onClick={() => this._upvote(item.id)}
                                className="fa fa-play vote-up"
                                aria-hidden="true"
                              ></i>
                            </Col>
                            <Col lg="1">
                              <i
                                onClick={() => this._downvote(item.id)}
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
                  );
                })}
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Billboard;

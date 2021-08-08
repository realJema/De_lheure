 
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";

class Billboard extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <section className="section bg-primary pt-lg-7">
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
            <Row className="justify-content-center text-center mb-5">
              <Col lg="8">
                <h1 className="display-1 text-white">THE HOT 100</h1>
              </Col>
            </Row>
            <Container>
              <Row className="row-grid align-items-center">
                <CardImg
                  style={{ height: "35em", "object-fit": "cover" }}
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
          </section>
          <section className="section section-lg pt-5">
            <Container>
              <Card className="border-top">
                <Row className="align-items-center">
                  <Col lg="2">
                    <h1 className="title text-center">1</h1>
                  </Col>
                  <Col lg="8">
                    <Row className="align-items-center">
                      <Col lg="10">
                        <h5 className="title text-warning">
                          Modular Components
                        </h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-up" aria-hidden="true"></i>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-down" aria-hidden="true"></i>
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
              <Card className="border-top">
                <Row className="align-items-center">
                  <Col lg="2">
                    <h1 className="title text-center">2</h1>
                  </Col>
                  <Col lg="8">
                    <Row className="align-items-center">
                      <Col lg="10">
                        <h5 className="title text-warning">
                          Modular Components
                        </h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-up" aria-hidden="true"></i>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-down" aria-hidden="true"></i>
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
              <Card className="border-top">
                <Row className="align-items-center">
                  <Col lg="2">
                    <h1 className="title text-center">3</h1>
                  </Col>
                  <Col lg="8">
                    <Row className="align-items-center">
                      <Col lg="10">
                        <h5 className="title text-warning">
                          Modular Components
                        </h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-up" aria-hidden="true"></i>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-down" aria-hidden="true"></i>
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
              <Card className="border-top">
                <Row className="align-items-center">
                  <Col lg="2">
                    <h1 className="title text-center">4</h1>
                  </Col>
                  <Col lg="8">
                    <Row className="align-items-center">
                      <Col lg="10">
                        <h5 className="title text-warning">
                          Modular Components
                        </h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-up" aria-hidden="true"></i>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-down" aria-hidden="true"></i>
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
              <Card className="border-top">
                <Row className="align-items-center">
                  <Col lg="2">
                    <h1 className="title text-center">5</h1>
                  </Col>
                  <Col lg="8">
                    <Row className="align-items-center">
                      <Col lg="10">
                        <h5 className="title text-warning">
                          Modular Components
                        </h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-up" aria-hidden="true"></i>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-down" aria-hidden="true"></i>
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
              <Card className="border">
                <Row className="align-items-center">
                  <Col lg="2" className="align-items-center">
                    <h1 className="title text-center">6</h1>
                  </Col>
                  <Col lg="8">
                    <Row className="align-items-center">
                      <Col lg="10">
                        <h5 className="title text-warning">
                          Modular Components
                        </h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-up" aria-hidden="true"></i>
                      </Col>
                      <Col lg="1">
                        <i class="fa fa-play vote-down" aria-hidden="true"></i>
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
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Billboard;

import React from "react";
import axios from "axios";

// reactstrap components
import { Button, Card, CardImg, Container, Row, Col } from "reactstrap";

// core components
import Footer from "components/Footers/Footer";
import MainNavbar from "components/Navbars/MainNavbar";

const BACKEND_API = "http://127.0.0.1:5000/dlheure/api/";
class Billboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      voted: [],
    };
  }

  componentDidMount() {
    axios
      .get(BACKEND_API + "music")
      .then((res) => {
        // fetching data
        localStorage.setItem("musics", JSON.stringify(res.data));
        this.setState({
          postList: res.data,
        });
      })
      .catch((error) => {
        // Error
        console.log(error);
      });
  }

  /*
    name: _vote(id, vote)
    params; id, vote 
    id: id of the music to vote on 
    vote: true for upvote 
    false for downvote
    descr: queries api to update upvotes or downvotes, updates state, adds id to a list of already voted items. You can vote on a music only once
  */
  _vote(id, vote) {
    axios
      .put(BACKEND_API + "vote", {
        postId: id,
        vote: vote, // true for upvote, false for downvote
      })
      .then((res) => {
        // after successful update in db, function updates values locally
        const { postList } = this.state;
        let tempData = postList;
        // iterate over each element in the array
        for (var i = 0; i < tempData.length; i++) {
          // look for the entry with a matching `code` value
          if (tempData[i]._id === id) {
            console.log("got here");
            let tempVal = tempData[i];
            if (vote) {
              tempVal.upvotes++;
            } else {
              tempVal.downvotes++;
            }
            tempData[i] = tempVal;
          }
        }
        this.setState({
          postList: tempData,
          voted: this.state.voted.concat(id),
        });
      })
      .catch((error) => {
        // Error
        console.log(error);
      });
  }
  // extracts video id from link
  _getThumbnail(link) {
    var video_id = link.split("v=")[1];
    var ampersandPosition = video_id.indexOf("&");
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }
  _upvote(id) {
    this._vote(id, true);
  }

  _downvote(id) {
    this._vote(id, false);
  }
  _doNothing() {}
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
                <h1 className="display-1 top-title text-white">THE HOT 100</h1>
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
              <Row className="justify-content-end mb-3 mr-2">
                <Col lg="1">
                  <small>upvotes</small>
                </Col>
                <Col lg="1">
                  <small>downvotes</small>
                </Col>
                <Col lg="3"></Col>
              </Row>
              <div className="big-shadow">
                {postList
                  .sort(
                    (a, b) =>
                      b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
                  )
                  .map((item, i) => {
                    return (
                      <Card key={i} className="border-top ">
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
                                  onClick={
                                    this.state.voted.indexOf(item._id) > -1
                                      ? this._doNothing()
                                      : () => this._upvote(item._id)
                                  }
                                  className="fa fa-play vote-up"
                                  aria-hidden="true"
                                ></i>
                              </Col>
                              <Col lg="1">
                                <i
                                  onClick={
                                    this.state.voted.indexOf(item._id) > -1
                                      ? this._doNothing()
                                      : () => this._downvote(item._id)
                                  }
                                  className="fa fa-play vote-down"
                                  aria-hidden="true"
                                ></i>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg="2">
                            <CardImg
                              alt="..."
                              src={
                                "https://img.youtube.com/vi/" +
                                this._getThumbnail(item.link) +
                                "/2.jpg"
                              }
                              top
                            />
                          </Col>
                        </Row>
                      </Card>
                    );
                  })}
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Billboard;

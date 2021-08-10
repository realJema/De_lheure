import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class MainNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <h1 className="display-4 text-white logo-brand">de L'Heure</h1>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">CHARTS</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl large-dropdown">
                      <div className="dropdown-menu-inner">
                        <Container>
                          <Row className="billboard-navbar">
                            <Col lg="3">
                              <h6>Music</h6>
                              <p>Hot Music 100</p>
                              <p>Hot Music 200</p>
                              <p>Hot Music Producers</p>
                              <p>Hot Artists</p>
                              <p>Upcoming Artists</p>
                            </Col>
                            <Col lg="3">
                              <h6>Video</h6>
                              <p>Hot Video 100</p>
                              <p>Hot Video Producers</p>
                              <p>Honorable Mentions</p>
                              <p>Amateurs</p>
                              <p>International</p>
                            </Col>
                            <Col lg="3">
                              <h6>Year</h6>
                              <p>2021</p>
                              <p>2020</p>
                              <p>2019</p>
                              <p>2018</p>
                              <p>2017</p>
                            </Col>
                            <Col lg="3">
                              <h6>Genres</h6>
                              <p>Mbole</p>
                              <p>Hip-Hop/R&B</p>
                              <p>Dance</p>
                              <p>Gospel</p>
                              <p>Pop</p>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">NEWS</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Container>
                          <Row className="billboard-navbar">
                            <Col lg="6">
                              <h6>Year</h6>
                              <p>2021</p>
                              <p>2020</p>
                              <p>2019</p>
                              <p>2018</p>
                              <p>2017</p>
                            </Col>
                            <Col lg="6">
                              <h6>Genres</h6>
                              <p>Mbole</p>
                              <p>Hip-Hop/R&B</p>
                              <p>Dance</p>
                              <p>Gospel</p>
                              <p>Pop</p>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink to="/billboard" tag={Link}>
                      ABOUT US
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/creativetim"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="nav-link-inner--text ml-1">
                        Subscribe
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MainNavbar;

'use client';

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Image, Row, Col, Button } from "react-bootstrap";
import { Search, Headset, Person, Bag, Facebook, TwitterX, Pinterest, Instagram, Tiktok, Youtube, GlobeAmericas } from "react-bootstrap-icons";

const TopMenu = () => (
  <Navbar className="navbar" expand="lg">
    <Container fluid className="px-0">
      <Nav className="justify-content-start px-3">
        <NavDropdown 
          title={
            <>
              <GlobeAmericas /> UNITED STATES (USD $)
            </>
          }
        >
          <NavDropdown.ItemText>United States (USD $)</NavDropdown.ItemText>
          <NavDropdown.ItemText>Australia (USD $)</NavDropdown.ItemText>
          <NavDropdown.ItemText>Austria (USD $)</NavDropdown.ItemText>
          <NavDropdown.ItemText>Bahrain (USD $)</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
      <Nav className="justify-content-center">
        <Image src="flower-knows-logo.avif" alt="flower knows logo"/>
      </Nav>
      <Nav className="justify-content-end p-3">
        <Nav.Link className="fs-5"><Search/></Nav.Link>
        <Nav.Link className="fs-5"><Headset/></Nav.Link>
        <Nav.Link className="fs-5"><Person/></Nav.Link>
        <Nav.Link className="fs-5"><Bag/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

const MiddleMenu = () => (
  <Navbar expand="lg" className="sticky-top z-1">
    <Container>
      <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link>NEW</Nav.Link>
            <NavDropdown title="COLLECTIONS">
              <NavDropdown.ItemText>Snow Ballet</NavDropdown.ItemText>
              <NavDropdown.ItemText>Knight Unicorn</NavDropdown.ItemText>
              <NavDropdown.ItemText>Bunny Garden</NavDropdown.ItemText>
              <NavDropdown.ItemText>The Sweetie Bear</NavDropdown.ItemText>
              <NavDropdown.ItemText>Shell&apos;s Jewel</NavDropdown.ItemText>
              <NavDropdown.ItemText>Strawberry Cupid</NavDropdown.ItemText>
              <NavDropdown.ItemText>Butterfly Cloud Collar</NavDropdown.ItemText>
              <NavDropdown.ItemText>Midsummer Fairytales</NavDropdown.ItemText>
              <NavDropdown.ItemText>Strawberry Rococo</NavDropdown.ItemText>
              <NavDropdown.ItemText>Swan Ballet</NavDropdown.ItemText>
              <NavDropdown.ItemText>Unicorn</NavDropdown.ItemText>
            </NavDropdown>
            <NavDropdown title="GIFTING">
              <NavDropdown.ItemText>Value Sets</NavDropdown.ItemText>
              <NavDropdown.ItemText>Occasion</NavDropdown.ItemText>
              <NavDropdown.ItemText>Gift Idea</NavDropdown.ItemText>
              <NavDropdown.ItemText>Price</NavDropdown.ItemText>
            </NavDropdown>
            <Nav.Link>BEST SELLERS</Nav.Link>
            <NavDropdown
              // creates red circle around SALE, similar to original website
              title={
                <span className="position-relative d-inline-block">
                  SALE
                  <svg
                    className="scribble-svg position-absolute top-50 start-50 translate-middle"
                    viewBox="0 0 100 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: '150%',
                      height: '180%',
                      overflow: 'visible',
                      pointerEvents: 'none', // Prevents the SVG from blocking clicks on the dropdown
                    }}
                  >
                    <path
                      d="M 5 20 C 3 6, 95 3, 95 20 C 95 36, 4 37, 8 18 C 12 6, 90 5, 93 16"
                      stroke="#e07a7a"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              }
            >
              <NavDropdown.ItemText>Up to 50% Off</NavDropdown.ItemText>
              <NavDropdown.ItemText>Long-term Offer</NavDropdown.ItemText>
            </NavDropdown>
            <NavDropdown title="SHOP ALL">
              <NavDropdown.ItemText>Face</NavDropdown.ItemText>
              <NavDropdown.ItemText>Eyes</NavDropdown.ItemText>
              <NavDropdown.ItemText>Lips</NavDropdown.ItemText>
              <NavDropdown.ItemText>Fragrance</NavDropdown.ItemText>
              <NavDropdown.ItemText>Beauty Charms</NavDropdown.ItemText>
              <NavDropdown.ItemText>Accessories & Tools</NavDropdown.ItemText>
            </NavDropdown>
            <Nav.Link>FLAGSHIP STORE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
)

const HeroBanner = () => (
  <Container fluid className="hero-banner d-flex align-items-center justify-content-start text-white">
    <Row>
      <Col>
        <Container className="ps-5">
          <h5 className="normal m-0">NEW LAUNCH</h5>
          <h1 className="fancy m-0">Snow Ballet</h1>
          <h4 className="normal mb-3">Discover the Snow Ballet Collection and receive more</h4>
          <h4 className="normal mb-4">beautiful gifts with your purchase.</h4>
          <Button className="rounded-0 px-5 py-2" variant="light">SHOP NOW</Button>
        </Container>
      </Col>
    </Row>
  </Container>
)

const FooterMenu = () => (
  <footer className="py-5">
    <Container>
      <Row>
        <Col>
          ABOUT FLOWER KNOWS
          <hr/>
          Loyalty Program<br/>
          Brand Story<br/>
          Blog<br/>
          Store Locator<br/>
          Affiliate Program<br/>
          Become a Retailer<br/>
          Global Flagship Store<br/>
          Shanghai<br/>
        </Col>
        <Col>
          CUSTOMER CARE
          <hr/>
          Shipping Policy<br/>
          Refund & Return Policy<br/>
          Promotion Terms & Conditions<br/>
          Privacy Policy<br/>
          Terms and Conditions<br/>
        </Col>
        <Col>
          CUSTOMER SERVICE 
          <hr/>
          Student Discount<br/>
          Track Your Order<br/>
          Help Center<br/>
          Submit a Fake<br/>
        </Col>
        <Col>
          FOLLOW US
          <hr/>
          <ul className="list-unstyled d-flex gap-3 align-items-center">
            <li><Facebook/></li>
            <li><TwitterX/></li>
            <li><Pinterest/></li>
            <li><Instagram/></li>
            <li><Tiktok/></li>
            <li><Youtube/></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default function Home() {
  return (
    <main>
      <TopMenu />
      <MiddleMenu />
      <HeroBanner />
      <FooterMenu />
    </main>
  );
}
import Carousel from 'react-bootstrap/Carousel';
import bannerimage1 from "./assets/banner1.jpg"
import bannerimage2 from "./assets/banner2.png"
import bannerimage3 from "./assets/banner3.webp"



function Home() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img src={bannerimage1} style={{width:"100%", height:"600px"} } text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bannerimage2}  style={{width:"100%", height:"600px"} } text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bannerimage3} style={{width:"100%", height:"600px"} } text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default Home;

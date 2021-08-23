import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Slide() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/219234690_386869352801322_4250261090152196600_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=saeKsuDFBVwAX8WW1xF&_nc_ht=scontent-ort2-2.xx&oh=45bc15b1f3586a53a3e54198cb54b549&oe=61419D2B"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/228955385_383381916483399_5445800686378818015_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=g-Yx3cCV2E4AX9kMubV&_nc_ht=scontent-ort2-2.xx&oh=2372f369c313c470ef9e330d353ecd7d&oe=612FA285"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/222369287_384097983078459_6497722196841793939_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_ohc=aszhUw6PHX0AX_e-Rs8&_nc_ht=scontent-ort2-2.xx&oh=9db2916511595bbd1665472f0098ddfd&oe=61316134"
            alt="img"
          />
        </div>
      </Carousel>
    </div>
  );
}
export default Slide;

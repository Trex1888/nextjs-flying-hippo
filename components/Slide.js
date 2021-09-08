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
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/240672003_403048361183421_5195290588032333497_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=q4yD_ut1OUUAX_Yvbfk&_nc_ht=scontent-ort2-2.xx&oh=2c3dd08b44f754340d4c402557cef34b&oe=615D6715"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/240978039_405675070920750_3817016187657384549_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=axxrie3F7MkAX8q6PHf&_nc_ht=scontent-ort2-2.xx&oh=b00c65a0ac16f83c95941d447f44407b&oe=615F747C"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/237456420_393737275447863_3323295588544016591_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=O4dzu2HJFr8AX_Vvluy&_nc_ht=scontent-ort2-2.xx&oh=a86530fddad1af9ba20f915326b79dea&oe=615E241F"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/240905189_407658934055697_6958935984205405843_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=7LjJYVuib8kAX-H3ehp&_nc_ht=scontent-ort2-2.xx&oh=75e0e5a529cda76a79297a910b521152&oe=615FEB24"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/240648257_407659034055687_4393926933675792112_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=B_WB6KW_yW8AX83Beka&_nc_ht=scontent-ort2-2.xx&oh=bb676cd40804d54dfd6f78f0019aa0a9&oe=615C6552"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/241042792_407658824055708_3726439702043619421_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=bYjlIQfb0VkAX_bLMoK&tn=-f5VCxTChrBb_aro&_nc_ht=scontent-ort2-2.xx&oh=7ccb061e70035c66f080e7fcf34aa0b3&oe=615F1514"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/241520529_408345957320328_6268419291632047383_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Mqucb36cgIkAX_fI_xx&tn=-f5VCxTChrBb_aro&_nc_ht=scontent-ort2-2.xx&oh=ce7a0c8362b2e1a6bff915c0904853a0&oe=615FC5F2"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/236545507_393737245447866_4716373477752320255_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_ohc=jbmd6HbrVGMAX-v1rzi&_nc_ht=scontent-ort2-2.xx&oh=c4d67deedc6affd336fd12c1995dbd4d&oe=615E7581"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/241162607_407658707389053_4641311075005452732_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=MUq5TE5d0ekAX9G7UZH&_nc_ht=scontent-ort2-2.xx&oh=52539e83f20093af8caefc81b1f3138b&oe=615DED22"
            alt="img"
          />
        </div>
      </Carousel>
    </div>
  );
}
export default Slide;

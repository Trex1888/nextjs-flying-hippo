import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import alpine from "../images/alpine19.jpg";
import other from "../images/2017.jpg";
import msg from "../images/msg12.jpg";
import brick from "../images/brick.jpg";

function Peek() {
  return (
    <div className="relative h-[300px] opacity-90">
      <Image loading="lazy" src={brick} layout="fill" objectFit="cover" />
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="text-xl sm:text-4xl text-white font-semibold">
          A PEEK INSIDE
        </h1>
        <p className="text-sm sm:text-2xl text-white mt-4 font-semibold">
          Take a quick tour of our funky new office in the East Village <br />
          and get to know our team.
        </p>
        <Button
          color="red"
          buttonType="filled"
          ripple="light"
          className="px-10 py-4 mt-4 mx-auto"
        >
          PEEK INSIDE
        </Button>
      </div>
    </div>
  );
}

export default Peek;

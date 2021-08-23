import Image from "next/image";
import corn from "../images/corn.jpg";
import { PlayIcon } from "@heroicons/react/outline";

function Story() {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]
  opacity-30"
    >
      <Image src={corn} layout="fill" objectFit="cover" />
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="text-xl sm:text-4xl text-white font-semibold">
          "True Films" Short Stories
        </h1>
        <PlayIcon className="h-24 mx-auto text-white cursor-pointer hover:animate-bounce" />
      </div>
    </div>
  );
}
export default Story;

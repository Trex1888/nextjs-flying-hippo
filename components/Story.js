import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
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

  //     <section className="bg-[#F8F9FA] pb-10 px-10">
  //       <div className="max-w-3xl mx-auto">
  //         <div className="flex items-center justify-between py-6">
  //           <h2 className="text-gray-700 text-lg">Start a new document</h2>

  //           <Button
  //             color="gray"
  //             buttonType="outline"
  //             iconOnly={true}
  //             ripple="dark"
  //             className="border-0"
  //           >
  //             <Icon name="more_vert" size="3xl" />
  //           </Button>
  //         </div>

  //         <div>
  //           <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
  //             <Image src="https://links.papareact.com/pju" layout="fill" />
  //           </div>

  //           <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }
}
export default Story;

import Head from "next/head";
import Header from "../components/Header";
import Peek from "../components/Peek";
import Slide from "../components/Slide";
import Story from "../components/Story";
import Test from "../components/Test";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fly With Hippos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Slide />
      <Test />
      <Peek />
      <Story />
      <main
        className="max-w-12xl mx-auto px-8 sm:px-16 grid grid-flow-row-dense 
       md:grid-cols-2 lg:grid-cols-3 bg-gray-100 py-8"
      >
        <section className="pt-6 px-4">
          <div className="grid items-center md:border-r border-gray-300">
            <h1 className="text-5xl md:mx-auto font-semibold pb-5 text-red-500">
              BROWSE OUR <br />
              SOCIAL MEDIA
            </h1>

            <div className="flex items-center py-4 border-b border-gray-300">
              <PhoneIcon className="share" />
              <h1 className="info">555-555-5555</h1>
            </div>

            <div className="flex items-center py-4 border-b border-gray-300">
              <MailIcon className="share" />
              <h1 className="info">email@email.com</h1>
            </div>

            <div className="flex items-center py-4 border-b border-gray-300">
              <LocationMarkerIcon className="share" />
              <h1 className="info">
                555 Sugar Blvd <br /> Anywhere, USA <br /> 55555
              </h1>
            </div>

            <div className="flex items-center mt-8 mb-8">
              <ShareIcon className="share" />
              <div className="flex items-center h-12">
                <AiOutlineFacebook className="social" />
                <AiOutlineTwitter className="social" />
                <AiOutlineInstagram className="social" />
                <AiOutlineLinkedin className="social" />
              </div>
            </div>

            <button
              className="py-1 items-center text-red-500 bg-transparent border-red-500 border rounded-md 
             hover:text-black hover:border-black font-semibold mb-10 mr-6"
            >
              LET'S TALK BRASS TACKS OFFLINE
            </button>
          </div>
        </section>

        <section className="pt-6 px-4">
          <div className="grid items-center md:border-r border-gray-300">
            <h1 className="text-5xl mx-auto font-semibold pb-5 text-red-500 mb-5">
              OUR BLOGS
            </h1>

            <div className="flex items-center py-4 border-b border-gray-300">
              <img
                className="h-32 w-44 mr-6"
                src="https://assets.entrepreneur.com/content/3x2/1300/1403032155-5-secrets-creating-impactful-brand.jpg"
                alt="img"
              />
              <h1 className="blog">
                Business of Brand: Why Brand Personality Is Critical For Your
                Company?
              </h1>
            </div>

            <div className="flex items-center py-4 border-b border-gray-300">
              <img
                className="h-32 w-44 mr-6"
                src="https://tse4.mm.bing.net/th?id=OIP.SNj2rpuhlLkQsJa_xw9jXQHaE7&pid=Api&P=0&w=233&h=156"
                alt="img"
              />
              <h1 className="blog">
                Business of Brand: You’ve Built A Great Business. Now Build A
                Great Brand.
              </h1>
            </div>

            <div className="flex items-center py-3">
              <img
                className="h-33 w-44 mr-6"
                src="https://www.designwizard.com/wp-content/uploads/2020/11/0c46dc20-2431-11eb-a8bc-e9300bcf72ad.jpg"
                alt="img"
              />
              <h1 className="blog">
                Business of Brand: How Much Is a Rebrand? Earn Money on the Back
                End.
              </h1>
            </div>

            <button
              className="py-1 items-center text-red-500 bg-transparent border-red-500 border rounded-md 
             hover:text-black hover:border-black font-semibold mb-10 mr-8 mt-5"
            >
              CHECK OUT OUR AWESOME BLOGS
            </button>
          </div>
        </section>

        <section className="pt-5 px-4">
          <div className="grid items-center">
            <div className="flex px-2">
              <img
                className="h-20 text-center lg:ml-6"
                src="https://webstockreview.net/images/clipart-hippo-purple-4.png"
                alt="img"
              />
              <h1 className="text-5xl text-center font-semibold pb-6 text-red-500">
                HIP AND NERDY
              </h1>
            </div>

            <h1 className="text-gray-500">
              We Fly With Hippos is a one-of-a-kind breed of branding and
              digital agency. We are hip–our branding and creative teams have
              consistently produced internationally award-winning creative work
              for our clients. And, yes, we’re off-the-charts nerds as well–and
              proud of it. Our nerd team consists of some of the brightest
              programmers and digital strategists around to make sure that all
              of that exceptional creative work not only looks great, but
              functions just as well. <br /> <br /> We provide a top-notch team
              of branding experts, certified HubSpot/inbound strategists,
              award-winning creatives, and true-blue nerds to help grow your
              business, you’ve come to the right place. You won't be
              disappointed! <br /> <br />© Copyright Nextjs FTW. All Rights
              Reserved.
            </h1>
            <button
              className="py-1 items-center text-red-500 bg-transparent border-red-500 border rounded-md 
             hover:text-black hover:border-black font-semibold mr-8 mt-5 xl:mt-28"
            >
              LEARN MORE ABOUT OUR COMPANY
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

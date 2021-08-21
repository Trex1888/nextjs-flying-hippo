function Test() {
  return (
    <section className="bg-[#F8F9FA] pb-20 pt-20 px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="mx-auto items-center h-10 text-4xl text-semibold z-30">
          TESTIMONIALS
        </h1>

        <h2 className="text-2xl italic my-5">
          WE PREFER TO LET OUR CLIENTS DO THE TALKING
        </h2>

        {/* <div className="flex space-x-4 md:space-x-48 mx-auto mt-8 items-center max-w-3xl"> */}
        <div className="grid">
          <div className="grid grid-cols-2 lg:inline-flex px-2 items-center">
            <img
              className="h-32 rounded-full cursor-pointer hover:animate-pulse"
              src="https://www.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg"
              alt="img"
            />
            <h2 className="text-lg text-red-400 px-2">COOL CALVIN</h2>

            <img
              className="h-32 rounded-full my-1 cursor-pointer hover:animate-pulse"
              src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
              alt="img"
            />
            <h2 className="text-lg text-red-400 px-2">AWESOME ASHLEY</h2>

            <img
              className="h-32 rounded-full my-1 cursor-pointer hover:animate-pulse"
              src="https://vectorified.com/images/business-avatar-icon-11.png"
              alt="img"
            />
            <h2 className="text-lg text-red-400 px-2">MAD MAX</h2>

            <img
              className="h-32 rounded-full cursor-pointer hover:animate-pulse"
              src="https://avatarfiles.alphacoders.com/791/79102.png"
              alt="img"
            />
            <h2 className="text-lg text-red-400 px-2">SUPER SALLY</h2>
            {/* <img
              className="h-32 rounded-full"
              src="https://avatarfiles.alphacoders.com/791/79102.png"
              alt="img"
            />
            <h2 className="px-2 ml-3 text-lg text-red-400 lg:ml-0">
              SUPER SALLY
            </h2>
            <img
              className="h-32 rounded-full"
              src="https://avatarfiles.alphacoders.com/791/79102.png"
              alt="img"
            />
            <h2 className="px-2 ml-3 text-lg text-red-400 lg:ml-0">
              SUPER SALLY
            </h2>
            <img
              className="h-32 rounded-full"
              src="https://avatarfiles.alphacoders.com/791/79102.png"
              alt="img"
            />
            <h2 className="px-2 ml-3 text-lg text-red-400 lg:ml-0">
              SUPER SALLY
            </h2>
            <img
              className="h-32 rounded-full"
              src="https://avatarfiles.alphacoders.com/791/79102.png"
              alt="img"
            />
            <h2 className="px-2 ml-3 text-lg text-red-400 lg:ml-0">
              SUPER SALLY
            </h2> */}
          </div>
        </div>

        {/* <div>
            <img
              className="h-32 rounded-full"
              src="https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_640.png"
              alt="img"
            />
            <h2 className="px-2 md:ml-8">MAD MAX</h2>
          </div> */}

        <div>
          {/* <img
              className="h-32 rounded-full"
              src="https://media.istockphoto.com/vectors/woman-avatar-with-smiling-face-female-cartoon-character-businesswoman-vector-id991355454?k=6&m=991355454&s=170667a&w=0&h=rhgTehkfUYrHtGf_HIiSgm6NNtae7VsH6bDQTqvYg9U="
              alt="img"
            />
            <h2 className="px-2 md:ml-8">SUPER SALLY</h2>
          </div> */}
        </div>

        <div className="flex space-x-16 md:space-x-60"></div>
      </div>
    </section>
  );
}

export default Test;

function Info() {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      <div className="relative items-center h-10 cursor-pointer my-auto">
        <h2 className="text-4xl font-semibold pb-5">Exploreearby</h2>
        <h1 className="border-b">555-555-5555</h1>
        <h1>emailus@555.com</h1>
        <h1>555 East 555 St #555</h1>
        <p>social media</p>
        <button>Click me</button>
      </div>
      <div className=" items-center h-10 cursor-pointer my-auto">
        <h2 className="text-4xl font-semibold pb-5">Explore earby</h2>
        <h1 className="border-b">555-555-5555</h1>
        <h1>emailus@555.com</h1>
        <h1>555 East 555 St #555</h1>
        <p>social media</p>
        <button>Click me</button>
      </div>
      <div className=" items-center h-10 cursor-pointer my-auto">
        <h2 className="text-4xl font-semibold pb-5">Explore Jearby</h2>
        <h1 className="border-b">555-555-5555</h1>
        <h1>emailus@555.com</h1>
        <h1>555 East 555 St #555</h1>
        <p>social media</p>
        <button>Click me</button>
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm 
          text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start Your Search..."
        />

        {/* className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full
           p-2 cursor-pointer md:mx-2" */}
      </div>

      <div>div3</div>
    </div>
  );
}
export default Info;

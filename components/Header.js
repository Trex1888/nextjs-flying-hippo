import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <header className="flex items-center sticky top-0 z-50 px-4 shadow-md bg-white">
      <img
        loading="lazy"
        className=" md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2"
        src="https://cdn1.iconfinder.com/data/icons/animal-and-birds-1/48/56-512.png"
        alt="img"
      />
      <h1 className="hidden md:inline-flex md:mr-auto mx-2 text-sm font-bold italic">
        Try counting hippos...
      </h1>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0 md:hidden"
      >
        <Icon name="menu" size="3xl" />
      </Button>

      <nav className="hidden md:inline-flex flex-grow py-4 px-2 items-center font-bold text-xl ml-56 cursor-pointer">
        <ul className="nav1">WORK</ul>
        <Button
          color="black"
          buttonType="outline"
          iconOnly={true}
          className="flip"
        >
          <Icon name="expand_more" size="3xl" />
        </Button>

        <ul className="nav1">SERVICES</ul>
        <Button
          color="black"
          buttonType="outline"
          iconOnly={true}
          className="flip"
        >
          <Icon name="expand_more" size="3xl" />
        </Button>

        <ul className="nav2">BLOG</ul>

        <ul className="nav2">COMPANY</ul>

        <ul className="hidden lg:inline-flex transition transform duration-200 ease-out hover:text-red-700 hover:animate-pulse">
          CONTACT
        </ul>
        <Button
          color="black"
          buttonType="outline"
          iconOnly={true}
          className="hidden lg:inline-flex border-0 mr-5 hover:rotate-180 hover:text-red-700"
        >
          <Icon name="expand_more" size="3xl" />
        </Button>
      </nav>

      <Button
        color="red"
        buttonType="filled"
        ripple="light"
        className="w-44 h-12 ml-auto"
      >
        Lets Chat
      </Button>
    </header>
  );
}

export default Header;

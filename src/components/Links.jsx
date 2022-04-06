import { Link } from "react-router-dom";

const Links = ({ handleActive, active }) => {
  return (
    <>
      <Link
        to='/'
        onClick={handleActive}
        id='home'
        className={
          active === "home" ? "px-2 pb-4 border-b-8 border-orange-500" : "px-2"
        }
      >
        Home
      </Link>
      <Link
        to='work'
        onClick={handleActive}
        id='work'
        className={
          active === "work" ? "px-2 pb-4 border-b-8 border-orange-500" : "px-2"
        }
      >
        Work
      </Link>
      <Link
        to='skills'
        onClick={handleActive}
        id='skills'
        className={
          active === "skills"
            ? "px-2 pb-4 border-b-8 border-orange-500"
            : "px-2"
        }
      >
        Skills
      </Link>
      <Link
        to='contact'
        onClick={handleActive}
        id='contact'
        className={
          active === "contact"
            ? "px-2 pb-4 border-b-8 border-orange-500"
            : "px-2"
        }
      >
        Contact Me
      </Link>
    </>
  );
};

export default Links;

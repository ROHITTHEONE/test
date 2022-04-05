import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='work'>Work</Link>
      <Link to='skills'>Skills</Link>
      <Link to='contact'>Contact Me</Link>
    </>
  );
};

export default Links;

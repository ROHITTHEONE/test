import compLogo from "../assets/comp-logo.png";
import cssLogo from "../assets/css-logo.png";
import responsiveLogo from "../assets/responsive-logo.png";
import figmaLogo from "../assets/figma-logo.svg";
import Card from "../components/Card";

const works = [
  {
    title: "UX Case Study",
    desc: "A collection of projects with user research, wireframes and prototypes.",
    img: compLogo,
  },
  {
    title: "CSS Art",
    desc: "This project contains a list of illustrations that I have made using pure HTML and CSS",
    img: cssLogo,
  },
  {
    title: "UI Designs",
    desc: "Here’s a list of illustrations that I have made completey in Figma.",
    img: responsiveLogo,
  },
  {
    title: "Illustration",
    desc: "A list of UI designes for both app and website. Designed in Figma.",
    img: figmaLogo,
  },
];

const Work = () => {
  return (
    <div className='px-8 py-8 space-y-16 bg-gray-900 text-white'>
      <div className='text-2xl font-bold'>
        {" "}
        <span className='border-b-4 border-orange-500'>Wo</span>rk
      </div>
      <div className='space-y-6'>
        {works.map((work, id) => (
          <Card key={id} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Work;

import Bar from "../components/Bar";

const skills = [
  {
    name: "Figma",
    value: "w-[90%]",
  },
  {
    name: "Framer",
    value: "w-[80%]",
  },
  {
    name: "Adobe XD",
    value: "w-[70%]",
  },
  {
    name: "Balsamiq",
    value: "w-[95%]",
  },
];

const Skills = () => {
  return (
    <div className='py-16 px-8 bg-black text-white'>
      <div className='font-bold text-2xl mb-12'>
        <span className='border-b-4 border-orange-500'>Sk</span>ills
      </div>
      {skills.map((skill, id) => {
        return <Bar key={id} skill={skill} />;
      })}
    </div>
  );
};

export default Skills;

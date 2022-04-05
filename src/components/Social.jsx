import linkedIn from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";

const Social = () => {
  return (
    <div className='flex space-x-6 justify-center my-4'>
      <img className='w-auto h-10' src={twitter} alt='Twitter Link' />
      <img className='w-auto h-10' src={linkedIn} alt='Linkedin Link' />
      <img className='w-auto h-10' src={github} alt='Github Link' />
    </div>
  );
};

export default Social;

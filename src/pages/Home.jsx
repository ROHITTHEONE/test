import face from "../assets/face.png";
import Button from "../components/Button";
import Work from "./Work";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className='bg-black text-white'>
      <div className='py-24 px-7 mb-16'>
        <img
          src={face}
          alt="Painting of a girl's face"
          className='w-auto h-40 mx-auto'
        />
        <div className='mt-6'>
          <div className='text-center font-bold text-2xl'>Hi,</div>
          <div className='text-center font-bold text-2xl'>
            My name is Saniya Mirza
          </div>
          <div className='mt-4'>
            I am a self taught UI/UX Designer. I currenlty work as a freelancer
            UI Designer and illustrator. I aim to simplify the overall process
            as a UX Designer in order to construct better and more practical
            user interfaces.
          </div>
          <div className='text-center mt-6'>
            <Button title={"Contact Me"} />
          </div>
        </div>
      </div>
      <Work />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;

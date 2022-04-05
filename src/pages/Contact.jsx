import Form from "../components/Form";
import Social from "../components/Social";

const Contact = () => {
  return (
    <div className='py-16 px-8 bg-gray-900 text-white'>
      <div className='font-bold text-2xl mb-12'>
        <span className='border-b-4 border-orange-500'>Co</span>ntact Me
      </div>
      <div className='text-center'>
        <div className='text-xl font-semibold'>Say Hi!</div>
        <div>Contact me through an email or via any one the network below</div>
        <Social />
      </div>
      <Form />
    </div>
  );
};

export default Contact;

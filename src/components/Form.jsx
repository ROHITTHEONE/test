import Button from "./Button";

const Form = () => {
  return (
    <div className='mt-10 w-full bg-black p-8 pb-12 md:px-14'>
      <div>
        <input
          className='border-b-2 border-orange-500  bg-transparent outline-none w-full mb-6 text-sm'
          type='text'
          placeholder='Name'
        />
      </div>
      <div>
        <input
          className='border-b-2 border-orange-500 bg-transparent outline-none w-full mb-6 text-sm'
          type='email'
          placeholder='Email'
        />
      </div>
      <div>
        <input
          className='border-b-2 border-orange-500 bg-transparent outline-none w-full mb-6 text-sm'
          type='text'
          placeholder='Subject'
        />
      </div>
      <div>
        <textarea
          className='border-b-2 border-orange-500 bg-transparent outline-none w-full mb-6 text-sm'
          cols='30'
          rows='10'
          placeholder='Message'
        ></textarea>
      </div>
      <div className='text-center'>
        <Button title={"Send Message"} />
      </div>
    </div>
  );
};

export default Form;

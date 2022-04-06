import dogGif from "../assets/dog.png";

const Error = () => {
  return (
    <div className='mt-16'>
      <div className='max-w-xl mx-auto'>
        <img
          src={dogGif}
          alt='Gif preview of the work'
          className='w-full mx-auto'
        />
      </div>
    </div>
  );
};

export default Error;

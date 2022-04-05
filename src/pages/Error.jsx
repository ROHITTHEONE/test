import dogGif from "../assets/dog.gif";

const Error = () => {
  return (
    <div className='mt-16'>
      <div className='max-w-xl mx-auto'>
        <img
          src={dogGif}
          alt='Gif preview of the work'
          className='w-auto h-72 mx-auto'
        />
      </div>
    </div>
  );
};

export default Error;

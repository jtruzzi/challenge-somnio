const ErrorMessage = () => {
  return (
    <div className="text-center text-red-500 my-4 mt-20">
      <b className="text-xl">Error fetching products.</b> <br />
      <span className="text-l">Please try again later.</span>
    </div>
  );
};

export default ErrorMessage;

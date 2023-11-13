import Spinner from "../assets/Spinner.svg";
const Loading = () => {
  return (
    <>
      <div className="container min-h-screen flex col-span-6 offset-3 justify-center items-center">
        <h1 className="text-xl">
          <img src={Spinner} />
        </h1>
      </div>
    </>
  );
};

export default Loading;

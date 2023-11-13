import spinnerURL from "../assets/Spinner.svg";

const Spinner = () => {
  return <img src={spinnerURL} alt="Spinner" />;
};

const Loading = () => {
  return (
    <div
      data-testid="loading-component"
      className="container min-h-screen flex col-span-6 offset-3 justify-center items-center"
    >
      <Spinner />
    </div>
  );
};

export default Loading;

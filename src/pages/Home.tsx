import Loading from "../components/Loading";
import { useDashboardsContext } from "../context/DashboardsContext";
import Card from "../components/Card";
import Filter from "../components/Filter";

const Home = () => {
  const { isLoading, serverError, FilterDashboardList } =
    useDashboardsContext();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  } else if (serverError) {
    return <>{serverError}</>;
  } else {
    return (
      <>
        <div className="container my-24" data-testid="main-container">
          <div className="flex flex-col justify-center items-center  mx-auto ">
            <div className="flex justify-between mb-10 space-y-4 w-9/12 md:w-6/12">
              <h1 className="text-2xl font-bold" data-testid="title">
                Dashboards
              </h1>
              <Filter />
            </div>
            <div className="space-y-4 w-9/12 md:w-6/12 shadow-2xl px-5">
              {FilterDashboardList &&
                FilterDashboardList.map((item, index: number) => (
                  <Card key={index} dashItem={item} index={index} />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Home;

import { useState } from "react";
import { Dashboard, DashboardItem } from "../utils/dashboardsTypes";
import { FaAngleUp, FaMap, FaStar } from "react-icons/fa";
import { useDashboardsContext } from "../context/DashboardsContext";
import IconList from "./IconList";

declare type ProbsItem = {
  dashItem: Dashboard;
  index: number;
};

const Card = ({ dashItem, index }: ProbsItem) => {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const { starDashBoard } = useDashboardsContext();

  const toggleCard = (cardNumber: number) => {
    setActiveCard((prevActiveCard) =>
      prevActiveCard === cardNumber ? null : cardNumber
    );
  };

  const isCardActive = (cardNumber: number) => {
    return activeCard === cardNumber;
  };

  const toggleStar = () => starDashBoard(dashItem.id);

  return (
    <>
      <div className="  rounded p-4 flex justify-between">
        <div className="flex gap-x-4">
          <button
            className={`flex items-center justify-center focus:outline-none ${
              dashItem.starred ? "text-yellow-500" : "text-gray-500"
            }`}
            onClick={toggleStar}
          >
            <FaStar size={24} />
          </button>
          <h3 className="text-lg font-semibold">{dashItem.displayName}</h3>
        </div>

        <button
          className="flex items-center justify-center w-6 h-6 focus:outline-none"
          onClick={() => toggleCard(index)}
        >
          <FaAngleUp
            size={24}
            className={`h-6 w-6 transition-all duration-500 ${
              isCardActive(index) ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {isCardActive(index) && (
        <div className="border-b-4 border-b-main-color rounded p-4">
          <ul>
            {dashItem.dashboardDetail?.dashboardItems?.map(
              (dash: DashboardItem) => (
                <div
                  className="flex gap-5 hover:border-l-4 hover:border-l-main-color  hover:cursor-pointer hover:text-main-color justify-start items-center p-3 "
                  key={dash.id}
                >
                  {dash.visualization && (
                    <>
                      <IconList type={dash.visualization?.type} />
                      <h4>{dash.visualization?.name}</h4>
                    </>
                  )}

                  {dash.map && (
                    <>
                      <FaMap />
                      <h4>{dash.map.name}</h4>
                    </>
                  )}

                  {dash.text && <h4>- {dash.text}</h4>}
                </div>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Card;

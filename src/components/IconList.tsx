import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import { BsGraphUp, BsFillBarChartLineFill } from "react-icons/bs";

interface IconListProbdType {
  type: string | undefined;
}

const IconList = ({ type }: IconListProbdType) => {
  switch (type) {
    case "COLUMN":
      return <BsFillBarChartLineFill />;
    case "YEAR_OVER_YEAR_LINE":
      return <BsGraphUp />;
    case "LINE":
      return <FaChartLine />;
    case "PIE":
      return <FaChartPie />;
    case "STACKED_COLUMN":
      return <FaChartBar />;

    default:
      return null;
  }
};

export default IconList;

import { useDashboardsContext } from "../context/DashboardsContext";

const Filter = () => {
  const { FliterDashboards } = useDashboardsContext();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    FliterDashboards(selectedValue);
  };

  return (
    <>
      <select
        id="select-type"
        className="w-40 px-4 py-2 border-b-4 border-b-main-color   focus:outline-none   "
        onChange={handleSelectChange}
      >
        <option value="">Select type</option>
        <option value="visualization">Visual</option>
        <option value="map">Map</option>
        <option value="text">Text</option>
      </select>
    </>
  );
};

export default Filter;

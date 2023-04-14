import { useState } from "react";
import { getAllUsers } from "../../api/FirestoreAPI";
import { useDispatch } from "react-redux";

const SearchFilter = ({ onToggle }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  const checkboxLabels = [
    { name: "World Needs", key: "ikigai.what_the_world_needs.world" },
    { name: "Personal Needs", key: "ikigai.what_the_world_needs.you" },
    { name: "Community Needs", key: "ikigai.what_the_world_needs.community" },
    { name: "Expertise", key: "ikigai.what_are_you_good_at.expertise" },
    { name: "Knowledge", key: "ikigai.what_are_you_good_at.knowledge" },
    { name: "Skills", key: "ikigai.what_are_you_good_at.skills" },
    { name: "Hobbies", key: "ikigai.what_do_you_love.hobbies" },
    { name: "Interests", key: "ikigai.what_do_you_love.interests" },
    { name: "Values", key: "ikigai.what_do_you_love.values" },
  ];

  const toggleForm = () => {
    setShowForm(!showForm);
    onToggle();
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [checkboxStates, setCheckboxStates] = useState(
    checkboxLabels.reduce((acc, { key }) => {
      acc[key] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (event) => {
    const key = event.target.name;
    const isChecked = event.target.checked;

    setCheckboxStates({ ...checkboxStates, [key]: isChecked });

    if (isChecked) {
      setSelectedFilters([...selectedFilters, key]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== key));
    }
  };

  const applyFilter = () => {
    getAllUsers(dispatch, searchTerm, selectedFilters);
    console.log(selectedFilters);
  };

  const resetFilter = () => {
    setSearchTerm("");
    setSelectedFilters([]);

    // Reset checkbox states
    setCheckboxStates(
      Object.keys(checkboxStates).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {})
    );

    getAllUsers(dispatch);
  };

  return (
    <div className="relative">
      <button
        className="text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded mb-4 ml-4"
        onClick={toggleForm}
      >
        Ikigai Filter
      </button>
      {showForm && (
        <div className="absolute bg-white shadow-md rounded-lg p-2.5 w-[600px] m-auto">
          <div className="mb-2">
            <input
              className="border border-gray-300 rounded py-2 px-4 w-full"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {checkboxLabels.map(({ name, key }) => (
              <div key={key}>
                <input
                  className="mr-2"
                  type="checkbox"
                  id={key}
                  name={key}
                  checked={checkboxStates[key]}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={key}>{name}</label>
              </div>
            ))}
          </div>
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded mt-4"
            onClick={applyFilter}
          >
            Apply Filter
          </button>

          <button
            className="text-white bg-red-500 hover:bg-red-600 font-medium py-2 px-4 rounded mt-4 ml-4"
            onClick={resetFilter}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;

import { useState } from "react";
import useUpdateCtaData from "../../hooks/updateCtaData";

const EditCtaForm = ({ cta, onClose }) => {
  console.log("cta prop:", cta);
  const [editedCta, setEditedCta] = useState(cta);
  const { updateCtaData } = useUpdateCtaData();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCta({ ...editedCta, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call function to update the data with the edited CTA
    updateCtaData(editedCta);
    onClose();
  };

  return (
    <div className="edit-cta-form-overlay">
      <div
        className="container mx-auto max-w-screen-md "
        style={{ width: "650px" }}
      >
        <div className="edit-cta-form-wrapper">
          <form onSubmit={handleFormSubmit} className="mx-auto max-w-screen-md">
            <div className="flex flex-wrap -mx-3 mb-6 ">
              <label
                htmlFor="name"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                name="name"
                type="text"
                value={editedCta.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <label
                htmlFor="resources"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Resources
              </label>
              <textarea
                className="appearance-none block w-full h-27 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="resources"
                name="resources"
                value={editedCta.resources}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <label
                htmlFor="description"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Description
              </label>
              <textarea
                className="appearance-none block w-full h-27 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="description"
                name="description"
                value={editedCta.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <label
                htmlFor="outcome"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Outcome
              </label>
              <textarea
                className="appearance-none block w-full h-27 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="outcome"
                name="outcome"
                value={editedCta.outcome}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <label
                htmlFor="successCriteria"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Success Criteria
              </label>
              <textarea
                className="appearance-none block w-full h-27 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="successCriteria"
                name="successCriteria"
                value={editedCta.successCriteria}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>

              <button
                type="button"
                onClick={onClose}
                className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCtaForm;

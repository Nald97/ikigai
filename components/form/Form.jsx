import React, { useState } from "react";
import usePostCtaData from "../../hooks/postCtaData";

const Form = () => {
  const [name, setName] = useState("");
  const [resources, setResources] = useState("");
  const [description, setDescription] = useState("");
  const [outcome, setOutcome] = useState("");
  const [successCriteria, setSuccessCriteria] = useState("");

  const { ctaData, postData } = usePostCtaData();
  const [formData, setFormData] = useState({
    name: "",
    resources: "",
    description: "",
    outcome: "",
    successCriteria: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
    setFormData({
      name: "",
      resources: "",
      description: "",
      outcome: "",
      successCriteria: "",
    });
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div
      className="container mx-auto max-w-screen-md "
      style={{ width: "650px" }}
    >
      <form onSubmit={handleSubmit} className="mx-auto max-w-screen-md">
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
            value={formData.name}
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
            className="appearance-none block w-full h-22 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="resources"
            name="resources"
            value={formData.resources}
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
            className="appearance-none block w-full h-32 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="description"
            name="description"
            value={formData.description}
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
            className="appearance-none block w-full h-22 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="outcome"
            name="outcome"
            value={formData.outcome}
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
            className="appearance-none block w-full h-22 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="successCriteria"
            name="successCriteria"
            value={formData.successCriteria}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [resources, setResources] = useState("");
  const [description, setDescription] = useState("");
  const [outcome, setOutcome] = useState("");
  const [successCriteria, setSuccessCriteria] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
            id="title"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={resources}
            onChange={(e) => setResources(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
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
            value={successCriteria}
            onChange={(e) => setSuccessCriteria(e.target.value)}
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

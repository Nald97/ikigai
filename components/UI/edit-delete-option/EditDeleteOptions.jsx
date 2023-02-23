import React, { useState } from "react";
import EditForm from "../../form/EditForm";

function EditDeleteOptions({ onDelete, onEditFormOpen, ctaKey, index }) {
  const handleDelete = () => {
    onDelete(ctaKey);
  };
  const handleEdit = () => {
    console.log("Edit button clicked");
    onEditFormOpen(index);
  };


  return (
    <div className="edit-delete-options">
      <button onClick={handleEdit}>Edit</button>
      
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EditDeleteOptions;

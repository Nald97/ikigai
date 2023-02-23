import React from "react";

function EditDeleteOptions({ onDelete, onEdit, ctaKey }) {
  const handleDelete = () => {
    onDelete(ctaKey);
  };

  return (
    <div className="edit-delete-options">
      <button onClick={onEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EditDeleteOptions;

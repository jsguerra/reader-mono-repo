import React, { useState } from "react";

interface DeleteButtonProps {
  endPoint: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ endPoint }) => {
  const [responseMessage, setResponseMessage] = useState("");

  async function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const response = await fetch(endPoint, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("function triggered");
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <>
      <button className="btn" onClick={handleDelete}>Delete</button>
      {responseMessage && <p>{responseMessage}</p>}
    </>
  );
};

export default DeleteButton;

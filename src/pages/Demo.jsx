import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Demo = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleRemove = (contact) => {
    dispatch({ type: "REMOVE_CONTACT", payload: contact });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact List</h1>
      <div className=" mb-4">
        <Link to="/single">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>

      {store.contacts.length === 0 ? (
        <p className="text-center">No contacts added yet.</p>
      ) : (
        <ul className="list-group shadow-sm rounded">
          {store.contacts.map((contact, index) => (
            <li className="list-group-item" key={index}>
              <div className="d-flex align-items-start">
                <img
                  src="https://media.istockphoto.com/id/2006436002/video/happy-confident-and-portrait-of-indian-man-in-office-with-creative-professional-at-tech.jpg?s=640x640&k=20&c=vcKAWd0sGJpV3xR0AK1RCM7zTEpFUcBhQEXbNvN1M78="
                  alt={contact.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    flexShrink: 0
                  }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80";
                  }}
                />
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">{contact.name}</h5>
                  <p className="mb-1">
                    <i className="fas fa-map-marker-alt me-2 text-muted"></i>
                    {contact.address}
                  </p>
                  <p className="mb-1">
                    <i className="fas fa-phone me-2 text-muted"></i>
                    {contact.phone}
                  </p>
                  <p className="mb-1">
                    <i className="fas fa-envelope me-2 text-muted"></i>
                    {contact.email}
                  </p>
                </div>
                <div className="text-end">
                  <Link
                    to={`/edit/${contact.id}`}
                    className="btn btn-outline-dark btn-sm me-2"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemove(contact)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

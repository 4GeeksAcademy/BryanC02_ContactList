import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    if (id) {
      const contact = store.contacts.find(c => c.id.toString() === id);
      if (contact) setFormData(contact);
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (id) {
      dispatch({ type: "UPDATE_CONTACT", payload: formData });
    } else {
      dispatch({ type: "ADD_CONTACT", payload: { ...formData, id: Date.now() } });
    }
    navigate("/");
  };

  return (
    <div className="container text-center">
      <h2>{id ? "Edit Contact" : "Add a new contact"}</h2>
      <input className="form-control my-2" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
      <input className="form-control my-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input className="form-control my-2" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input className="form-control my-2" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <button className="btn btn-primary w-100 mt-2" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};
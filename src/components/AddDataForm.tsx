import React, { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../config/firebase"; // Adjust the path based on your project structure

const AddDataForm: React.FC = () => {
  const [data, setData] = useState({
    // Define the data fields you want to add
    name: "",
    age: 0,
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "Data"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Data</button>
    </form>
  );
};

export default AddDataForm;

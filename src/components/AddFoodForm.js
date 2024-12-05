import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ onAddFood }) {
  // State to store form inputs
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!form.name || !form.image || !form.calories || !form.servings) {
      alert('Please fill all the fields');
      return;
    }

    // Pass the new food object to the parent
    onAddFood({
      name: form.name,
      image: form.image,
      calories: Number(form.calories),
      servings: Number(form.servings),
    });

    // Reset form fields
    setForm({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Food</h2>

      <label>Name:</label>
      <Input
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
        placeholder="Enter food name"
      />

      <label>Image:</label>
      <Input
        name="image"
        value={form.image}
        type="text"
        onChange={handleChange}
        placeholder="Enter image URL"
      />

      <label>Calories:</label>
      <Input
        name="calories"
        value={form.calories}
        type="number"
        onChange={handleChange}
        placeholder="Enter calories"
      />

      <label>Servings:</label>
      <Input
        name="servings"
        value={form.servings}
        type="number"
        onChange={handleChange}
        placeholder="Enter servings"
      />

      <Button type="primary" htmlType="submit" style={{ marginTop: '10px' }}>
        Add Food
      </Button>
    </form>
  );
}

export default AddFoodForm;
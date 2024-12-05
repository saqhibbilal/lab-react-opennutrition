import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods); // Full list of foods
  const [searchTerm, setSearchTerm] = useState(''); // Search query state

  // Function to add new food
  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  // Function to update the search term
  const handleSearch = (query) => {
    setSearchTerm(query.toLowerCase());
  };

  // Function to delete a food item
  const handleDelete = (foodName) => {
    const updatedFoodList = foodList.filter((food) => food.name !== foodName);
    setFoodList(updatedFoodList);
  };

  // Filter the food list based on the search term
  const filteredFoodList = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Food List</h1>

      {/* Render Search Component */}
      <Search handleSearch={handleSearch} />

      {/* Render AddFoodForm */}
      <AddFoodForm onAddFood={handleAddFood} />

      {/* Render FoodBox Components */}
      <div>
        {filteredFoodList.map((food, index) => (
          <FoodBox key={index} food={food} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { Input } from 'antd';

function Search({ handleSearch }) {
  // Handle input change and pass the value to the parent
  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Search</h2>
      <Input
        type="text"
        placeholder="Search food items"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
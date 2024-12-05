import React from 'react'
import { Card, Col, Button } from 'antd';
const FoodBox = (props,handleDelete) => {
  return (
    <Col>
    <Card
      title={props.food.name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={props.food.image} height={60} alt="props.food" />
      <p>{props.food.calories}</p>
      <p>{props.food.servings}</p>
      <p>
        <b>Total Calories: {props.food.calories*props.food.servings} * FOOD_SERVINGS </b> kcal
      </p>
      <Button
        type="primary"
        danger
        onClick={() => handleDelete(props.food.name)}
        style={{ marginTop: '10px' }}
      >
        Delete
      </Button>
    </Card>
  </Col>
  )
}

export default FoodBox;
import React from 'react';
import Card from './Card';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

export default function Display() {
  return (
    <div>
        // TODO: Write logic that will render a Card component for the kitten
        // TODO: Pass `name`, `description`, and `id` to the Card component as props
        //shorthand for <card></card>

    <Card name={feline.name} id={feline.descrption} description={feline.description}/>
    
    </div>
  );
}

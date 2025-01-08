import React from 'react';
import './Categories.css';
import Card from './Card';
import { items } from './items';
import { createKey } from './createKey';

const Categories = () => {
  return (
    <div>
          {items.map((item) => {
            const cardKey = createKey();
            return (
              <Card
                key={cardKey}
                image={item.image}
                title={item.title}
                description={item.description}
                cardBackground={item.cardBackground}
                url={item.url}
              />
            );
          })}

    </div>
  );
};

export default Categories;

import React from 'react';
import './Categories.css';
import { items } from './items';
import { createKey } from './createKey';
import Card from './Card';

const Categories = () => {
  return (
    <div className="roleSection-categories">
      <div className="container-categories">
        <div className="content-categories">
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
    </div>
    </div>
  );
};

export default Categories;

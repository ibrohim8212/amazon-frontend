import React from 'react';
import c from "./Main.module.css";
import { Container } from '../../utils';
import MainCard from '../main-card/MainCard';
import allCards from '../../dummy-under-data.json'
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  return (
    <Container>
        <div className={c.wrapper}>
            {
              allCards.map(cardItem =>
                {
                  if(cardItem.cardImages){
                   return <MainCard 
                      key={uuidv4()}
                      cardImages={cardItem.cardImages}
                      title={cardItem.title} 
                      linkURL={cardItem.linkURL} 
                      linkText={cardItem.linkLabel}
                    />  
                  }
                  return <MainCard 
                      key={uuidv4()}
                      image={cardItem.cardImage} 
                      title={cardItem.title} 
                      linkURL={cardItem.linkURL} 
                      linkText={cardItem.linkLabel}
                    />  
                }
              )
            }
        </div>
    </Container>
  )
}

export default Main
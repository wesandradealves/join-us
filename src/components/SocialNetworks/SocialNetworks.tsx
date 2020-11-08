import React, { useEffect, useState, InputHTMLAttributes } from 'react';

import {
  Link,
} from "react-router-dom";

import {
  Container,
  Item,
} from './SocialNetworks.styles';

interface ISocialNetworks extends InputHTMLAttributes<HTMLInputElement> {
  data?: any;
}

export const SocialNetworks: React.FC<ISocialNetworks> = ({ data }) => {
	const itemsRender = () => {
    return data.map((o:any, index:number) => {
			return (
        <Item key={index}>
          <a target="_blank" href={o.url}>
            <span className={`fab fa-${o.class}`}></span>
          </a>
        </Item>        
			);
		});
  };  
    
  return (
    <Container className="socialNetworks">
      {itemsRender()}
    </Container>
  );
};

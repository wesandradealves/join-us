import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routesMap } from '../../routes/';

import {
  Wrapper
} from '../../layouts/styles';

import {
  Column,
  Container
} from './styles';

import Logo from '../Logo';
import SocialNetworks from '../SocialNetworks';
import vtex from '../../assets/vtex-pci-200.svg';
import ebit from '../../assets/selo-ebit.svg';
import plus from '../../assets/plus.svg';
import Navigation from '../Navigation';
import Newsletter from '../Newsletter';

export const Footer: React.FC = () => {
	var [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const socialNetworks = [
    {
      class: 'facebook-f',
      url: '#'
    },
    {
      class: 'instagram',
      url: '#'
    },{
      class: 'pinterest',
      url: '#'
    }    
  ];

   const handleResize = () => {
  	setWindowWidth(window.innerWidth);
  	return window.innerWidth;
  };      

  useEffect(() => {
  	window.addEventListener('resize', handleResize);
  }, []);    

  return (
    <Container>
      <Wrapper className="wrapper">
        <Column>
          <SocialNetworks data={socialNetworks} />
          <div className="logos">
            <img src={vtex} />
            <img src={ebit} />            
          </div>
        </Column>
        <Column flex={1}>
          <Navigation textTransform="uppercase" routes={routesMap.filter(item => {
            return item.location === 'footer';
          })}></Navigation>
        </Column>
        <Column>
          <Newsletter title="Assine nossa news" />
        </Column>
      </Wrapper>
      <div className="copyright">
        <Wrapper className="wrapper">
          {windowWidth <= 1024 ? <p> Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP. <br/>Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</p> : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie massa in nunc condimentum, vel placerat lacus pulvinar. Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc semper leo nec tellus gravida faucibus.</p>}
          <Logo fill="white" wrapTag="span" />
        </Wrapper>
      </div>
    </Container>
  );
};

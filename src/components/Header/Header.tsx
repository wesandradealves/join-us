import React, { useState, useEffect, useContext } from 'react';
import Context from '../../context/';
import Navigation from '../Navigation';
import Cart from '../Cart';
import Breadcrumb from '../Breadcrumb';
import Logo from '../Logo';
import { routesMap } from '../../routes/';
import mockapi from '../../services/mock-api';
import { useLocation, useHistory } from 'react-router-dom';
import { HamburgerArrow } from 'react-animated-burgers'
import {
  Nav,
  Container,
  SearchBar,
  Button,
  Input
} from './styles';

import {
  Wrapper
} from '../../layouts/styles';

import logo from '../../assets/original.svg';
import lens from '../../assets/search.svg';

export const Header: React.FC = () => {
  const store:any = useContext(Context);
  const [s, setQuery] = useState('');
  const [isSearching, setSearching] = useState(false);
  const location = useLocation();
  const tmpLocation = `${window.origin}${location.pathname}`;
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  var [windowWidth, setWindowWidth] = useState();

  if(!store.categories.length) {
    mockapi.get('/categories').then(response => {
      store.setCategories(response.data.filter((item:any) => {
        return item.isActive;
      }).map((o:any) => {
        return {
          path: `/category/${o.slug}`,
          data: {
            title: o.name
          }
        }
      }));      
    })
  }

  const handleResize = () => {
  	setWindowWidth(window.innerWidth);
  	return window.innerWidth;
  };        

  useEffect(() => {
	if(isSearching) {
	  window.history.replaceState('', '', `${window.origin}/s/${((s) ? s : '')}`);
	} else {
	  window.history.replaceState('', '', ((s) ? `${window.origin}/s/${s}` : tmpLocation));
	}
		}, [isSearching]);  

	const handleChange = (e:any) => {
	setQuery(e ? e.target.value : '');

	if(e.target.value) {
	  window.history.pushState('', '', `${s}`);
	} else {
	  window.history.replaceState('', '', tmpLocation);
	}
	};  

	const handleSubmit = (e:any) => {
    e.preventDefault();
    if(s) {
      history.push(`/s/${s}`);
    }
  }; 

  useEffect(() => {
  	console.log(handleResize());
  	window.addEventListener('resize', handleResize);
  }, []);        

  return (
    <Container>
      {windowWidth <= 1024 ? <HamburgerArrow className="hamburger" isActive={isActive} /> : null}
      <Logo wrapTag="h1" />
      <Nav>
        <Wrapper className="wrap">
          <Navigation separator={true} routes={routesMap.filter(item => {
            return item.location === 'account';
          })} />
          <Navigation 
            separator={false}
            textTransform="uppercase" 
            justifyContent="center" 
            routes={store.categories} />
          <SearchBar onSubmit={(e) => handleSubmit(e)}>
            <Button>
              <img src={lens} />
            </Button>       
            <span>
              <Input 
                placeholder="Busca" 
                onBlur={(e) => setSearching(false)}
                onClick={(e) => setSearching(true)}
                onChange={(e) => handleChange(e)} 
                type="text" />
            </span>     
          </SearchBar>
          <Cart cartItems={[]} />
        </Wrapper>
      </Nav>      
      <Breadcrumb location={location} />
    </Container>
  );
};

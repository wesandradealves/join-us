import React, { useEffect, useState, InputHTMLAttributes, useContext } from 'react';
import { routesMap } from '../../routes/';
import Context from '../../context/';
import {
  Wrapper
} from '../../layouts/styles';

import {
  Link,
} from "react-router-dom";

import {
  BreadcrumbItem,
  BreadcrumbWrapper,
  Container
} from './Breadcrumb.styles';

interface IBreadcrumb extends InputHTMLAttributes<HTMLInputElement> {
  location: any;
}

export const Breadcrumb: React.FC<IBreadcrumb> = ({ location }) => {
  const store:any = useContext(Context);

	const currentRender = () => {    
	    const routes = routesMap.concat(store.products, store.categories);

	    return routes.filter((o:any) => {
	      return o.path === location.pathname
	    }).map((o:any, index:number) => {
	      return (
	        <BreadcrumbItem key={o.data.title || o.data.name}>
	          <Link to={o.path}>{o.data.title || o.data.name}</Link>   
	        </BreadcrumbItem>    
	      );
	    });
  	};    

  return (
    <Container>
      <Wrapper className="wrapper">
        <BreadcrumbWrapper>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          {location && location.pathname !== '/' ? (
              currentRender()
          ) : null}          
        </BreadcrumbWrapper>
      </Wrapper>
    </Container>
  );
};

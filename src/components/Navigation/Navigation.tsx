import React, { useEffect, useState, InputHTMLAttributes } from 'react';

import {
  Link,
} from "react-router-dom";

import {
  NavHeader,
  Nav,
  Container,
  NavItem
} from './Navigation.styles';

interface INavigation extends InputHTMLAttributes<HTMLInputElement> {
  routes?: any;
  column?: boolean;
  justifyContent?: string;
  textTransform?: string;
  separator?: boolean;
}

export const Navigation: React.FC<INavigation> = ({ routes, column, justifyContent, textTransform, separator }) => {
	const itemsRender = () => {
    let _ = require('lodash');

    const nav = _.groupBy(routes, function (route:any) {
        return route.parent
    });

    if(Object.keys(nav).indexOf('undefined') === -1) {
      var result = _.chain(routes).groupBy("parent").map(function(o:any, index:any) {
        return (
          <NavItem separator={separator} textTransform={textTransform} key={index}>
            <NavHeader>{index}</NavHeader>
            <Nav>
              {o.map((o:any, index:number) => (
                <NavItem key={index}>
                  <Link to={o.path}>{(o.data && o.data.title) ? o.data.title : o.title}</Link>
                </NavItem>  
              ))}              
            </Nav>
          </NavItem>        
        );
      }).value();

      return result;
    } else {
      return routes.map((o:any, index:number) => {
        return (
          <NavItem separator={separator} textTransform={textTransform} key={index}>
            <Link to={o.path}>{o.data.title}</Link>
          </NavItem>        
        );
      });
    }
  };    

  return (
    <Container>
      <Nav className="navigation" column={column} justifyContent={justifyContent}>
        {itemsRender()}
      </Nav>
    </Container>
  );
};

import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/';
import mockapi from '../services/mock-api';

import { Switch, useLocation } from 'react-router-dom';

import Route from './Route';
 
import MainLayout from '../layouts/MainLayout';

import LoginPage from './../pages/SignIn/SignIn';
import RegisterPage from './../pages/Register/Register';
import SingleProduct from './../pages/SingleProduct/SingleProduct';
import NotFound from './../pages/NotFound/NotFound';
import ArchivePage from './../pages/Archive/Archive';
import SearchPage from './../pages/Search/Search';
import DefaultPage from './../pages/Page/Page';

export const routesMap = [{
    path: '/',
    data: { title: "Home" },
    component: DefaultPage
  },{
    parent: 'Institucional',
    path: '/institucional/a-marca',
    data: { title: "A Marca" },
    component: DefaultPage,
    location: 'footer'
  },{
    parent: 'Institucional',
    path: '/institucional/lojas',
    data: { title: "Lojas" },
    component: DefaultPage,
    location: 'footer'
  },{
    parent: 'Institucional',
    path: '/institucional/contato',
    data: { title: "Contato" },
    component: DefaultPage,
    location: 'footer'
  },{
    parent: 'Informações',
    path: '/informacoes/formas-de-pagamento',
    data: { title: "Formas de Pagamento" },
    component: DefaultPage,
    location: 'footer'
  },{
    parent: 'Informações',
    path: '/informacoes/trocas-e-devolucoes',
    data: { title: "Trocas e Devoluções" },
    component: DefaultPage,
    location: 'footer'
  },{
    parent: 'Informações',
    path: '/informacoes/cuidados-com-o-produto',
    data: { title: "Cuidados Com o Produto" },
    component: DefaultPage,
    location: 'footer'
  },{
    parent: 'Conheça',
    path: '/conheca/franquias-e-multimarcas',
    data: { title: "Franquias e Multimarcas" },
    component: DefaultPage,
    location: 'footer'
  },{
    parent: 'Conheça',
    path: '/conheca/trabalhe-com-a-gente',
    data: { title: "Trabalhe com a gente" },
    component: DefaultPage,
    location: 'footer'
  },{
    parent: 'Conheça',
    path: '/conheca/procon-rj',
    data: { title: "Procon-RJ" },
    component: DefaultPage,
    location: 'footer'
  },{
    path: '/entrar',
    data: { title: "Entrar" },
    component: LoginPage,
    location: 'account'
  },{
    path: '/cadastro',
    data: { title: "Cadastrar-se" },
    component: RegisterPage,
    location: 'account'
  },{
    path: '/produto/:pid',
    component: SingleProduct,
  },{
    path: '/s/:s',
    component: SearchPage,
  },{
    path: '/category/:slug',
    component: ArchivePage,
  },{
    path: '/404',
    component: NotFound,
  }
];

export interface IProduct {
  id: string;
  data: {
    name: string;
    gallery: any;
    category: any;
    information: {
      colors: any;
      description: string;
      price: {
        value: string;
        promo: string;
        installments: any;
      };
      ref: string;
      sizes: any;
    };
    video: string;   
    slug: string;
    title: string; 
  };
}
  
const routeComponents = routesMap.map(({path, data, component}, key) => <Route exact path={path} component={component} key={key} />);

const Routes: React.FC = () => {
  const store = useContext(Context);
  const location = useLocation();

  const page = routesMap.filter(item => {
    return item.path === location.pathname;
  })[0];

  const category = store.categories.filter(item => {
    return item.path === location.pathname;
  })[0];  

  if(page !== undefined && page.data) {
    document.title = `Original.io - ${page.data.title}`;
  } else if(category) {
    document.title = `Original.io - ${category.data.title}`;
  }

  useEffect(() => {
    if(!store.products.length) {
      mockapi.get('/products').then(response => {
        if(response.data) {
          let routes = response.data.filter((item:any) => {
            return item.data.isActive;
          }).map((o:IProduct) => {
            return {
              path: `/${o.data.slug}`,
              title: o.data.name,
              data: o.data,
              component: SingleProduct
            }
          });
  
          store.setProducts(routes);
        }
      })
    }
  }, [store]);    

  return (
    <MainLayout>
      <Switch>
        {routeComponents}
        {store.products.map(({path, data, component}, key) => <Route exact path={path} component={component} key={key} />)}
        <Route path="*" component={NotFound} />   
      </Switch>
    </MainLayout>
  )
};

export default Routes;

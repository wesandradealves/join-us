import React from 'react';

import { App, Main } from './styles';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <App>
      <Header />
      <Main>{children}</Main>
      <Footer/>
    </App>
  );
};

export default Layout;

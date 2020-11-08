import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  Link,
  useParams
} from "react-router-dom";

import {
  Code,
  ProductTitle,
  Gallery,
  InformationBox,
  Container,
  PriceBox,
  Price,
  Promo,
  Installments,
  Installment,
  FeatureBox,
  FeatureItem,
  Description,
  FeatureItems,
  TriggerVideo,
  PlayIco,
  RelatedProducts,
  ProductCard,
  ProductThumbnail,
  CardInfoBox,
  CarouselNav,
  Arrow,
  CarouselCounter,
  AddedToCart,
  ErrMsg,
  Spinner,
  NotFound
} from './styles';

import Context from '../../context/';

import api from '../../services/mock-api';

import {
  Wrapper
} from '../../layouts/styles';

const ArchivePage: React.FC = () => {
  const { slug } = useParams();
  const store = useContext(Context);
  const location = useLocation();

	const itemsRender = () => {
    const products = store.products.filter((product:any) => {
      return product.data.isActive && product.data.category.includes(slug);
    });

    if(products.length) {
      return products.map((o:any, index:number) => (
		(o.hasOwnProperty('data')) ? <ProductCard key={index}>
	          <Link to={o.path}>
	          	<ProductThumbnail featuredThumbnail={`/static/${o.data.thumbnail}`} />
	          	<CardInfoBox> 
	          		<Price>R$ {o.data.information.price.promo ? o.data.information.price.promo : o.data.information.price.value}</Price>
	                <FeatureBox className="featureBox">
	                    <FeatureItems>
	                      	{o.data.information.colors.length ? o.data.information.colors.map((o:any, index:number) => (

	                        <FeatureItem isTiny={true} className="color" backgroundColor={o.hexa} key={index} />
	                      )) : null}
	                    </FeatureItems>
	                </FeatureBox>                      		
	          	</CardInfoBox>
	          </Link>
	      </ProductCard> : null
      ))  
    } else {
      return <NotFound>Nenhum produto encontrado :(</NotFound>;
    }
  };    

  return (
    <>
      <Container> 
        <Wrapper className="wrapper">
          {itemsRender()}     
        </Wrapper>
      </Container>
    </>
  );
};

export default ArchivePage;

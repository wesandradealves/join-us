import React, { useContext, useEffect, useState } from 'react';

import { Button } from '@material-ui/core';

import Context from '../../context/';

import {
  Link,
  useLocation,
  useParams
} from "react-router-dom";

import Carousel, {slidesToShowPlugin, Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
  Spinner
} from './styles';

import {
  Wrapper
} from '../../layouts/styles';

import playIcon from '../../assets/play.svg';
import arrow from '../../assets/arrow-left.svg';
import close from '../../assets/close.svg';

const SingleProduct: React.FC = () => {
  const classNames = require('classnames');

  const store = useContext(Context);

  const location = useLocation();

  var [data, setData] = useState();

  var [addedToCart, setAddedTo] = useState(false);

  var [currentSlide, setCurrentSlide] = useState(4);

  var [video, setVideo] = useState(false);

  var [config, setConfig] = useState({
    id: '',
    name: '',
    thumbnail: '',
    qti: 1,
    price: '',
    color: '',
    size: ''
  });

  var [addedMsg, setAddedMsg] = useState<any>(null);

  var [carousel, setCarousel] = useState<any>({
    value: 0,
    slides: [],
    thumbnails: [],
  });  

  var [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleConfig = (o:any) => {
    setConfig({
      ...config,
      [o.hasOwnProperty('hexa') ? 'color' : 'size']: o.hasOwnProperty('hexa') ? o.name : o
    });     
  };     
  
  const handleCart = (product:any) => {
	if(!store.cart.filter((item:any) => {
		return item.id === product.id;
	}).length) {
		store.setCart([...store.cart, product]);
		setAddedTo(true);
	} else {
		setAddedMsg('Você já adicionou este produto.');

		setTimeout(function(){
			setAddedMsg(null);
		}, 2000);
	}
  };     

  const handleInstallment = (installment:any) => {
    return installment+=1;
  };      
  
  const handleCarousel = (e) => {
    setCarousel({
      ...carousel,
      value: e
    });
  };    

  const handleSlideCounter = (pos) => {
  	let limit = store.products.filter((item:any) => {
      return item.data.id !== data.id;
    }).length;

  	setCurrentSlide(pos === 'next' ? currentSlide < limit ? currentSlide+=1 : currentSlide : (currentSlide > 1 ? currentSlide-=1 : currentSlide));
  };    

  const guiaDeMedidasTrigger = (e) => {
    console.log(e);
  };    

  const closeModal = () => {
    setVideo(!video);
  };

  const renderGallery = () => {
    data.gallery.map((o:any, index:number) => {
      if(carousel.slides.length < data.gallery.length && carousel.thumbnails.length < data.gallery.length) {
        setCarousel({
          ...carousel,
          slides: [...carousel.slides, <img src={`/static/${o}`} />],
          thumbnails: [...carousel.thumbnails, <img src={`/static/${o}`} />]
        })  
      }
    });

    return  <Gallery className="gallery">
      <Carousel
        value={carousel.value}
        slides={carousel.slides}
        onChange={handleCarousel}
      />     
      <div>
        {data.video ? <>
          <h3>Vídeo</h3>
          <TriggerVideo onClick={e => setVideo(true)}>
            <PlayIco>
              <img src={playIcon} />
            </PlayIco>
            <img src={`https://img.youtube.com/vi/${data.video.split('embed/')[1]}/0.jpg`} />
          </TriggerVideo>
        </> : null}
        <Dots 
          thumbnails={carousel.thumbnails} 
          value={carousel.value} 
          onChange={handleCarousel} 
          number={carousel.slides.length} 
        />
      </div>        
    </Gallery>;
  };   

  const renderAddedToModal = (cart) => {
  	const product = cart[store.cart.length - 1];

    return  <AddedToCart>
    	<div className="addedToCartInner"> 
	    	<button onClick={() => {setAddedTo(false)}} className="close"><img src={close}/></button>
	    	<ProductThumbnail className="featuredThumbnail" featuredThumbnail={product.thumbnail} />
	    	<ProductTitle className="productTitle">Produto adicionado com sucesso!</ProductTitle>
	    	<Button className="btn" onClick={() => {setAddedTo(false)}}>Finalizar compra</Button>
	    	<Button className="btn --cancel" onClick={() => {setAddedTo(false)}}>Continuar comprando</Button>
    	</div>
    </AddedToCart>;
  };       
  
  useEffect(() => {
      const product = store.products.filter((product:any) => {
        return product.path === location.pathname;
      })[0].data;

      document.title = `Original.io - ${product.name}`;

      if(product) {
        setData(product);
      }

      setConfig({
        ...config,
        name: product.name,
        thumbnail: product.thumbnail,
        color: product.information.colors[0].name,
        size: product.information.sizes[0],
        id: product.id,
        price: product.information.price.promo ? product.information.price.promo : product.information.price.value
      }); 
  }, [data]);   

  useEffect(() => {
      if(store.cart.length) {
	    localStorage.setItem('productCart', JSON.stringify(store.cart));
      }
  }, [store.cart]);     

  const handleResize = () => {
  	setWindowWidth(window.innerWidth);
  	return window.innerWidth;
  };      

  useEffect(() => {
  	window.addEventListener('resize', handleResize);
  }, []);   


  return (
    <>
      {data 
      && data.information ? (
        <Container> 
          {windowWidth <= 1024 ? <ProductTitle className="mainTitle">{data.name} <Code>{data.information.ref}</Code></ProductTitle> : null}
          <Wrapper className="wrapper">
            {renderGallery()}
            <InformationBox>
              <div className="informationBoxInner">
              	{windowWidth > 1024 ? <ProductTitle>{data.name} <Code>{data.information.ref}</Code></ProductTitle> : null }
                <PriceBox hasPromo={data.information.price.promo ? true : false}>
                  <Price>R$ {data.information.price.value}</Price>
                  {data.information.price.promo ? <Promo>R$ {data.information.price.promo}</Promo> : null}
                  <Installments>
                    {!data.information.price.featuredInstallment ? data.information.price.installments.map((o:any, index:number) => (
                          <Installment key={index}>{index+=1}x de R${o}</Installment>
                      )) : <Installment>Ou {handleInstallment(data.information.price.installments.indexOf(data.information.price.featuredInstallment))}x de R${data.information.price.installments[data.information.price.installments.indexOf(data.information.price.featuredInstallment)]}</Installment>}                  
                  </Installments>
                </PriceBox>
                <FeatureBox>
                    <label>Cor: {windowWidth > 1024 ? <span>({config.color})</span> : null }</label>
                    <FeatureItems>
                      	{data.information.colors.length ? data.information.colors.map((o:any, index:number) => (

                        <FeatureItem className={classNames({'color': true, 'active': o.name === config.color})}  backgroundColor={o.hexa} onClick={() => {handleConfig(o)}} key={index} />
                      )) : null}
                    </FeatureItems>
                </FeatureBox>
                <FeatureBox className="sizes">
                    <label>Tamanho: {windowWidth > 1024 ? <span>({config.size})</span>  : null } <button onClick={guiaDeMedidasTrigger}>Guia de medidas</button></label>
                    <FeatureItems>
                      	{data.information.sizes.length ? data.information.sizes.map((o:any, index:number) => (

                        <FeatureItem className={classNames({'size': true, 'active': o === config.size})} onClick={() => {handleConfig(o)}} key={index}>{o}</FeatureItem>
                      )) : null}
                    </FeatureItems>
                </FeatureBox>  
                <Button className="btn" onClick={e => handleCart(config)} >Adicionar à Sacola</Button>
                <ErrMsg>{addedMsg ? addedMsg : null}</ErrMsg>
                <Description>{windowWidth <= 1024 ? <span>Descrição</span> : null } {data.information.description}</Description>
              </div>
            </InformationBox>
            <RelatedProducts>
              <h4>Quem viu, viu também</h4>
              <CarouselProvider
              	naturalSlideWidth={100}
              	naturalSlideHeight={100}
                totalSlides={store.products.filter((item:any) => {
                  return item.data.id !== data.id;
                }).length}
                visibleSlides={windowWidth > 1024 ? 4 : 2}
                isIntrinsicHeight={true}>
                <Slider>
                  {
                    store.products.filter((item:any) => {
                      return item.data.id !== data.id;
                    }).map((o:any, index:number) => (
                    <Slide className="item" index={o.data.id} key={o.data.id}>
                      <ProductCard>
	                      <Link to={o.path}>
	                      	<ProductThumbnail className="featuredThumbnail" featuredThumbnail={o.data.thumbnail} />
	                      	<CardInfoBox> 
	                      		<Price>R$ {o.data.information.price.promo ? o.data.information.price.promo : o.data.information.price.value}</Price>
				                <FeatureBox className="featureBox">
				                    <FeatureItems>
				                      	{data.information.colors.length ? data.information.colors.map((o:any, index:number) => (

				                        <FeatureItem isTiny={true} className={classNames({'color': true})}  backgroundColor={o.hexa} key={index} />
				                      )) : null}
				                    </FeatureItems>
				                </FeatureBox>                      		
	                      	</CardInfoBox>
	                      </Link>
                      </ProductCard>
                    </Slide>
                    ))
                  }
                </Slider>
                <CarouselNav> 
	                <ButtonBack onClick={() => {handleSlideCounter('prev')}}><Arrow isRotated={true} src={arrow} /></ButtonBack>
	                <CarouselCounter> 
	                	{currentSlide} de {store.products.filter((item:any) => {return item.data.id !== data.id; }).length}
	                </CarouselCounter>
	                <ButtonNext onClick={() => {handleSlideCounter('next')}}><Arrow src={arrow} /></ButtonNext>
                </CarouselNav>
              </CarouselProvider>   
            </RelatedProducts>
            {(video) ? <div className="videoLightboxWrapper"><ReactImageVideoLightbox data={[{ url: data.video, type: 'video', altTag: 'some video' }]}
            startIndex={0}
            showResourceCount={false}
            onCloseCallback={closeModal} /></div> : null }   
            {addedToCart ? renderAddedToModal(store.cart) : null}          
          </Wrapper>          
        </Container>
      ) : <Spinner> 
			<div className="spinner">
			  <div className="dot1"></div>
			  <div className="dot2"></div>
			</div>
		</Spinner>}
    </>
  );
};

export default SingleProduct;

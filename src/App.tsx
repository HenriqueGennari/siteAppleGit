import React from 'react';
import './fonts.css';
import { useEffect } from "react";


import {Header,
  ItemHeader,
  TextHeader,
  OptionProductsApple,
  ItemOptionProduct, 
  ImageOpttionProductApple,
  TextOptionProductApple,
  SpanNewOptionProductApple,
  AppleEducationBlock,
  BannerArea,
  PurschaseButton,
  BannerAreaButtons} 
  
  from "./AppStyled";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faApple} from "@fortawesome/free-brands-svg-icons"
import {faMagnifyingGlass, faBagShopping, faChevronRight} from "@fortawesome/free-solid-svg-icons"

import iMac from "./assets/images/iMac.svg";
import macAcessories from './assets/images/macAcessories.svg'
import macbookAir from './assets/images/macbookAir.svg'
import macCompare from './assets/images/macCompare.svg'
import macDisplays from './assets/images/macDisplays.svg'
import macMini from './assets/images/macMini.svg'
import macOs from './assets/images/macOs.svg'
import macOsPro from './assets/images/macPro.svg'
import macShop from './assets/images/macShop.svg'
import macStudio from './assets/images/macStudio.svg'
import macbookPro from './assets/images/macbookPro.svg'
import macPro from './assets/images/macPro.svg'
import macbook from './assets/images/macbook.svg'


function App() {

  return (
    <div>

      <Header> {/*Header do site*/}
        <ItemHeader>
        <FontAwesomeIcon style={{color : '#f5f5f7', fontSize : "18px", opacity : '.8', cursor: 'pointer' , marginTop : '-5px' }} icon={faApple}/>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Mac</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>IPad</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>IPhone</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Watch</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>AirPods</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>TV e Casa</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Só na Apple</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Acessórios</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Suporte</TextHeader>
        </ItemHeader>

        <ItemHeader>
        <FontAwesomeIcon style={{color : '#f5f5f7', fontSize : "15px", opacity : '.8', cursor: 'pointer' }} icon={faMagnifyingGlass}/>
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon style={{color : '#f5f5f7', fontSize : "15px", opacity : '.8', cursor: 'pointer' }} icon={faBagShopping}/>
        </ItemHeader>

      </Header>

      <OptionProductsApple>  {/*Icones abaixo do Header do site*/}
        
        <ItemOptionProduct>
          <ImageOpttionProductApple src={macbookAir} widthImage='88px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
          <SpanNewOptionProductApple type="span-new-option">New</SpanNewOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macbookPro} widthImage='88px'/>
          <TextOptionProductApple>MacBook Pro</TextOptionProductApple>
          <SpanNewOptionProductApple type="span-new-option">New</SpanNewOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={iMac} widthImage='45px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macMini} widthImage='30px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macStudio} widthImage='30px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macPro}/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macCompare} widthImage='50px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macDisplays} widthImage='81px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macAcessories} widthImage='38px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macOs} widthImage='42px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macShop} widthImage='120px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

      </OptionProductsApple>

      
      
      <AppleEducationBlock>  {/*Texto abaixo dos itens */}
          <p>Economize na compra do MacBookAir e do MacPro de 13 polegadas na Apple Store Educacional* <a href="">Comprar <FontAwesomeIcon style={{fontSize : 9}} icon={faChevronRight}/></a>
          </p>
      </AppleEducationBlock>


      <BannerArea>  {/*Área do MacBookAir, titulos, p, imagem, button*/}
        <SpanNewOptionProductApple>Novo</SpanNewOptionProductApple>
        <h1>MacBookAir</h1>
        <h2>Livre , leve e voa.</h2>
        <p>A partir de R$ 13.999</p>

        <BannerAreaButtons>
          <PurschaseButton background="#0071e3" color="white">
            Comprar
          </PurschaseButton>

          <PurschaseButton background="transperant" color="blue" underline>
            Saiba mais <FontAwesomeIcon style={{fontSize : 11 , marginLeft : 5}} icon={faChevronRight}/>
          </PurschaseButton>
        </BannerAreaButtons>

        <ImageOpttionProductApple src= {macbook} widthImage='450px' marginTop='75px' ></ImageOpttionProductApple>
      </BannerArea>


    </div>
  );
}

export default App;

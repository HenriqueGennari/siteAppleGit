import React from 'react';
import './fonts.css';
import { useEffect } from "react";
import {Header, ItemHeader, TextHeader, OptionProductsApple, ItemOptionProduct, ImageOpttionProductApple, TextOptionProductApple, SpanNewOptionProductApple} from "./AppStyled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faApple} from "@fortawesome/free-brands-svg-icons"
import {faMagnifyingGlass, faBagShopping} from "@fortawesome/free-solid-svg-icons"

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

      <OptionProductsApple>
        
        <ItemOptionProduct>
          <ImageOpttionProductApple src={macbookAir} widthImage='88px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
          <SpanNewOptionProductApple>New</SpanNewOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macbookPro} widthImage='88px'/>
          <TextOptionProductApple>MacBook Pro</TextOptionProductApple>
          <SpanNewOptionProductApple>New</SpanNewOptionProductApple>
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
          <ImageOpttionProductApple src={macDisplays} widthImage='75px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macAcessories} widthImage='38px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macOs}/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macShop} widthImage='95px'/>
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
        </ItemOptionProduct>

      </OptionProductsApple>
      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
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
  BannerAreaButtons,
  BannerMacPro,
  SelectMac,
  OptionsType,
  Optiontype,
  OptionMac,
  OptionsMac,
  OptionMacImage,
  ColorsOptionsMac,
  ColorOptionMac,
} 
  
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
import macpro from './assets/images/macpro.jpeg';
import macBookImage from './assets/images/macBookImage.png'




function App() {

  const [optionMac, setOptionMac] = useState<boolean>(true)


  //forma para que, ao clicar em um, o outro não mude

  /*const [selectedOption, setSelectedOption] = useState<'notebook' | 'desktop'>('notebook'); //dizendo que selectedOption pode ser ou 'notebook' ou 'desktop', se declarasse <string> seria permissivo
    <OptionsType>
    <Optiontype onClick={() => setSelectedOption('notebook')} selected={selectedOption === "notebook"} width='75px'> Notebook
    </Optiontype>
    <Optiontype onClick={() => setSelectedOption('desktop')} selected={selectedOption === "desktop"}>DeskTop</Optiontype>*/



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
          <SpanNewOptionProductApple marginTop="76px" type="span-new-option">New</SpanNewOptionProductApple>
        </ItemOptionProduct>

        <ItemOptionProduct>
          <ImageOpttionProductApple src={macbookPro} widthImage='88px'/>
          <TextOptionProductApple>MacBook Pro</TextOptionProductApple>
          <SpanNewOptionProductApple marginTop="76px" type="span-new-option">New</SpanNewOptionProductApple>
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


      <BannerMacPro>
      <SpanNewOptionProductApple marginTop='45px'>Novo</SpanNewOptionProductApple>
        <h1>MacBook Pro de 13 Pol.</h1>
        <h2>Pro em qualquer lugar</h2>
        <p>A partir de R$ 15.299</p>

        <BannerAreaButtons>
          <PurschaseButton background="#0071e3" color="white">
            Comprar
          </PurschaseButton>

          <PurschaseButton background="black" color="blue" underline>
            Saiba mais <FontAwesomeIcon style={{fontSize : 11 , marginLeft : 5}} icon={faChevronRight}/>
          </PurschaseButton>
        </BannerAreaButtons>

        <ImageOpttionProductApple src= {macpro} widthImage='900px' marginTop='15px'></ImageOpttionProductApple>
      </BannerMacPro>

      <SelectMac>`
        <h1>Qual o Mac ideal para você?</h1>
        <OptionsType>
          <Optiontype onClick={() => setOptionMac(!optionMac)} selected={optionMac} width='75px' style={{justifyContent: 'flex-start'}}> Notebook
          </Optiontype>

          <Optiontype onClick={() => setOptionMac(!optionMac)} selected={!optionMac} width='60px'>
          DeskTop
          </Optiontype>
        </OptionsType>

        <OptionsMac>
          <OptionMac>
            <OptionMacImage src={macBookImage} alt="" />

            <ColorsOptionsMac>
              <ColorOptionMac background="#565353"></ColorOptionMac>
              <ColorOptionMac background ="#a58236"></ColorOptionMac>
              <ColorOptionMac background ="#d8d8d8"></ColorOptionMac>
            </ColorsOptionsMac>

            <SpanNewOptionProductApple fontSize='11px' marginTop='21px'></SpanNewOptionProductApple>
            {/*Esse componente e o último vão receber o SpanNewOptionProductApple sem nenhum texto para alinhar eles na mesma posicão que os outros, para isso também mexemos no margin top.*/}

            <h1>MacBooKAir <br /><br /></h1> {/*gambiarra*/}
          </OptionMac>

          <OptionMac>
            <OptionMacImage src={macBookImage} alt="" />

            <ColorsOptionsMac>
              <ColorOptionMac background="#565353"></ColorOptionMac>
              <ColorOptionMac background ="#a58236"></ColorOptionMac>
              <ColorOptionMac background ="#d8d8d8"></ColorOptionMac>
              <ColorOptionMac background ="#9e5858"></ColorOptionMac>
            </ColorsOptionsMac>

            <SpanNewOptionProductApple fontSize='11px' marginTop='10px'>Novo</SpanNewOptionProductApple>

            <h1>MacBooKAir <br /><br /></h1> {/*gambiarra*/}
          </OptionMac>

          <OptionMac>
            <OptionMacImage src={macBookImage} alt="" />

            <ColorsOptionsMac>
              <ColorOptionMac background ="#a58236"></ColorOptionMac>
              <ColorOptionMac background ="#d8d8d8"></ColorOptionMac>
            </ColorsOptionsMac>

            <SpanNewOptionProductApple fontSize = "11px" marginTop='10px'>Novo</SpanNewOptionProductApple>

            <h1>Macbook Pro <br /> de 13 pol.</h1>
          </OptionMac>

          <OptionMac>
            <OptionMacImage src={macBookImage} alt="" />

            <ColorsOptionsMac>
              <ColorOptionMac background="#565353"></ColorOptionMac>
              <ColorOptionMac background ="#d8d8d8"></ColorOptionMac>
            </ColorsOptionsMac>

            <SpanNewOptionProductApple fontSize='11px' marginTop='21px'></SpanNewOptionProductApple>
            
            <h1>Macbook Pro <br /> de 13 e 16 pol.</h1>
          </OptionMac>
        </OptionsMac>

      </SelectMac>
    </div>
  );
}

export default App;
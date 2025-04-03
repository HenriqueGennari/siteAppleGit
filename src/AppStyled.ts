import styled from "styled-components";

interface ImageOpttionProductApple{
    widthImage ?: string
}

export const Header = styled.div`
    height: 48px;
    max-height: 48px;
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 10;
    right: 0;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 45px;
`;

export const ItemHeader = styled.div`
    display: flex;
    justify-content: center;

`;

export const TextHeader = styled.div`
    font-size : 12px;
    color : #f5f5f7;
    font-family: 'MyriadProLight';
    opacity: .8;
    cursor: pointer;
    letter-spacing: -.01rem
`;

export const OptionProductsApple = styled.div`
    height: 105px;
    display : flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
`;
export const ItemOptionProduct = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    gap : 5px;
    cursor: pointer;
`;
export const ImageOpttionProductApple = styled.img<ImageOpttionProductApple>`
    width : ${(props) => props.widthImage ? props.widthImage : "37px"};

`;
export const TextOptionProductApple = styled.a`
    font-family: 'MyriadProRegular';
    color: rgba(0,0,0,0.8);
    font-size: 13px;

`;

export const SpanNewOptionProductApple = styled.span`
    color : #f56300;
    font-family: 'MyriadProRegular';
    font-size: 10px;
    font-weight: 400;
    position: absolute;
    margin-top: 76px;

`;
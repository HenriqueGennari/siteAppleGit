import styled from "styled-components";

interface ImageOpttionProductApple{
    widthImage ?: string
    marginTop ?: string
}

interface SpanNewOptionProductApple {
    type?: string

}

interface PurschaseButton{
    background : string;
    color : string;
    underline ?: boolean;
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
    margin-top: ${(props) => props.marginTop ? props.marginTop : "0px" }
`;
export const TextOptionProductApple = styled.a`
    font-family: 'MyriadProRegular';
    color: rgba(0,0,0,0.8);
    font-size: 13px;

`;

export const SpanNewOptionProductApple = styled.span<SpanNewOptionProductApple>`
    color : #f56300;
    font-family: 'MyriadProRegular';
    font-size: ${(props) => props.type === "span-new-option" ? '10px' : '20px'};
    font-weight: ${(props) => props.type === "span-new-option" ? '400' : 'bold'};
    position: ${(props) => props.type === "span-new-option" ? 'absolute' : 'relative'};
    margin-top: ${(props) => props.type === "span-new-option" ? '76px' : '0px'};

`;

/*O props.type é um parametro passado no componente em questão*/


export const AppleEducationBlock = styled.div`
    height: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f7;
    margin-top: 20px;

    p {
        font-family: 'MyriadProRegular';
        font-size: 15px;
        font-weight: 400;


        a {
            color: #06c;
            text-decoration: none;
        }

        a:hover{
            text-decoration: underline;
        }
    }   
`;


export const  BannerArea = styled.div`
    display: flex;
    height: 700px;
    flex-direction: column;
    align-items: center;
    padding: 60px 0px;

    h1 {
        font-size: 56px;
        color: #1d1d1f;
        font-family: 'MyriadProRegular';
        font-weight: 400;
    }

    h2 {
        font-size: 28px;
        color: #1d1d1f;
        font-family: 'MyriadProRegular';
        font-weight: 400;
        margin-top: -40px;
    }

    p {
        font-size: 28px;
        color: #1d1d1f;
        font-family: 'MyriadProLight';
        font-weight: 600;
        margin-top: -2px;
    }
`;

export const PurschaseButton = styled.button<PurschaseButton>`
    cursor: pointer;
    font-size: 17px;
    font-weight: 400;
    color: ${(props) => props.color};
    font-family: 'MyriadProRegular';
    background-color: ${(props) => props.background};
    taxt-align: center;
    padding: 8px 16px;
    border-radius: 980px;
    border: none;
    

    &:hover {
        text-decoration: ${(props) => props.underline? 'underline' : 'none'}
    }
`
;
export const BannerAreaButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;



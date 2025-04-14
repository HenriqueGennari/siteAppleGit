import styled from "styled-components";

interface ImageOpttionProductApple{
    widthImage ?: string
    marginTop ?: string
}

interface SpanNewOptionProductApple {
    marginTop?: string;
    type ?: string;
    fontSize ?: string;

}

interface PurschaseButton{
    background : string;
    color : string;
    underline ?: boolean;
}

type OptionType = {
    selected ?: boolean;
    width ?: string;
    rigth ?: boolean;
}
interface ColorOptionMacType {
    background : string;
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
    font-size: 12px;
    color: #f5f5f7;
    font-family: 'MyriadProLight';
    opacity: .8;
    cursor: pointer;
    letter-spacing: -.01rem;
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
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.type === "span-new-option" ? '400' : 'bold'};
    position: ${(props) => props.type === "span-new-option" ? 'absolute' : 'relative'};
    margin-top: ${(props) => props.marginTop};

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
export const BannerMacPro = styled.div`
    height: 700px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 54px 0px;

    h1 {
        font-size: 56px;
        color: white;
        font-family: 'MyriadProRegular';
        font-weight: 400;
        margin-top: 2px;
    }

    h2 {
        font-size: 28px;
        color: white;
        font-family: 'MyriadProRegular';
        font-weight: 400;
        margin-top: -40px;
    }

    p {
        font-size: 28px;
        color: white;
        font-family: 'MyriadProLight';
        font-weight: 600;
        margin-top: -2px;
    }

`;
export const SelectMac = styled.div`
    padding: 100px 30px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 35px;
        color: black;
        font-family: 'MyriadProRegular';
        font-weight: bold;
        margin-top: 2px;
    }
`;

export const OptionsType = styled.div`
    width: 200px;
    height: 40px;
    border-bottom: 2px solid #d2d2d7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;
export const Optiontype = styled.div<OptionType>`
    display: flex;
    align-items: flex-start;
    height: 40px;
    color: ${(props) => props.selected ? '#1d1d1f' : ' #6e6e73' };
    font-family: 'MyriadProRegular';
    font-size: 18px;
    width: ${(props) => props.width};
    text-aling: ${(props) => props.rigth ? 'right' : 'left'}
    height: 100%;
    border-bottom: 1px solid ${(props) => props.selected? ' #6e6e73': '#d2d2d7' };
    cursor: pointer;
`;

export const OptionsMac = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;
export const OptionMac = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px; 

    h1 {
        font-size: 25px;
        text-align: center;
        margin-top: -1px;
    }
`;
export const OptionMacImage = styled.img`
    width: 167px;
    height: 125px;
`;

export const ColorsOptionsMac = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    gap: 5px;
    width: 200px;
`;
export const ColorOptionMac = styled.div<ColorOptionMacType>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.background};
`;

import styled from 'styled-components';
export const ContentWrapper = styled.div`
max-height:100px;
`


export const SpanWrap = styled.p`
line-height: 11px;
margin: 0;
`

export const ItemWrapper = styled.div`
background-color: ${({ theme }) => theme.colors.white};
box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
width: 240px;
height: 345px;
padding: 20px;
margin:0px 0px 30px 36px;
position: relative;
transition: transform .5s ease;
display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media(max-width:541.9px){
    width: 200px;
    height: 340px;
    padding: 12px;
    margin: 0px 3px 30px 3px;
    }

    @media(max-width:463.9px){
    width: 180px;
    height: 300px;
    padding: 12px;
    margin: 0px 4px 30px 4px;
    }

    .desc{
    display: flex !important;
    grid-column-gap: 0.5rem !important;
    overflow: hidden !important;
    flex-wrap: wrap !important;

    p{
        margin:.2rem 0 !important;
    }
    }

    &:hover{
        transform: scale(1.020);
        cursor: pointer;
    }
 
`
export const ImgWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

    img{
        object-fit: cover;
    }
    &img{
    @media(max-width:463.9px){
        width: 112px;
        height: 88px;
    }
    }

`
export const ItemBadge = styled.span`
position: absolute;
top: 0;
left: 0;
width: 53px;
height: 27px;
background-color:${({ theme }) => theme.colors.mainRed};
color: ${({ theme }) => theme.colors.white};
font-weight: 500;
font-size: 12px;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
`

export const Title = styled.h5`
font-weight: bold;
font-size: 22px;
color: ${({ theme }) => theme.colors.grayText2};
margin: 7px 0px 3px 0px;
    @media(max-width:463.9px){
    font-size: 14px;
    margin: 3px 0px;
    }
`
export const Desc = styled.p`
margin: 5px 0px;
font-size: 16px;
line-height: 25px;
color:  ${({ theme }) => theme.colors.grayText1};
    @media(max-width:463.9px){
        font-size: 12px;
        line-height: 15px;
    }
`

export const AboutItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
    @media(max-width:463.9px){
        flex-direction: column;
    }
.iwierF{
    @media(max-width:463.9px){
        width: 100%;
        padding: 2px 23px !important;
    }
    }

    @media(max-width:463.9px){
        button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.sc-bqiRlB.dVFtPK.css-sghohy-MuiButtonBase-root-MuiButton-root{
    width: 109.62px;
    height: 19.27px;
    border-radius: 30px;
    }
    }
 
`

export const Price = styled.p`
font-weight: bold;
font-size: 16px;
color:  ${({ theme }) => theme.colors.grayText2};
    @media(max-width:463.9px){
        font-size: 13px;
        margin: 0;
    }
`
import styled from "styled-components";
import { Typography, Box, Button } from '@mui/material';

export const DeleteWord = styled.p`
padding: 0px 0px 0px 13px;
font-weight: 600;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: ${({ theme }) => theme.colors.lightRed};
cursor: pointer;
margin: 0;
`
export const BoxCustom = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 498px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 32px;
    box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    text-align: center;
    & .MuiBox-root.css-0.ftnGlA.sc-dlVxhl{
        border: none !important;
    }
        @media (max-width: 767.9px) {
        width: 287px;
        }
`
export const ContentWrap = styled.div`
    margin-bottom: 24px;
`
export const ModalDesc = styled(Typography)`
    font-size: 18px !important;
    font-weight: 400 !important;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grayText2};
        @media (max-width: 767.9px) {
        font-size:14px !important;
        }
`
export const ModalTitle = styled(Typography)`
    font-size:28px !important;
    font-weight: 600 !important;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.black};
        @media (max-width: 767.9px) {
        font-size:18px !important;
        white-space: nowrap;
        }
`

export const ButtonCancel = styled(Button).attrs(() => ({
    variant: "outlined",
}))`
margin-right: 29px !important;
border: 2px solid ${({ theme }) => theme.colors.grayText1} !important;
color: ${({ theme }) => theme.colors.grayText1} !important;
    @media (max-width: 767.9px) {
       margin: 10px 0px 0px 0px !important;
    }
`

export const ButtonDelete = styled(Button).attrs(() => ({
    variant: "contained",
    color: 'error',
}))``

export const ButtonWrapper = styled.div`
    @media (max-width: 767.9px) {
        display: flex;
        flex-direction: column-reverse;
    }
`
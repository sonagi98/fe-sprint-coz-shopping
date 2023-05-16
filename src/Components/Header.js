import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { redirect } from "react-router-dom";

import Menu from "./Menu";
import logo from './common/logo.png'

const HeaderBar = styled.div`
   width: 100%;
   height: 80px;

   background-color: #FFFFFF;
   box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
   position: sticky;

   padding: 0 76px;
   display:flex;
   flex-direction: row;
   align-items:center;
`

const Logo = styled.div`
   background-image: url(${logo});
   width: 55px;
   height: 30px;
`

const Title = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   line-height: 88.02%;
   /* or 28px */
   display: flex;
   align-items: center;
   
   color: #000000;
   margin: 0 12px;
`

export default function Header() {
    return (
        <HeaderBar>
            <Logo/>
            <Title>COZ Shopping</Title>
            <Menu/>
        </HeaderBar>
    )
}
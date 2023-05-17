import { styled } from "styled-components"
import icon from './common/Hamburger.png'
import { useState } from "react"
import { redirect } from "react-router-dom"
import Dropdown from "./Dropdown"

const Icon = styled.div`
   width: 30px;
   height: 24px;
   background-image: url(${icon});
   
   position: absolute;
   right: 10%;

   &:hover {
    cursor: pointer;
   }
`

export default function Menu() {
    const [isOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!isOpen)
    }

    return (
        <Icon onClick={handleMenuOpen}>
            {isOpen? <Dropdown/> : null}
        </Icon>
    )
}
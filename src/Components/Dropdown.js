import styled from'styled-components';
import { Link } from 'react-router-dom';
import productIcon from './common/product_line.png';
import bookmarkIcon from './common/bookmark_line.png';

const DropdownMenu = styled.div`
   width: 200px;
   height: 172px;
   filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
   
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 0px;

   position: absolute;
   right: 10%;
   top: 60px;

   background: #FFFFFF;
   border-radius: 12px;

`

const MenuItem = styled.div`
   font-family: 'Inter';
   font-size: 16pt;

   display: flex;
   flex-direction: row;
   align-items: center;

   background-color:#FFFFFF;

   &.user-info {
    margin-top: 10px;
   }
`
const Icon = styled.img`
   width: 20px;
   height: 20px;
`

export default function Dropdown({handleMenuClick}) {
    return(
        <DropdownMenu>
            <MenuItem className='userinfo'> OOO님, 안녕하세요! </MenuItem>
            <Link to='/products/list'>
                <MenuItem>
                <Icon src={productIcon}/> 상품리스트 페이지
                </MenuItem>
            </Link>
            <Link to='/bookmark'>
                <MenuItem>
                <Icon src={bookmarkIcon}/> 북마크 페이지
                </MenuItem>
            </Link>
            
        </DropdownMenu>
    )
}
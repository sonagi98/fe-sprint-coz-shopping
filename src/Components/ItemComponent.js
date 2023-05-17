import { useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';

const ItemContainer = styled.div`
   width: 264px;
   height: 264px;
`
const ImgWrapper = styled.div`
   width: 264px;
   height: 210px;
   border-radius: 0%;
   border: 1px solid rgba(0, 0, 0, 0.1);
   overflow: hidden;
`

const TextWrapper = styled.div`
   width:264px;
   height:54px;

   display: flex;
   justify-content: space-between;
`

const Title = styled.div`
   font-family: 'Inter';
   font-weight: 800;
   font-size: 16px;
   line-height: 19px;
   display: flex;
   align-items: center;

   color: #000000;
   margin-top: 6px;

   &.discount {
    color: #452cdd;
    text-align: right;
   }

   &.brand-sub {
    text-align: right;
   }
`

const Additional = styled.div`
   font-family: 'Inter';
   font-weight: 500;
   font-size: 16pt;
   line-height: 19px;
   display: flex;
   align-items: center;
   
   &.align-right {
    text-align: right;
   }
`



export default function ItemComponent({item}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <ItemContainer>
            <ImgWrapper>
                <Image src={item.image_url} onClick={handleClick}/>
                {/* 북마크 추가 */}
            </ImgWrapper>
            <TextWrapper>
                <Title>{item.title}</Title>
                {item.type  === 'Product' ? <Title className='discount'>{item.discountPercentage}%</Title> : null}
                {item.type  === 'Brand' ? <Title className='brand-sub'>관심고객수</Title> : null}
            </TextWrapper>
            {item.type === 'Product' ? <Additional className='align-right'>{item.price}원</Additional> : null}
            {item.type === 'Exhibition' ? <Additional>{item.sub_title}</Additional> : null}
            {item.type === 'Brand' ? <Additional className='align-right'>{item.follower}</Additional> : null}

            {isOpen ? <Modal image={item.image_url} title={item.title} handleClick={handleClick}/> : null}
        </ItemContainer>
    )
}
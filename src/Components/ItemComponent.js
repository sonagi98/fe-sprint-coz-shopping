import React, { useState } from 'react';
import styled from 'styled-components';

import BookmarkIcon from '../Components/bookmark/Star';
import Modal from './Modal';

const ItemContainer = styled.div`
   width: 264px;
   height: 264px;

   margin: 12px 24px 12px 0px;
`
const ImgWrapper = styled.div`
   width: 264px;
   height: 210px;
   border-radius: 0%;
   border: 1px solid rgba(0, 0, 0, 0.1);
   overflow: hidden;
`

const Image = styled.img`
   width:100%;
   height:100%;
   object-fit: cover;
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
   font-size: 16px;
   line-height: 19px;
   text-align: left;
   
   &.align-right {
    text-align: right;
   }
`


export default function ItemComponent({item, bookmarkHandler}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    switch (item.type) {
        case 'Category' :
            return (
            <ItemContainer>
                <ImgWrapper>
                    <Image src={item.image_url} onClick={handleClick}/>
                    <BookmarkIcon bookmarkHandler={bookmarkHandler}/>
                </ImgWrapper>
                <TextWrapper>
                    <Title>#{item.title}</Title>
                </TextWrapper>
                {isOpen ? <Modal image={item.image_url} brandImg = {item.brand_image_url} title={item.title} brandName={item.brand_name} handleClick={handleClick} bookmarkHandler={bookmarkHandler}/> : null}
            </ItemContainer>
            )
        case 'Brand' :
            return (
                <ItemContainer>
                    <ImgWrapper>
                        <Image src={item.brand_image_url} onClick={handleClick}/>
                        {/* 북마크 추가 */}
                    </ImgWrapper>
                    <TextWrapper>
                        <Title>{item.brand_name}</Title>
                        <Title className='brand-sub'>관심고객수</Title>
                    </TextWrapper>
                    <Additional className='align-right'>{item.follower}</Additional>
                    {isOpen ? <Modal image={item.image_url} brandImg = {item.brand_image_url} title={item.title} brandName={item.brand_name} handleClick={handleClick} bookmarkHandler={bookmarkHandler}/> : null}
            </ItemContainer>
            )
            case 'Exhibition' :
                return (
                    <ItemContainer>
                        <ImgWrapper>
                            <Image src={item.image_url} onClick={handleClick}/>
                            {/* 북마크 추가 */}
                        </ImgWrapper>
                        <TextWrapper>
                            <Title>{item.title}</Title>
                        </TextWrapper>
                        <Additional>{item.sub_title}</Additional>
                        {isOpen ? <Modal image={item.image_url} brandImg = {item.brand_image_url} title={item.title} brandName={item.brand_name} handleClick={handleClick} bookmarkHandler={bookmarkHandler}/> : null}
                </ItemContainer>
                )
                case 'Product' :
                    return (
                        <ItemContainer>
                            <ImgWrapper>
                                <Image src={item.image_url} onClick={handleClick}/>
                                {/* 북마크 추가 */}
                            </ImgWrapper>
                            <TextWrapper>
                                <Title>{item.title}</Title>
                                <Title className='discount'>{item.discountPercentage}%</Title>
                            </TextWrapper>
                            <Additional className='align-right'>{item.price}원</Additional>
                            {isOpen ? <Modal image={item.image_url} brandImg = {item.brand_image_url} title={item.title} brandName={item.brand_name} handleClick={handleClick} bookmarkHandler={bookmarkHandler}/> : null}
                    </ItemContainer>
                    )
                default:
                    return (
                        <div> 데이터 없음 </div>
                    )
    }
}
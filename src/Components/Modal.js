import styled from 'styled-components';

import closeIcon from './common/ic_round-close.png';
import BookmarkIcon from './bookmark/Star';

const ModalBackground = styled.div`
   width: 100vw;
   height: 100vh;

   position:absolute;
   left:0;
   right:0;
   top:0;
   bottom:0;

   background-color: rgba(255, 255, 255, 0.4);
   display: flex;
   align-items: center;
   justify-content: center;
`

const ModalContainer = styled.div`
   width: 744px;
   height: 480px;
   border-radius: 12px;
   border: 1px solid rgba(0, 0, 0, 0.1);
   background-color: #d9d9d9;

   position: relative;
   z-index: 2;
`

const ModalImg = styled.img`
   width:100%;
   height:100%;
   object-fit: cover;
`
const ModalCloseBtn = styled.img`
   width: 24px;
   height: 24px;

   position: absolute;
   top: 12px;
   right: 12px;
   z-index: 100;
`
const ModalTitle = styled.div`
   font-size: 24px;
   font-weight: 700;
   line-height: 29px;
   color: #ffffff;
   text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

   display:flex;
   align-items:center;
   
   margin: 0 8px;
`

const ModalInfoWrapper = styled.div`
   position: absolute;
   left: 24px;
   bottom: 24px;

   display: flex;
   flex-direction: row;
   align-items: center;
`
// css - TODO: 모달 그라데이션 추가할 것

export default function Modal({image, brandImg, title, brandName, handleClick, bookmarkHandler}) {
    return (
        <ModalBackground onClick={handleClick}>
            <ModalContainer onClick={(e) => {e.stopPropagation()}}>
                <ModalImg src={image ? image : brandImg}/>
                <ModalCloseBtn src={closeIcon} onClick={handleClick}/>
                <ModalInfoWrapper>
                    <BookmarkIcon bookmark={false} bookmarkHandler={bookmarkHandler}/>
                    <ModalTitle>{title ? title : brandName}</ModalTitle>
                </ModalInfoWrapper>
            </ModalContainer>
        </ModalBackground>
    )
}
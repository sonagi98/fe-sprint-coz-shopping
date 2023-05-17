import styled from 'styled-components';

import closeIcon from './common/ic_round-close.png';

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
`

const ModalImg = styled.img`
   width:100%;
   height:100%;
`
const ModalCloseBtn = styled.img`
   width: 24px;
   height: 24px;
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
   bottom: 5%;

   display: flex;
   flex-direction: row;
   align-items: center;
`
// 모달 그라데이션 추가할 것

export default function Modal({image, title, handleClick}) {
    return (
        <ModalBackground onClick={handleClick}>
            <ModalContainer>
                <ModalImg src={image}/>
                <ModalCloseBtn src={closeIcon} onClick={handleClick}/>
                <ModalInfoWrapper>
                    {/* 북마크 아이콘 들어갈 자리 */}
                    <ModalTitle>{title}</ModalTitle>
                </ModalInfoWrapper>
            </ModalContainer>
        </ModalBackground>
    )
}
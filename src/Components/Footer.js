import styled from 'styled-components';

const FooterBar = styled.div`
   width: 100%;
   height:58px;

   position: relative;
   display:flex;
   flex-direction: column;

   background-color:#FFFFFF;
   border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const FooterContents = styled.div`
   font-family:'Inter';
   font-style: normal;
   font-size:12pt;
   line-height:88.02%;

   color:#888888;
`

export default function Footer() {
    return(
        <FooterBar>
            <FooterContents> 개인정보 처리방침 | 이용약관</FooterContents>
            <FooterContents> All rights reserved @ Codestates </FooterContents>
        </FooterBar>
    )
}
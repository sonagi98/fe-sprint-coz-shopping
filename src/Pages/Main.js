import styled from 'styled-components';

const ScreenContainer = styled.div`
   width:100vw;
   height:100vh;

   display:flex;
   align-items:center;
   justify-content:center;
`

const MainContainer = styled.div`
   display:flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding:0px;
   margin: 24px;

   height: 640px;

`

export default function MainPage() {

    return (
        <ScreenContainer>
            <MainContainer>
                <div> hello </div>
            </MainContainer>
        </ScreenContainer>
    )
}
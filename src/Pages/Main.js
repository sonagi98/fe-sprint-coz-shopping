import styled from 'styled-components';

import Item from '../Components/ItemComponent';

const ScreenContainer = styled.div`
   width:100vw;
   height:80vh;

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

const SectionWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin: 12px 0px;
`

const SectionTitle = styled.div`
   font-weight: 600;
   font-size: 24px;
   line-height: 29px;
   display:flex;
   align-items: center;

   color: #000000;
`

const ItemList = styled.div`
   display: flex;
   flex-direction: row;
`

export default function MainPage({items}) {
    const mainList = items.splice(0,4);

    return (
        <ScreenContainer>
            <MainContainer>
                <SectionWrapper>
                    <SectionTitle> 상품 리스트 </SectionTitle>
                    <ItemList>
                        {mainList.map((el) => {
                            return <Item key={el.id} item={el}/>
                        })}
                    </ItemList>
                </SectionWrapper>
                
                <SectionWrapper>
                    <SectionTitle> 북마크 리스트 </SectionTitle>
                    <ItemList>
                        {mainList.map((el) => {
                            return <Item key={el.id} item={el}/>
                        })}
                    </ItemList>
                </SectionWrapper>
            </MainContainer>
        </ScreenContainer>
    )
}
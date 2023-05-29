import styled from 'styled-components';
import all from './common/filter_all.png';
import product from './common/filter_product.png';
import brand from './common/filter_brand.png';
import category from './common/filter_category.png';
import exhibition from './common/filter_exhibition.png';

const filterContainer = styled.div`
    width: 82px;
    height: 110px;
`

const filterImg = styled.img`
    width: 82px;
    height: 82px;
    object-fit: cover;
`

const filterTitle = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;


    &.selected {
        color: #412dd4;
        font-weight: 700;

        border-bottom: 3px solid #412dd4;
    }
`
// 스토리북 만들기?
export default function Filter(selectedItem) {
    const filterList = [
        {type: 'All', title: '전체'},
        {type: 'Product', title: '상품'},
        {type: 'Category', title: '카테고리'},
        {type: 'Exhibition', title: '기획전'},
        {type: 'Brand', title: '브랜드'}
    ]

    return (
        <filterContainer>
            <filterImg/>
            <filterTitle></filterTitle>
        </filterContainer>
    )
}
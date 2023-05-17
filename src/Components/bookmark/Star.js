import styled from 'styled-components';

import iconOn from '../common/bookmark-on.png';
import iconOff from '../common/bookmark-off.png';
import { useState } from 'react';

const BookmarkIcon = styled.img`
   width: 24px;
   height: 24px;
`


export default function Bookmark({bookmark, bookmarkHandler}) {
    const [isMarked, setIsMarked] = useState(bookmark);
    const handleBookmarkClick = (id) => {
        setIsMarked(!isMarked);
        bookmarkHandler(id);
    }

    return (
        <div>
            {isMarked ? <BookmarkIcon src={iconOn} onClick={handleBookmarkClick}/> : <BookmarkIcon src={iconOff} onClick={(e) => { handleBookmarkClick(e.target.key)}}/>}
        </div>
    )
}
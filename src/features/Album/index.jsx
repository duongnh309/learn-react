import React from 'react';
import AlbumList from './components/AlbumList';


AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Các Ca Khúc Pop Ballad Việt Nổi Bật',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/7/4/5/f7452c4bab07a4cfd39c388e73a13922.jpg'
        },
        {
            id: 2,
            name: 'Những Bài Hát Hay Nhất Của Bùi Anh Tuấn',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/8/5/1/6851ebb4f3f141c269ebd05425d58c65.jpg'
        },
        {
            id: 3,
            name: 'Love Yourself',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/4/b/e/24bec3a581d8bad7481d9c3636ef8786.jpg'
        },
    ];
    return (
        <div>
            <h2>Suggested for you</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;
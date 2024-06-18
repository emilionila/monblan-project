import { ImageCard } from '../ImageCard/ImageCard';
import './ImageList.scss';
import { useState } from 'react';
import RowsIcon from '../../icons/rows-icon.svg';
import RowsActiveIcon from '../../icons/rows-active.svg';
import TilesIcon from '../../icons/tiles-icon.svg';
import TilesActiveIcon from '../../icons/tiles-active.svg';

export const ImageList = ({ images }) => {
    const [view, setView] = useState('rows');
    const [disabled] = useState(true);

    const handleIconClick = (viewType) => {
        setView(viewType);
    };

    const filteredImages = images.filter(image => {
        if (view === 'rows') {
            return image.type === 'rows';
        } else if (view === 'tiles') {
            return image.type === 'tiles';
        }
        return true;
    });

    return (
        <div className="container">
            <div className="iconsWrapper">
                <img
                    src={view === 'rows' ? RowsActiveIcon : RowsIcon}
                    alt="rows icon"
                    className="rowsIcon"
                    onClick={() => handleIconClick('tiles')}
                />
                <img
                    src={view === 'tiles' ? TilesActiveIcon : TilesIcon }
                    alt="tiles icon"
                    className="tilesIcon"
                    onClick={() => handleIconClick('rows')}
                />
            </div>

            <div className={`${view}`}>
                {filteredImages.map(image => (
                    <ImageCard
                        image={image}
                        key={image.id}
                        view={view}
                    />
                ))}
            </div>

            <button
                className="load-more"
                disabled={disabled}
            >
                Load More
            </button>
        </div>
    );
};

import React from 'react';
import './ImageCard.scss';
import LikeIcon from '../../icons/heart-icon.svg';
import CommentIcon from '../../icons/comment-icon.svg';

export const ImageCard = ({ image, view }) => {
    return (
        view === 'rows' ? (
            <div className="cardRow">
                <img src={image.image} alt="" className="cardRow-img" />
                <div className="cardRow-dateInfo">
                    <p className="cardRow-dateInfo_date">Today</p>
                    <div className="cardRow-dateInfo_additional">
                        <div className="cardRow-dateInfo_additional-likes">
                            <img src={LikeIcon} alt="heart icon" className="icon" />
                            <p className="likes-count">128</p>
                        </div>
                        <div className="cardRow-dateInfo_additional-comments">
                            <img src={CommentIcon} alt="comment icon" className="icon" />
                            <p className="comments-count">31</p>
                        </div>
                    </div>
                </div>
                <div className="cardRow-dateInfo">
                    <p className="cardRow-dateInfo_date">9-08-2016</p>
                    <div className="cardRow-dateInfo_additional dateGap">
                        <div className="cardRow-dateInfo_additional-likes">
                            <img src={LikeIcon} alt="heart icon" className="icon" />
                            <p className="likes-count">67</p>
                        </div>
                        <div className="cardRow-dateInfo_additional-comments">
                            <img src={CommentIcon} alt="comment icon" className="icon" />
                            <p className="comments-count">22</p>
                        </div>
                    </div>
                </div>

                <div className="cardRow-imageUploaded">
                    <p className="cardRow-imageUploaded_title">Image upload</p>
                    <p className="cardRow-imageUploaded_date">11-04-2016</p>
                </div>
            </div>
        ) : (
            <div className="cardTile">
                <img src={image.image} alt="" className="cardTile-img" />
                <div className="cardTile-dateInfos">
                    <div className="cardTile-dateInfo">
                        <p className="cardTile-dateInfo_date">Today</p>
                        <div className="cardTile-dateInfo_additional">
                            <div className="cardTile-dateInfo_additional-likes">
                                <img src={LikeIcon} alt="heart icon" className="icon"/>
                                <p className="likes-count">128</p>
                            </div>
                            <div className="cardTile-dateInfo_additional-comments">
                                <img src={CommentIcon} alt="comment icon" className="icon"/>
                                <p className="comments-count">31</p>
                            </div>
                        </div>
                    </div>

                    <div className="cardTile-dateInfo">
                        <p className="cardTile-dateInfo_date">9-08-2016</p>
                        <div className="cardTile-dateInfo_additional">
                            <div className="cardTile-dateInfo_additional-likes">
                                <img src={LikeIcon} alt="heart icon" className="icon"/>
                                <p className="likes-count">67</p>
                            </div>
                            <div className="cardTile-dateInfo_additional-comments">
                                <img src={CommentIcon} alt="comment icon" className="icon"/>
                                <p className="comments-count">22</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardTile-imageUploaded">
                    <p className="cardTile-imageUploaded_title">Image upload</p>
                    <p className="cardTile-imageUploaded_date">11-04-2016</p>
                </div>
            </div>
        )
    );
};

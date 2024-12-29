import {useState} from 'react';

function CardObj({children,formattedUserName,initialFollowing,srcImg}) {
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    const [isFollowing, setIsFollowing] = useState(initialFollowing)
    const  text = (isFollowing) 
        ? "following"
        : "follow"
    const following = (isFollowing)
        ? "is-following"
        : "tw-followCard-btn"
    return(
        <article className="tw-followCard">
            <div className="tw-followCard-header">
                <img 
                    src={`https://cdn-icons-png.flaticon.com/${srcImg}.png`}      
                    alt={`${srcImg} image`}
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span>{formattedUserName}</span>
                </div>
            </div>
            <div className="tw-followCard-footer">
                <button 
                    type="button"
                    className={`tw-followCard-btn  ${following}`}
                    onClick={handleClick}
                >
                    <span className="is-follow">{text}</span>
                    <span className="not-follow">do not follow</span>
                </button>
            </div>
        </article>
    )
}
export default CardObj;
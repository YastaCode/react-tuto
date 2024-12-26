import { useState } from "react";

function TwitterCard({formatUserName,userImg,children,userName, initialFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialFollowing);
    console.log('[TwitterCard] with userName', userName);
    // console.log(isFollowing);
    // const addAt = (userName) => `@${userName}`;
    const text = isFollowing ? 'following' : 'follow';
    const btnClassName = isFollowing 
        ? "tw-follow-card-btn isFollowing"
        :"tw-follow-card-btn";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-follow-card">
          <header className="tw-follow-card-header">
            <img 
                className="tw-follow-card-avatar"
                src={`https://cdn-icons-png.flaticon.com/${userImg}.png`} 
                alt={`${userImg}-image`} 
            />
            <div className="tw-follow-card-info">
              <strong>{children}</strong>
              <span>{formatUserName(userName)}</span>
              {/* <span>{formatUserName}</span> */}
              {/* <span>{addAt(userName)}</span> */}
            </div>
          </header>
          <button 
            className={btnClassName}
            onClick={handleClick}
          >
            {text}
          </button>
        </article>
    )
}
export default TwitterCard;
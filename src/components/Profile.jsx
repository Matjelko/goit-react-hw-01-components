import "./Profile.css"

export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    return (
        <article className="profile__card">
            <div>
                <img src={avatar} alt="User avatar" className="profile__img"/>
                <p className="profile__paragraph--size">{username}</p>
                <p>@{tag}</p>
                <p className="profile__paragraph--padding">{location}</p> 
            </div>

            <ul className="profile__unordered-list">
                <li className="profile__unordered-list--list-item">
                    <span className="profile__span--margin">Followers</span>
                    <span>{followers}</span>
                </li>
                <li className="profile__unordered-list--list-item">
                    <span className="profile__span--margin">Views</span>
                    <span>{views}</span>
                </li>
                <li className="profile__unordered-list--list-item">
                    <span className="profile__span--margin">Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </article>
    );
};

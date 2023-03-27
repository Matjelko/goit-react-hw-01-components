// import { cloneElement } from "react"
// import { FriendListItem } from "./FriendListItem"
import clsx from "clsx";
import "./FriendList.css";
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <section className="friendList__section">
            <ul className="friendList__unordered-list">
                {friends.map(friend => (
                    <li 
                        className={clsx(
                            "item",
                            friend.isOnline ? "is-active":
                            "is-unactive"
                        )}
                        key={friend.id}
                    >
                        <img class="avatar" src={friend.avatar} alt="User avatar" width="48" className="friendList__img--margin"/>
                        <p className="friendList__paragraph--margin">{friend.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string
      })
    )
  }
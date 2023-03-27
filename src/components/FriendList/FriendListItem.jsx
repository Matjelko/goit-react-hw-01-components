export const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <>
            <li>
                <span>{isOnline}</span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <span>{name}</span>
            </li>
        </>
    )
}
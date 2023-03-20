export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    return (
        <>
            <div>
                <img
                    style={{
                        height:120,
                        backgroundColor:'lightgray',
                        borderRadius: 100
                    }} 
                    src={avatar} 
                    alt="User avatar"
                />
                <p
                    style={{
                        fontSize: 20,
                    }}
                >{username}</p>
                <p>@{tag}</p>
                <p
                    style={{
                        paddingBottom:20
                    }}
                >{location}</p> 
            </div>

            <ul
                style={{
                    margin:0,
                    padding:0,
                    height: 125,
                    display:'flex',
                    justifyContent:'space-around',
                    alignItems:'center',
                    listStyle:'none',
                    backgroundColor: 'lightgray'
                }}
            >
                <li
                    style={{
                        display:'flex',
                        flexDirection: 'column'
                    }}
                >
                    <span
                        style={{
                            marginBottom:10
                        }}
                    >Followers</span>
                    <span>{followers}</span>
                </li>
                <li
                    style={{
                        display:'flex',
                        flexDirection: 'column'
                    }}
                >
                    <span
                        style={{
                            marginBottom:10
                        }}
                    >Views</span>
                    <span>{views}</span>
                </li>
                <li
                    style={{
                        display:'flex',
                        flexDirection: 'column'
                    }}
                >
                    <span
                        style={{
                            marginBottom:10
                        }}
                    >Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </>
    );
};

import user from "../user.json";

export const Card = () => {

    return user.map((prof, index) => {
        return (
            <div key='index' className="profile">
                <div className="description">
                    <img
                        src={prof.avatar}
                        alt="User avatar"
                        className="avatar mx-auto my-2"
                    />
                    <p className="name">{prof.username}</p>
                    <p className="tag">{prof.tag}</p>
                    <p className="location">{prof.location}</p>
                </div>

                <ul className="stats">
                    <li>
                        <span className="label">Followers</span>
                        <span className="quantity">{prof.stats.followers}</span>
                    </li>
                    <li>
                        <span className="label">Views</span>
                        <span className="quantity">{prof.stats.views}</span>
                    </li>
                    <li>
                        <span className="label">Likes</span>
                        <span className="quantity">{prof.stats.likes}</span>
                    </li>
                </ul>
            </div>
        )
    })
}
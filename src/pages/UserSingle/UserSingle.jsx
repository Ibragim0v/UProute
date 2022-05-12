import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Fragment } from "react"
import { Loading } from "../../components"
import './UserSingle.scss'

export function UserSingle() {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + '/users/' + userId)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.error(err));

        fetch(process.env.REACT_APP_URL + '/posts?userId=' + userId)
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.error(err));
    }, [])

    return (
        <>
    
            <div className="">
                <h1 className="usersingle-text">User Single</h1>
                <p className="usersingle-about">name: <span>{user.name}</span></p>
                <p className="usersingle-about">username: <span>{user.username}</span></p>
                <p className="usersingle-about">email: <span>{user.email}</span></p>
            </div>

            <div>
                <h2 className="user-posts">User Posts</h2>

                {posts.length > 0 && <ul>
                        {
                            posts.map(post => (
                                <li key={post.id} className="usersingle-item">
                                    <h4><span className="text-bold">Title: </span> {post.title}</h4>
                                    <p><span className="text-bold">Summary: </span> {post.body}</p>
                                </li>
                            ))
                        }
                    </ul>}
            </div>

        </>
    )
}
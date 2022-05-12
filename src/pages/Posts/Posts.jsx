import { useEffect, useState } from "react"
import './Posts.scss'

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState("all");
    const getUserId = (evt => setUserId(evt.target.value));
    const [allPosts, setAllPosts] = useState([]);
    
    useEffect(() => {

        fetch(process.env.REACT_APP_URL + '/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            setAllPosts(data)
        })
        .catch(err => console.error(err));

        fetch(process.env.REACT_APP_URL + '/users')
        .then(res => res.json())
        .then(data=> setUsers(data))
        .catch(err => console.error(err));

    }, [])

    useEffect(() => {

        if (userId === "all") {
            return setPosts(allPosts);
        }

        const filteredPosts = allPosts.filter(post => post.userId == userId)

        setPosts(filteredPosts)

    }, [userId])


    return (
        <>

        <select className="select" onChange={getUserId}>
            <option value="all">All</option>
            {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
            ))}
        </select>

        <h2 className="post-text">Posts</h2>

        {posts.length > 0 && <ul>

            {
                posts.map(post => (
                    <li className="post-item" key={post.id}>
                        <h4><span className="text-bold">Title: </span>{post.title}</h4>
                        <p><span className="text-bold">Summary: </span>{post.body}</p>
                    </li>
                ))
            }

            </ul>}
        
        </>
    )
}
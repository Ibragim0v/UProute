import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/lang-context"
import { Loading } from "../../components"
import './UserSingle.scss'

export function UserSingle() {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const { language } = useContext(LangContext);

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
                <h1 className="usersingle-text">{lang[language].pages.usersingle.text}</h1>
                <p className="usersingle-about">{lang[language].pages.usersingle.name}: <span>{user.name}</span></p>
                <p className="usersingle-about">{lang[language].pages.usersingle.username}: <span>{user.username}</span></p>
                <p className="usersingle-about">Email: <span>{user.email}</span></p>
            </div>

            <div>
                <h2 className="user-posts">{lang[language].pages.usersingle.text2}</h2>

                {posts.length > 0 && <ul>
                        {
                            posts.map(post => (
                                <li key={post.id} className="usersingle-item">
                                    <h4><span className="text-bold">{lang[language].pages.usersingle.title}: </span> {post.title}</h4>
                                    <p><span className="text-bold">{lang[language].pages.usersingle.summary}: </span> {post.body}</p>
                                </li>
                            ))
                        }
                    </ul>}
            </div>

        </>
    )
}
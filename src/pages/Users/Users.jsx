import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Loading } from "../../components"
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/lang-context"
import { Modal } from "../../components"
import './Users.scss'

export function Users() {

    const [users, setUsers] = useState({
        isLoading: true,
        isError: false,
        data: []
    })

    const { language } = useContext(LangContext);
    
    const [modal, setModal] = useState(false)
    
    useEffect(() => {
        fetch(process.env.REACT_APP_URL + "/users")
        .then(res => res.json())
        .then(data => {
            setUsers({
            ...users,
            isLoading: false,
            data: data
            })
        })

        .catch(err => {
            setUsers({
                ...users,
                isError: true
            })
        })
    }, [])

    const handleOpenModal = () => {
        setModal(true)
    }
    
    return (
        <div className="users">
            <div className="container-fluid">
            
                <h1 className="user-text">{lang[language].pages.user.text}</h1>

                <button onClick={handleOpenModal} className="btn btn-primary">{lang[language].pages.user.create}</button>

                {users.isLoading && !users.isError && <Loading />}
                {users.isError && <p className="h1">Error...</p>}
                {users.data.length > 0 && <ul>
                    
                {users.data.map(user => (
                    <li className="users-item" key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            <p>{user.name}</p>
                        </Link>
                    </li>
                ))}

                </ul>}

                <Modal modal={modal} setModal={setModal}>
                    <form>
                        <input className="input-username p-1 bg-light w-100 mb-2" placeholder={lang[language].pages.user.username} type="text" />
                        <input className="input-email p-1 bg-light w-100 mb-2" placeholder={lang[language].pages.user.email} type="email" />
                        <button className="w-100 btn btn-primary">{lang[language].pages.user.submit}</button>
                    </form>
                </Modal>
            
            </div>
        </div >
    )
}
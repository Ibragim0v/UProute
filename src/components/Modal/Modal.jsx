import { useContext, useEffect, useRef } from "react"
import { lang } from "../../lang/lang"
import { LangContext } from "../../context/lang-context"

export const Modal = ({modal, setModal, children}) => {
    
    const modalWrapper = useRef()
    const { language } = useContext(LangContext)

    const handleCloseModal = () => {
        setModal(false)

    }

    const wrapperClose = (e) => {
        if (e.target === modalWrapper.current) {
            setModal(false)
        }
    }

    useEffect(() => {
        const clickCloseBtn = (e) => {if (e.keyCode === 27) {handleCloseModal()}}
        
        if (modal) {
            window.addEventListener('keyup', clickCloseBtn)
            
            return () => {
                window.removeEventListener('keyup', clickCloseBtn)
            }
        }

    }, [modal])

    return (

        <>
        
        <div ref={modalWrapper} onClick={wrapperClose} className={`modals position-fixed top-0 start-0 w-100 h-100 d-flex ${!modal && 'd-none'} justify-content-center align-items-center`}>
            <div className="modal-wrapper bg-white border w-25">
                <div className="modals-header bg-light p-4 d-flex justify-content-between">
                    <h2>{lang[language].modal.add}</h2>
                    <button onClick={handleCloseModal} className="btn btn-danger">&times;</button>
                </div>

                <div className="modals-body p-4">
                    {children}
                </div>

                <div className="modals-footer bg-light p-4 d-flex justify-content-end">
                    <button onClick={handleCloseModal} className="btn btn-info">{lang[language].modal.close}</button>
                </div>
            </div>
        </div>
        
        </>

    )
}
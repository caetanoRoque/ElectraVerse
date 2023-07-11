import './alert.css'

export default function Alert({message, setAlert, onClose}){

    const close = () => {
        setAlert(false)
        if(onClose){
            onClose();
        }
    }

    return (
        <section className="alert">

            <div className='overlay'></div>

            <div className='body'>
                <p>{message}</p>
                <button onClick={ () => close()}>Fechar</button>
            </div>
            
        </section>
    )
}
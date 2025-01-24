import error from './error.gif'
const errorMessage = () => {
    return (
        <img style={{ display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto' }} src={error} alt="Error" />
    )
}

export default errorMessage;

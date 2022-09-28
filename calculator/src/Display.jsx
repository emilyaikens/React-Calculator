import './Display.css';

const Display = ({ value }) => {
    return (
        <h1 className="display" max={70}>{value}</h1>
    )
}

export default Display
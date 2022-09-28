import "./ButtonContainer.css";

const ButtonContainer = ({ children }) => {
    return (
        <div className="button-container">
            {children}
        </div>
    )
}

export default ButtonContainer;
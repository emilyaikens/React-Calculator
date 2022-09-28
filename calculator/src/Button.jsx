import './Button.css'

const Button = ({ className, value, onClick }) => {
    return (
        <button className={className} onclick={onClick}>
            {value}
        </button>
    );
};

export default Button;
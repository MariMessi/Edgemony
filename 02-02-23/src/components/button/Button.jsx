import "./index.css";

const Button = ({ text, clickFunc, isDisabled = false }) => {
    return (
        <button className={`Button ${isDisabled ? "diabled" : null}`} onClick={clickFunc} disabled={isDisabled}>
            {text}
        </button>
    );
};

export default Button;
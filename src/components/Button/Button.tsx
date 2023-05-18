import s from "../Button/Button.module.css";

type ResetBtnPropsType = {
    title: string,
    callBack: () => void,
    disabled?: boolean,
}

const Button = (props: ResetBtnPropsType) => {
    let { title, callBack, disabled } = props;

    const onClickHandler = () => {
        callBack();
    }

    return (
        <div>
            <button className={s.button} onClick={onClickHandler} disabled={disabled}>{title}</button>
        </div>
    );
};

export default Button;
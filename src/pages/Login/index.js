import { useState } from 'react';
import {
    emailPattern,
    emptyEmailErrorText,
    emptyPasswordErrorText,
    invalidEmailErrorText,
} from '../../constants';
import './style.scss';
import { Button, InputPassword, InputText } from '../../components';

export const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    const [emailError, setEmailError] = useState(emptyEmailErrorText);
    const [passwordError, setPasswordError] = useState(emptyPasswordErrorText);

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setUserData({
            ...userData,
            [name]: value,
        });

        switch (name) {
            case 'email':
                if (String(value).length === 0) {
                    setEmailError(emptyEmailErrorText);
                } else if (!value.match(emailPattern)) {
                    setEmailError(invalidEmailErrorText);
                } else {
                    setEmailError('');
                }
                break;
            case 'password':
                if (String(value).length === 0) {
                    setPasswordError(emptyPasswordErrorText);
                } else {
                    setPasswordError('');
                }
                break;
            default:
                break;
        }
    };

    const blurHandler = (evt) => {
        switch (evt.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
                break;
        }
    };

    const [passwordType, setPasswordType] = useState('password');

    const handlePasswordBtnClick = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // dispatch(login(userData));

        setEmailDirty(true);
        setPasswordDirty(true);
    };

    return (
        <section className="login">
            <form className="login__form">
                <h1 className="login__title">Авторизация</h1>
                <InputText
                    label="Электронная почта"
                    id="email"
                    name="email"
                    isRequired
                    inputValue={userData.email}
                    onChange={handleChange}
                    onBlur={blurHandler}
                    inputDirty={emailDirty}
                    inputError={emailError}
                />
                <InputPassword
                    label="Пароль"
                    passwordType={passwordType}
                    id="password"
                    name="password"
                    isRequired
                    inputValue={userData.password}
                    onChange={handleChange}
                    onBlur={blurHandler}
                    passwordDirty={passwordDirty}
                    passwordError={passwordError}
                    onPasswordBtnClick={handlePasswordBtnClick}
                />
                <Button
                    label="Зарегистрироваться"
                    type="button"
                    color="primary"
                    size="large"
                    className="login__submit-btn"
                    onClick={handleSubmit}
                />
            </form>
        </section>
    )
}
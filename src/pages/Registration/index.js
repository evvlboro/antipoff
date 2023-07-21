import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    namePattern,
    emailPattern,
    emptyNameErrorText,
    emptyEmailErrorText,
    emptyPasswordErrorText,
    invalidNameErrorText,
    invalidEmailErrorText,
    invalidConfirmPasswordErrorText,
    ROUTES,
} from '../../constants';
import './style.scss';
import { Button, InputPassword, InputText } from '../../components';
import { registerUser } from '../../store/thunk/registerUser';

export const Registration = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);

    const [nameError, setNameError] = useState(emptyNameErrorText);
    const [emailError, setEmailError] = useState(emptyEmailErrorText);
    const [passwordError, setPasswordError] = useState(emptyPasswordErrorText);
    const [confirmPasswordError, setConfirmPasswordError] = useState(
        invalidConfirmPasswordErrorText
    );

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setUserData({
            ...userData,
            [name]: value,
        });

        switch (name) {
            case 'name':
                if (String(value).length === 0) {
                    setNameError(emptyNameErrorText);
                } else if (!value.match(namePattern)) {
                    setNameError(invalidNameErrorText);
                } else {
                    setNameError('');
                }
                break;
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

                if (value !== userData.confirmPassword && confirmPasswordDirty) {
                    setConfirmPasswordError(invalidConfirmPasswordErrorText);
                } else {
                    setConfirmPasswordError('');
                }
                break;
            case 'confirmPassword':
                if (String(value).length === 0) {
                    setConfirmPasswordError(emptyPasswordErrorText);
                } else if (value !== userData.password) {
                    setConfirmPasswordError(invalidConfirmPasswordErrorText);
                } else {
                    setConfirmPasswordError('');
                }
                break;
            default:
                break;
        }
    };

    const blurHandler = (evt) => {
        switch (evt.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'confirmPassword':
                setConfirmPasswordDirty(true);
                break;
            default:
                break;
        }
    };

    const [passwordType, setPasswordType] = useState('password');
    const [confirmPasswordType, setConfirmPasswordType] = useState('password');

    const handlePasswordBtnClick = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    };
    const handleConfirmPasswordBtnClick = () => {
        if (confirmPasswordType === 'password') {
            setConfirmPasswordType('text');
        } else {
            setConfirmPasswordType('password');
        }
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formValidCheck = () => !nameError && !emailError && !passwordError && !confirmPasswordError;

    const { registerSuccess, requestCounter, errorMessage } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        if (registerSuccess) navigate(ROUTES.LOGIN);
        if (!registerSuccess && errorMessage) {
            const errors = JSON.parse(errorMessage);

            setEmailError('');
            if (errors.error) {
                setEmailError('Только определенные пользователи успешно регистрируются');
            }

        }
    }, [navigate, registerSuccess, requestCounter, errorMessage])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formValidCheck()) {
            dispatch(registerUser(userData));
        }

        setNameDirty(true);
        setEmailDirty(true);
        setPasswordDirty(true);
        setConfirmPasswordDirty(true);
    };

    return (
        <section className="registration">
            <form className="registration__form">
                <h1 className="registration__title">Регистрация</h1>
                <InputText
                    label="Имя"
                    id="name"
                    name="name"
                    isRequired
                    inputValue={userData.name}
                    onChange={handleChange}
                    onBlur={blurHandler}
                    inputDirty={nameDirty}
                    inputError={nameError}
                />
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
                <InputPassword
                    label="Подтвердите пароль"
                    passwordType={confirmPasswordType}
                    id="confirmPassword"
                    name="confirmPassword"
                    isRequired
                    inputValue={userData.confirmPassword}
                    onChange={handleChange}
                    onBlur={blurHandler}
                    passwordDirty={confirmPasswordDirty}
                    passwordError={confirmPasswordError}
                    onPasswordBtnClick={handleConfirmPasswordBtnClick}
                />
                <Button
                    label="Зарегистрироваться"
                    type="button"
                    color="primary"
                    size="large"
                    className="registration__submit-btn"
                    onClick={handleSubmit}
                />
            </form>
        </section>
    )
}
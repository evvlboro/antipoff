import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/slices/user';
import { Button } from '../../components';
import './style.scss';
import { ROUTES } from '../../constants';

export const Main = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    const handleRegistrate = () => {
        navigate(ROUTES.REGISTRATION);
    }

    const handleLogin = () => {
        navigate(ROUTES.LOGIN);
    }

    return (
        <section className='main'>
            {isAuthenticated ?
                <header className="main__header">
                    <Button
                        label='Выход'
                        type='button'
                        color='secondary'
                        size='medium'
                        className='main__logout-btn'
                        onClick={handleLogout}
                    />
                    <h1 className='main__title'>Наша команда</h1>
                    <h2 className='main__subtitle'>
                        Это опытные специалисты, хорошо разбирающиеся во всех задачах,
                        которые ложатся на их плечи, и умеющие находить выход из любых,
                        даже самых сложных ситуаций.
                    </h2>

                </header>
                :
                <header className="main__header">
                    <div className='main__btn-container'>
                        <Button
                            label='Зарегистрироваться'
                            type='button'
                            color='secondary'
                            size='medium'
                            onClick={handleRegistrate}
                        />
                        <Button
                            label='Войти'
                            type='button'
                            color='secondary'
                            size='medium'
                            className='main__login-btn'
                            onClick={handleLogin}
                        />
                    </div>
                    <h1 className='main__title'>Добро пожаловать!</h1>
                    <h2 className='main__subtitle'>
                        Авторизируйтесь, чтобы увидеть нашу команду.
                    </h2>
                </header>
            }
        </section >
    )
}
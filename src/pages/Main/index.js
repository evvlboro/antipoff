import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/slices/user';
import { clearData } from '../../store/slices/team';
import { Button, Card } from '../../components';
import { ROUTES } from '../../constants';
import { getTeam } from '../../store/thunk/getTeam';
import showMoreImg from '../../images/show-more.png';
import './style.scss';

export const Main = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    const team = useSelector(state => state.team.data);

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        dispatch(clearData());
    }

    const handleRegistrate = () => {
        navigate(ROUTES.REGISTRATION);
    }

    const handleLogin = () => {
        navigate(ROUTES.LOGIN);
    }

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getTeam(1));
            dispatch(getTeam(2));
        }
    }, [dispatch, isAuthenticated]);

    const howManyCardsFit = Math.trunc((window.innerWidth - 160) / 325)
    const moreCardsCount = window.innerWidth < 810 ? 2 : howManyCardsFit;
    const initialCardsAmount = window.innerWidth < 810 ? 4 : howManyCardsFit * 2;
    const [cardsAmount, setCardsAmount] = useState(initialCardsAmount);

    const handleShowMore = () => {
        setCardsAmount(cardsAmount + moreCardsCount);
    }

    return (
        <section className='main'>
            {isAuthenticated ?
                <>
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
                    <main className='main__body'>
                        <div className='main__card-container'>
                            {
                                team?.slice(0, cardsAmount)?.map(
                                    (element) =>
                                        <Card
                                            key={element?.id}
                                            firstName={element?.first_name}
                                            lastName={element?.last_name}
                                            avatar={element?.avatar}
                                        />
                                )
                            }
                        </div>
                        {
                            cardsAmount < team?.length &&

                            <button
                                className='main__show-more-btn'
                                onClick={handleShowMore}
                            >
                                <p className='main__show-more-text'>Показать еще</p>
                                <img src={showMoreImg} alt='Показать еще' className='main__show-more-img' />
                            </button>
                        }
                    </main>
                </>
                :
                <header className="main__header">
                    <div className='main__btn-container'>
                        <Button
                            label='Зарегистрироваться'
                            type='button'
                            color='secondary'
                            size='medium'
                            className='main__registrate-btn'
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
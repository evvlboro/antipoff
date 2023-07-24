import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logoutUser } from '../../store/slices/user';
import { clearData } from '../../store/slices/team';
import { getTeammate } from '../../store/thunk/getTeammate';
import { Button } from '../../components';
import { ROUTES, description } from '../../constants';
import phone from '../../images/phone.svg';
import email from '../../images/email.svg';
import './style.scss';

export const Mate = () => {
    const { typeId } = useParams();

    const mate = useSelector(state => state.team.data?.find((el) => el.id === Number(typeId)));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(clearData());
        navigate(-1);
    }

    const handleLogout = () => {
        dispatch(logoutUser());
        dispatch(clearData());
        navigate(ROUTES.ROOT);
    }

    useEffect(() => {
        if (!mate) {
            dispatch(getTeammate(Number(typeId)));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, typeId]);

    return (
        <section className='mate'>
            <header className="mate__header">
                <Button
                    label='Назад'
                    type='button'
                    color='secondary'
                    size='medium'
                    className='mate__back-btn'
                    onClick={handleBack}
                />
                <div className='mate__profile-container'>
                    <img
                        src={mate?.avatar}
                        className='mate__avatar'
                        alt={`${mate?.first_name} ${mate?.last_name} avatar`}
                    />
                    <div className='mate__title'>
                        <h1 className='mate__name'>
                            {`${mate?.first_name} ${mate?.last_name}`}
                        </h1>
                        <h2 className='mate__role'>Партнер</h2>
                    </div>
                </div>
                <Button
                    label='Выход'
                    type='button'
                    color='secondary'
                    size='medium'
                    className='mate__logout-btn'
                    onClick={handleLogout}
                />
            </header>
            <main className='mate__main'>
                <p className='mate__description'>
                    {description}
                </p>
                <div className='mate__contacts'>
                    <div className='mate__contacts-container'>
                        <img src={phone} className='mate__contacts-img' alt='phone' />
                        <p className='mate__contacts-text'>+7 (954) 333-44-55</p>
                    </div>
                    <div className='mate__contacts-container'>
                        <img src={email} className='mate__contacts-img' alt='email' />
                        <p className='mate__contacts-text'>{mate?.email}</p>
                    </div>
                </div>
            </main>
        </section>
    );
}
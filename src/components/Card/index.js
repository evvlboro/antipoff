import PropTypes from 'prop-types';
import { useState } from 'react';
import './style.scss';

// eslint-disable-next-line no-unused-vars
export const Card = ({ firstName, lastName, avatar, isLiked }) => {
    const [like, setLike] = useState(isLiked);
    const handleLike = () => {
        setLike(!like);
    }

    return (
        <figure className='card'>
            <img
                src={avatar}
                className='card__avatar'
                alt={`${firstName} ${lastName} avatar`}
            />
            <figcaption className='card__name'>
                {`${firstName} ${lastName}`}
            </figcaption>
            <div className='card__like-container'>
                <button
                    className={`card__like-btn ${like && 'card__like-btn_active'}`}
                    aria-label='like'
                    onClick={handleLike}
                />
            </div>
        </figure>
    )
}

Card.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isLiked: PropTypes.bool
};

Card.defaultProps = {
    isLiked: false
};

export default Card;
import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onConfirmationDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && 'card__like-button_active'
  }`;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn && 'card__delete-button_active'
  }`;

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleTrashClick() {
    onConfirmationDelete(card);
  }

  return (
    <li className='card'>
      <img
        className='card__image'
        src={card.image}
        alt={card.title}
        onClick={handleClick}
      />
      <div className='card__info'>
        <h2 className='card__name'>{card.title}</h2>
        <div className='card__like-container'>
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            aria-label='Кнопка лайка карточки'
          ></button>
          <p className='card__like-counter'>{card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <button
          className={cardDeleteButtonClassName}
          onClick={handleTrashClick}
          aria-label='Кнопка удаления карточки'
        />
      )}
    </li>
  );
}
export default Card;

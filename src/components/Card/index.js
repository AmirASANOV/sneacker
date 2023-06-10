import React from "react";

import cardStyles from "./Card.module.scss"; //SCSS Modules подход   //БЭМ

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite} onClick={onClickFavorite}>
        <img
          src={
            isFavorite
              ? "/files/images/likeditem.svg"
              : "/files/images/unlikeditem.svg"
          }
          className={cardStyles.favorite}
        />
      </div>

      <img width={133} height={120} src={imageUrl} alt="Sneaker" />
      <h5 className="mb-40">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} rub</b>
        </div>

        <img
          className={cardStyles.plus}
          onClick={onClickPlus}
          src={
            isAdded
              ? "/files/images/btn-checked.svg"
              : "/files/images/btn-plus.svg"
          }
          alt="Plus"
        ></img>
      </div>
    </div>
  );
}
export default Card;

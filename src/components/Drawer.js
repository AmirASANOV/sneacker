function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <div className="d-flex justify-between align-center">
          <h2 className="d-flex mb-20 justify-between">Корзина:</h2>
          <img
            onClick={onClose}
            className="cu-p"
            src="files/images/btn_remove.svg"
            alt="removeLogo"
          />
        </div>

        {items.length > 0 ? (
          <div>
            <div className="scrollBasket">
              <div className="items">
                {items.map((obj) => (
                  <div className="cartItem d-flex align-center mb-20">
                    <div
                      style={{
                        backgroundImage: `url(${obj.imageUrl})`,
                      }}
                      className="cartItemImg"
                    ></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price}</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src="files/images/btn_remove.svg"
                      alt="remove"
                    ></img>
                  </div>
                ))}
              </div>
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex mb-20">
                  <span>Итого:</span>
                  <b>21 498 Руб.</b>
                </li>

                <li className="d-flex">
                  <span>Налог 5%</span>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="mt-20">Оформить Заказ</button>
            </div>
          </div>
        ) : (
          <p>Пусто</p>
        )}
      </div>
    </div>
  );
}

export default Drawer;

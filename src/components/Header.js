import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            className="header_logo"
            width={40}
            height={40}
            src="/files/images/logo.png"
          />
          <div className="header">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex ">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/files/images/shop_logo.png" />

          <span>1205 R</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img src="/files/images/likedItems.svg" alt="Закладки" />
          </Link>
        </li>
        <li className="mr-30 cu-p">
          <img width={18} height={18} src="/files/images/profile_logo.png" />
          <span>1205R</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link className="list-item" to={listItem.url} key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="list-item-title">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

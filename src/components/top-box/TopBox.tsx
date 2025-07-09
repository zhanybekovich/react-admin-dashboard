import "./top-box.scss";
import { topDealsUsers } from "../../data";

function TopBox() {
  return (
    <div className="top-box">
      <h3>Top Deals</h3>
      <div className="list">
        {topDealsUsers.map((user) => (
          <div className="list-item" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="user-texts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;

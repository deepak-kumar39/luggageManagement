import { NavLink } from "react-router-dom";
import "../card/card.css";
function Card(props) {
  return (
    <>
      <div className="col-md-6 col-10 mx-auto main">
        <div class="card">
          <img src={props.image} class="card-img-top" alt={props.image} />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/" class="btn btn-dark">
              {props.btntxt}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

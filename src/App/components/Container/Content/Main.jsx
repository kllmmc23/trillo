import React from "react";

const Main = () => {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img src="img/hotel-1.jpg" alt="hotel 1" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src="img/hotel-2.jpg" alt="hotel 2" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src="img/hotel-3.jpg" alt="hotel 3" className="gallery__photo" />
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>

        <div className="overview__stars">
          <svg className="overview__icon-star">
            <use xlinkHref="img/sprite.svg#icon-star" />
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref="img/sprite.svg#icon-star" />
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref="img/sprite.svg#icon-star" />
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref="img/sprite.svg#icon-star" />
          </svg>
          <svg className="overview__icon-star">
            <use xlinkHref="img/sprite.svg#icon-star" />
          </svg>
        </div>

        <div className="overview__location">
          <svg className="overview__icon-location">
            <use xlinkHref="img/sprite.svg#icon-location-pin" />
          </svg>
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>

      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            doloribus, autem saepe soluta voluptatibus qui labore perferendis ab
            a maiores?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            doloribus, autem saepe soluta voluptatibus qui labore perferendis ab
            a maiores?
          </p>
          <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free wifi in all rooms</li>
            <li className="list__item">Air conditioning heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for families</li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy amd 3 other friend recommend this hotel
            </p>
            <div className="recommend__friends">
              <img src="img/user-3.jpg" alt="user 3" className="recommend__photo" />
              <img src="img/user-4.jpg" alt="user 4" className="recommend__photo" />
              <img src="img/user-5.jpg" alt="user 5" className="recommend__photo" />
              <img src="img/user-6.jpg" alt="user 6" className="recommend__photo" />
            </div>
          </div>
        </div>
        <div className="user-reviews">User Reviews</div>
      </div>
    </main>
  );
};

export default Main;

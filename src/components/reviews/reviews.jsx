import React from "react";
import "./reviews.css";
import { FaStar } from "react-icons/fa";

function Reviews() {
  return (
    <div className="body-testimonials">
      <div className="testimonials">
        <div className="inner">
          <h1 className="h1-testimonials">Reviews</h1>

          <div className="border-testimonials"></div>

          <div className="row-testimonials">
            <div className="col-testimonials">
              <div className="testimonial">
                <img
                  className="testimonial-img"
                  src="https://media.licdn.com/dms/image/C5603AQHV9ynYO_Q81g/profile-displayphoto-shrink_800_800/0/1652105716660?e=2147483647&v=beta&t=dQzaozAIa14OfBScXQUxUqE1igudbHIVNBrlXvRR_MA"
                  alt=""
                />

                <div className="name">Felipe Iraola</div>

                <div className="stars">
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                </div>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  inventore omnis nesciunt! Excepturi repellendus labore odio,
                  voluptatibus unde quo natus aut ipsam similique ducimus
                  laborum reiciendis ab repudiandae eum esse.
                </p>
              </div>
            </div>

            <div className="col-testimonials">
              <div className="testimonial">
                <img
                  className="testimonial-img"
                  src="https://media.licdn.com/dms/image/C5603AQGEHCwUPwsf6Q/profile-displayphoto-shrink_800_800/0/1517553329699?e=2147483647&v=beta&t=ZtE0U4efk70LQIEafhEH37YaN-1zCZUs4Wa-C5rBIE4"
                  alt=""
                />

                <div className="name">Crolina Presta</div>

                <div className="stars">
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                </div>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  inventore omnis nesciunt! Excepturi repellendus labore odio,
                  voluptatibus unde quo natus aut ipsam similique ducimus
                  laborum reiciendis ab repudiandae eum esse.
                </p>
              </div>
            </div>

            <div className="col-testimonials">
              <div className="testimonial">
                <img
                  className="testimonial-img"
                  src="https://media.c5n.com/p/98bf10bbc70b91d82b6aa47babaa5c78/adjuntos/326/imagenes/000/113/0000113697/790x0/smart/emilia-mernesjpgjpg.jpg"
                  alt=""
                />

                <div className="name">Emilia Mernes</div>

                <div className="stars">
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                  <FaStar className="star-icon-reviews" />
                </div>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  inventore omnis nesciunt! Excepturi repellendus labore odio,
                  voluptatibus unde quo natus aut ipsam similique ducimus
                  laborum reiciendis ab repudiandae eum esse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

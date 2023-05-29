import { useState } from "react";
import "./slider.css";


function Slider() {

    const [num, setNum] = useState(3);

    const slides = [{ id: "1", img: "https://i.pinimg.com/originals/f2/58/02/f2580275e8a0294209452613af088032.jpg" },
    { id: "2", img: "https://i.pinimg.com/474x/51/6b/73/516b73fd830cf122eba9ff3279b6bed3.jpg" },
    { id: "3", img: "https://static.wixstatic.com/media/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg/v1/fill/w_640,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg" },
    { id: "4", img: "https://www.hoodie-egresados.com/web/images/buzos.png" },
    { id: "5", img: "https://i.pinimg.com/originals/08/0e/f7/080ef718cc772733983d9623a826185a.png" },]

    const Prev = () => {

    };

    const Next = () => {

        if (num === 1) {

            const img1 = document.getElementById("1");
            const img2 = document.getElementById("2");
            const img3 = document.getElementById("3");
            const img4 = document.getElementById("4");
            const img5 = document.getElementById("5");

            img5.style.left = "15%"
            img5.style.opacity = ".4"
            img5.style.height = "200px"
            img5.style.width = "260px";
            img5.style.zIndex = "0";

            img1.style.left = "40%"
            img1.style.opacity = "0.8"
            img1.style.height = "250px"
            img1.style.width = "380px";
            img1.style.zIndex = "1";

            img2.style.left = "50%"
            img2.style.opacity = "1"
            img2.style.height = "300px"
            img2.style.width = "430px";
            img2.style.zIndex = "2";

            img3.style.left = "70%"
            img3.style.opacity = "0.8"
            img3.style.height = "250px"
            img3.style.width = "380px";
            img3.style.zIndex = "1";

            img4.style.left = "85%"
            img4.style.opacity = ".4"
            img4.style.height = "200px"
            img4.style.width = "260px";
            img4.style.zIndex = "0";

            setNum(2)

        }

        if (num === 2) {

            const img1 = document.getElementById("1");
            const img2 = document.getElementById("2");
            const img3 = document.getElementById("3");
            const img4 = document.getElementById("4");
            const img5 = document.getElementById("5");

            img1.style.left = "15%"
            img1.style.opacity = ".4"
            img1.style.height = "200px"
            img1.style.width = "260px";
            img1.style.zIndex = "0";

            img2.style.left = "40%"
            img2.style.opacity = "0.8"
            img2.style.height = "250px"
            img2.style.width = "380px";
            img2.style.zIndex = "1";

            img3.style.left = "50%"
            img3.style.opacity = "1"
            img3.style.height = "300px"
            img3.style.width = "430px";
            img3.style.zIndex = "2";

            img4.style.left = "70%"
            img4.style.opacity = "0.8"
            img4.style.height = "250px"
            img4.style.width = "380px";
            img4.style.zIndex = "1";

            img5.style.left = "85%"
            img5.style.opacity = ".4"
            img5.style.height = "200px"
            img5.style.width = "260px";
            img5.style.zIndex = "0";

            setNum(3)

        }

        if (num === 3) {

            const img1 = document.getElementById("1");
            const img2 = document.getElementById("2");
            const img3 = document.getElementById("3");
            const img4 = document.getElementById("4");
            const img5 = document.getElementById("5");

            img2.style.left = "15%"
            img2.style.opacity = ".4"
            img2.style.height = "200px"
            img2.style.width = "300px";
            img2.style.zIndex = "0";

            img3.style.left = "30%"
            img3.style.opacity = "0.8"
            img3.style.height = "250px"
            img4.style.width = "380px";
            img3.style.zIndex = "1";

            img4.style.left = "50%"
            img4.style.opacity = "1"
            img4.style.height = "300px"
            img4.style.width = "430px";
            img4.style.zIndex = "2";

            img5.style.left = "70%"
            img5.style.opacity = "0.8"
            img5.style.height = "250px"
            img5.style.width = "380px";
            img5.style.zIndex = "1";

            img1.style.left = "85%"
            img1.style.opacity = ".4"
            img1.style.height = "200px"
            img2.style.width = "300px";
            img1.style.zIndex = "0";

            setNum(4)

        }

        if (num === 4) {

            const img1 = document.getElementById("1");
            const img2 = document.getElementById("2");
            const img3 = document.getElementById("3");
            const img4 = document.getElementById("4");
            const img5 = document.getElementById("5");

            img3.style.left = "15%"
            img3.style.opacity = ".4"
            img3.style.height = "200px"
            img3.style.width = "260px";
            img3.style.zIndex = "0";

            img4.style.left = "40%"
            img4.style.opacity = "0.8"
            img4.style.height = "250px"
            img4.style.width = "380px";
            img4.style.zIndex = "1";

            img5.style.left = "50%"
            img5.style.opacity = "1"
            img5.style.height = "300px"
            img5.style.width = "430px";
            img5.style.zIndex = "2";

            img1.style.left = "70%"
            img1.style.opacity = "0.8"
            img1.style.height = "250px"
            img1.style.width = "380px";
            img1.style.zIndex = "1";

            img2.style.left = "85%"
            img2.style.opacity = ".4"
            img2.style.height = "200px"
            img2.style.width = "260px";
            img2.style.zIndex = "0";

            setNum(5)

        }

        if (num === 5) {

            const img1 = document.getElementById("1");
            const img2 = document.getElementById("2");
            const img3 = document.getElementById("3");
            const img4 = document.getElementById("4");
            const img5 = document.getElementById("5");

            img4.style.left = "15%"
            img4.style.opacity = ".4"
            img4.style.height = "200px"
            img4.style.width = "260px";
            img4.style.zIndex = "0";

            img5.style.left = "40%"
            img5.style.opacity = "0.8"
            img5.style.height = "250px"
            img5.style.width = "380px";
            img5.style.zIndex = "1";

            img1.style.left = "50%"
            img1.style.opacity = "1"
            img1.style.height = "300px"
            img1.style.width = "430px";
            img1.style.zIndex = "2";

            img2.style.left = "70%"
            img2.style.opacity = "0.8"
            img2.style.height = "250px"
            img2.style.width = "380px";
            img2.style.zIndex = "1";

            img3.style.left = "85%"
            img3.style.opacity = ".4"
            img3.style.height = "200px"
            img3.style.width = "260px";
            img3.style.zIndex = "0";

            setNum(1)

        }

    };

    return (

        <div className="body-gallery">

            <div className="gallery">

                <div className="gallery-container">
                    <img id="1" className="gallery-item gallery-item-1" src={slides[0].img} data-index="1" />
                    <img id="2" className="gallery-item gallery-item-2" src={slides[1].img} data-index="2" />
                    <img id="3" className="gallery-item gallery-item-3" src={slides[2].img} data-index="3" />
                    <img id="4" className="gallery-item gallery-item-4" src={slides[3].img} data-index="4" />
                    <img id="5" className="gallery-item gallery-item-5" src={slides[4].img} data-index="5" />
                </div>

                <div className="gallery-controls">
                    <button className="gallery-controls-next" onClick={Next}>Next</button>
                </div>

            </div>

        </div>

    );

};

export default Slider;
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./display.css";
import { Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import Logo from "../../img/Imgen-Adidasjpg-removebg-preview.png";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";



function Diseño() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [colorTshirt, setColorTshirt] = useState("https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/black.png");
    const [text1, setText1] = useState("Text 1");
    const [text2, setText2] = useState("Text 2");
    const [text1FontSize, setText1FontSixe] = useState("18px");
    const [text2FontSize, setText2FontSixe] = useState("18px");
    const [colorText1, setColorText1] = useState("grey");
    const [colorText2, setColorText2] = useState("grey");
    const [image, setImage] = useState("http://via.placeholder.com/400x300");
    const [fileList, setFileList] = useState([]);
    const [input, setInput] = useState({
        img: [],
    });

    const arrayFontSize = ["Select-Size", "16px", "18px", "20px", "22px", "24px", "26px", "28px", "30px",
        "32px", "34px", "36px", "38px", "40px", "42px", "44px", "46px", "48px", "50px", "52px", "54px", "56px"];
    const arrayColorText = ["white", "black", "grey", "blue", "red"];

    const blackTshirt = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/black.png";
    const whiteTshirt = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/white.png";
    const greyTshirt = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/grey.png";
    const redTshirt = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/red.png";
    const blueTshirt = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/blue.png";

    const onClickBlackTshirt = () => {
        setColorTshirt(blackTshirt)
    };

    const onClickWhiteTshirt = () => {
        setColorTshirt(whiteTshirt)
    };

    const onClickGreyTshirt = () => {
        setColorTshirt(greyTshirt)
    };

    const onClickRedTshirt = () => {
        setColorTshirt(redTshirt)
    };

    const onClickBlueTshirt = () => {
        setColorTshirt(blueTshirt)
    };

    const onChangeText1 = (e) => {

        setText1(e.target.value)

    };

    const onChangeText2 = (e) => {
        setText2(e.target.value)
    };

    const onChangeSizeText1 = (e) => {
        setText1FontSixe(e.target.value)
    };

    const onChangeSizeText2 = (e) => {
        setText2FontSixe(e.target.value)
    };

    const onChangeColor1 = (e) => {
        setColorText1(e.target.value)
    };

    const onChangeColor2 = (e) => {
        setColorText2(e.target.value)
    };

    const onChangeInputImage = (e) => {
        setFileList(e.fileList);
    };

    const handleFileListChange = ({ fileList }) => {
        setFileList(fileList);
        setInput(
            {
                ...input,
                img: [...fileList]
            }
        );
    };

    const handleSubmitImage = (e) => {

        if (input.img.length === 0) {

            Swal.fire({
                title: "Error!",
                text: 'Debes cargar la imagen',
                icon: "error",
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: "swalButton"
                }
            })

        } else if (!input.img[0].thumbUrl) {

            Swal.fire({
                title: "Error!",
                text: 'La imagen ya existe, cargar otra',
                icon: "error",
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: "swalButton"
                }
            })

        } else if (input.img.length > 1) {

            const length = input.img.length - 1;

            setInput(
                {
                    ...input,
                    img: [input.img[length].thumbUrl]
                }
            );
            setImage(input.img[length].thumbUrl)

        } else {

            setInput(
                {
                    ...input,
                    img: [input.img[0].thumbUrl]
                }
            );
            setImage(input.img[0].thumbUrl)

        }

    };

    console.log(input);

    //-------------------------------------------------------------

    const boxRef = useRef(null);
    const constcontainerRef = useRef(null);
    const isClicked = useRef(false);
    const coords = useRef({
        starX: 0,
        starY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef.current || !constcontainerRef.current) return;

        const box = boxRef.current;
        const container = constcontainerRef.current;

        const onMouseDown = (e = MouseEvent) => {
            isClicked.current = true;
            coords.current.starX = e.clientX;
            coords.current.starY = e.clientY;
        };

        const onMouseUp = (e = MouseEvent) => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };

        const onMouseMove = (e = MouseEvent) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.starX + coords.current.lastX;
            const nextY = e.clientY - coords.current.starY + coords.current.lastY;

            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };

        box.addEventListener("mousedown", onMouseDown);
        box.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseUp);

        const cleanUp = () => {
            box.removeEventListener("mousedown", onMouseDown);
            box.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseUp);
        };

        return cleanUp;

    }, []);

    //--------------------------------------------

    const boxRef2 = useRef(null);
    const constcontainerRef2 = useRef(null);
    const isClicked2 = useRef(false);
    const coords2 = useRef({
        starX: 0,
        starY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef2.current || !constcontainerRef2.current) return;

        const box2 = boxRef2.current;
        const container2 = constcontainerRef2.current;

        const onMouseDown2 = (e = MouseEvent) => {
            isClicked2.current = true;
            coords2.current.starX = e.clientX;
            coords2.current.starY = e.clientY;
        };

        const onMouseUp2 = (e = MouseEvent) => {
            isClicked2.current = false;
            coords2.current.lastX = box2.offsetLeft;
            coords2.current.lastY = box2.offsetTop;
        };

        const onMouseMove2 = (e = MouseEvent) => {
            if (!isClicked2.current) return;

            const nextX2 = e.clientX - coords2.current.starX + coords2.current.lastX;
            const nextY2 = e.clientY - coords2.current.starY + coords2.current.lastY;

            box2.style.top = `${nextY2}px`;
            box2.style.left = `${nextX2}px`;
        };

        box2.addEventListener("mousedown", onMouseDown2);
        box2.addEventListener("mouseup", onMouseUp2);
        container2.addEventListener("mousemove", onMouseMove2);
        container2.addEventListener("mouseleave", onMouseUp2);

        const cleanUp2 = () => {
            box2.removeEventListener("mousedown", onMouseDown2);
            box2.removeEventListener("mouseup", onMouseUp2);
            container2.removeEventListener("mousemove", onMouseMove2);
            container2.removeEventListener("mouseleave", onMouseUp2);
        };

        return cleanUp2;

    }, []);

    // ---------------------------------------------------------------------------

    const boxRef3 = useRef(null);
    const constcontainerRef3 = useRef(null);
    const isClicked3 = useRef(false);
    const coords3 = useRef({
        starX: 0,
        starY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef3.current || !constcontainerRef3.current) return;

        const box3 = boxRef3.current;
        const container3 = constcontainerRef3.current;

        const onMouseDown3 = (e = MouseEvent) => {
            isClicked3.current = true;
            coords3.current.starX = e.clientX;
            coords3.current.starY = e.clientY;
        };

        const onMouseUp3 = (e = MouseEvent) => {
            isClicked3.current = false;
            coords3.current.lastX = box3.offsetLeft;
            coords3.current.lastY = box3.offsetTop;
        };

        const onMouseMove3 = (e = MouseEvent) => {
            if (!isClicked3.current) return;

            const nextX3 = e.clientX - coords3.current.starX + coords3.current.lastX;
            const nextY3 = e.clientY - coords3.current.starY + coords3.current.lastY;

            box3.style.top = `${nextY3}px`;
            box3.style.left = `${nextX3}px`;
        };

        box3.addEventListener("mousedown", onMouseDown3);
        box3.addEventListener("mouseup", onMouseUp3);
        container3.addEventListener("mousemove", onMouseMove3);
        container3.addEventListener("mouseleave", onMouseUp3);

        const cleanUp3 = () => {
            box3.removeEventListener("mousedown", onMouseDown3);
            box3.removeEventListener("mouseup", onMouseUp3);
            container3.removeEventListener("mousemove", onMouseMove3);
            container3.removeEventListener("mouseleave", onMouseUp3);
        };

        return cleanUp3;

    }, []);

    // ------------------------------------------------------------------

    const imgCheck = () => {

        const imgDiv = document.getElementById("img-check");

        imgDiv.style.display = "flex";

    };

    const imgCheck2 = () => {

        const imgDiv = document.getElementById("img-check");

        imgDiv.style.display = "none";

    };

    const texto1Agregar = () => {

        const texto1 = document.getElementById("texto-1");

        texto1.style.display = "flex";

    };

    const texto2Agregar = () => {

        const texto2 = document.getElementById("texto-2");

        texto2.style.display = "flex";

    };

    const onChangeSizeImg = () => {

        const selectSize = document.getElementById("selcet-img-size");
        const imgSize = document.getElementById("img-size");

        console.log(imgSize);

        if (selectSize.value === "50 x 50") {

            imgSize.style.width = "50px";

        } else if (selectSize.value === "100 x 100") {

            imgSize.style.width = "100px";

        } else if (selectSize.value === "150 x 150") {

            imgSize.style.width = "150px";

        } else if (selectSize.value === "200 x 200") {

            imgSize.style.width = "200px";

        } else if (selectSize.value === "250 x 250") {

            imgSize.style.width = "250px";

        } else if (selectSize.value === "300 x 300") {

            imgSize.style.width = "300px";

        } else if (selectSize.value === "400 x 400") {

            imgSize.style.width = "400px";

        }

    };

    const redondearImg = () => {

        const imgSize = document.getElementById("img-size");

        imgSize.style.borderRadius = "100px"

    };

    const onChangeStyleText1 = () => {

        const selectP1 = document.getElementById("select-family-p-1");
        const parrafo1 = document.getElementById("family-p-1");

        if (selectP1.value === "Georgia") {

            parrafo1.style.fontFamily = "Georgia";

        } else if (selectP1.value === "Gill Sans") {

            parrafo1.style.fontFamily = "Gill Sans";

        } else if (selectP1.value === "sans-serif") {

            parrafo1.style.fontFamily = "sans-serif";

        } else if (selectP1.value === "serif") {

            parrafo1.style.fontFamily = "serif";

        } else if (selectP1.value === "cursive") {

            parrafo1.style.fontFamily = "cursive";

        } else if (selectP1.value === "system-ui") {

            parrafo1.style.fontFamily = "system-ui";

        } else {

            parrafo1.style.fontFamily = "Georgia";

        }


    };

    const onChangeStyleText2 = () => {

        const selectP2 = document.getElementById("select-family-p-2");
        const parrafo2 = document.getElementById("family-p-2");

        parrafo2.style.fontFamily = "Georgia";

        if (selectP2.value === "Georgia") {

            parrafo2.style.fontFamily = "Georgia";

        } else if (selectP2.value === "Gill Sans") {

            parrafo2.style.fontFamily = "Gill Sans";

        } else if (selectP2.value === "sans-serif") {

            parrafo2.style.fontFamily = "sans-serif";

        } else if (selectP2.value === "serif") {

            parrafo2.style.fontFamily = "serif";

        } else if (selectP2.value === "cursive") {

            parrafo2.style.fontFamily = "cursive";

        } else if (selectP2.value === "system-ui") {

            parrafo2.style.fontFamily = "system-ui";

        } else {

            parrafo2.style.fontFamily = "Georgia";

        }

    };

    return (

        <div>

            <Navigation />

            <header className="header-diseño">

                <div className="logo-box">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

                <div className="text-box">

                    <h1 className="heading-primary">
                        <span className="heading-primary-main">MeyBlaks</span>
                        <span className="heading-primary-sub">Es momento de Crear</span>
                    </h1>

                    <Link to="/" className="btn">Inicio</Link>

                </div>

            </header>

            <div className="container py-5">

                <div className="row-diseño">

                    <div className="col-lg-8 display">

                        <div className="card card-content" ref={constcontainerRef2}>

                            <div className="imgTshirt text-center">
                                <img
                                    className="img-responsive"
                                    src={colorTshirt}
                                    alt="img Tshirt"
                                />
                            </div>

                            <div className="memeText" id="img-check" ref={constcontainerRef}>

                                <div className="box" ref={boxRef}>
                                    <img
                                        id="img-size"
                                        src={image}
                                        alt="meme-text"
                                    />
                                </div>

                            </div>

                            <div className="memeText1" id="texto-1" ref={constcontainerRef3}>

                                <div className="box" ref={boxRef3}>
                                    <p id="family-p-1" style={{ fontSize: text1FontSize, color: colorText1 }}>{text1}</p>
                                </div>

                            </div>

                            <div className="memeText2" id="texto-2" ref={constcontainerRef2}>

                                <div className="box" ref={boxRef2}>
                                    <p id="family-p-2" style={{ fontSize: text2FontSize, color: colorText2 }} >{text2}</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 settings">
                        <div className="card bg-ligth container">

                            <h3 className="text-center">Settings</h3>
                            <h4>Change T-Shirt Color</h4>

                            <div className="tshirt-color">

                                <button className="button-tshirt-color" onClick={onClickWhiteTshirt}>
                                    <img src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/white.png" alt="white-tshirt" />
                                </button>

                                <button className="button-tshirt-color" onClick={onClickBlackTshirt}>
                                    <img src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/black.png" alt="black-tshirt" />
                                </button>

                                <button className="button-tshirt-color" onClick={onClickGreyTshirt}>
                                    <img src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/grey.png" alt="grey-tshirt" />
                                </button>

                                <button className="button-tshirt-color" onClick={onClickBlueTshirt}>
                                    <img src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/blue.png" alt="blue-tshirt" />
                                </button>

                                <button className="button-tshirt-color" onClick={onClickRedTshirt}>
                                    <img src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/red.png" alt="red-tshirt" />
                                </button>

                            </div>

                            <hr />

                            <h4>Write Text</h4>

                            <input type="text" className="form-control form-control-sm mb-2" placeholder="Text 1" onChange={onChangeText1} />
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto1Agregar}>Agregar Texto 1</button>

                            <input type="text" className="form-control form-control-sm mb-2" placeholder="Text 2" onChange={onChangeText2} />
                            <button className="btn btn-primary btn-sm mb-2" onClick={texto2Agregar}>Agregar Texto 2</button>

                            <hr />

                            <h4>Select Img</h4>
                            <div className="fomr-group">

                                <Form >

                                    <Form.Item label="Cargar" valuePropName="fileList"
                                        initialValue={fileList[0]}
                                        name="upload"
                                        getValueFromEvent={handleFileListChange}
                                        size={10}
                                    >
                                        <Upload
                                            action="/upload.do"
                                            listType="picture-card"
                                            onChange={(e) => { onChangeInputImage(e) }}
                                        >

                                            <div>
                                                <PlusOutlined />
                                                <div
                                                    style={{
                                                        marginTop: 8,
                                                    }}
                                                >
                                                    Imagen
                                                </div>
                                            </div>
                                        </Upload>

                                        {/* <input type='file' onChange={agregarFoto} /> */}

                                    </Form.Item>

                                    <button className="btn btn-primary btn-sm mb-2" onClick={handleSubmitImage}>Upload Img</button>

                                </Form >

                                <div>
                                    <button className="btn btn-primary btn-sm mb-2" onClick={imgCheck}>Agregar Imagen</button>
                                </div>

                                <div>
                                    <button className="btn btn-primary btn-sm mb-2" onClick={imgCheck2}>Borrar Imagen</button>
                                </div>

                                <div>
                                    <button className="btn btn-primary btn-sm mb-2" onClick={redondearImg}>Redondear Imagen</button>
                                </div>

                            </div>

                            <hr />

                            <h4>Img Size</h4>
                            <select id="selcet-img-size" className="form-select form-control-sm mb-2" onChange={onChangeSizeImg}>
                                <option>Select-Size</option>
                                <option>50 x 50</option>
                                <option>100 x 100</option>
                                <option>150 x 150</option>
                                <option>200 x 200</option>
                                <option>250 x 250</option>
                                <option>300 x 300</option>
                                <option>400 x 400</option>
                            </select>

                            <hr />

                            <h4>Text Size 1</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeSizeText1}>
                                {arrayFontSize && arrayFontSize.map((size) => {
                                    return (
                                        <option>
                                            {size}
                                        </option>
                                    );
                                })}
                            </select>
                            <h4>Text Size 2</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeSizeText2}>
                                {arrayFontSize && arrayFontSize.map((size) => {
                                    return (
                                        <option>
                                            {size}
                                        </option>
                                    );
                                })}
                            </select>

                            <hr />

                            <h4>Text Color 1</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeColor1}>
                                <option>Select-Color</option>
                                {arrayColorText && arrayColorText.map((color) => {
                                    return (
                                        <option>
                                            {color}
                                        </option>
                                    );
                                })}
                            </select>
                            <h4>Text Color 2</h4>
                            <select className="form-select form-control-sm mb-2" onChange={onChangeColor2}>
                                <option>Select-Color</option>
                                {arrayColorText && arrayColorText.map((color) => {
                                    return (
                                        <option>
                                            {color}
                                        </option>
                                    );
                                })}
                            </select>

                            <hr />
                            <h4>Text Style 1</h4>
                            <select id="select-family-p-1" className="form-select form-control-sm mb-2" onChange={onChangeStyleText1}>
                                <option>Select-Style</option>
                                <option>Georgia</option>
                                <option>Gill Sans</option>
                                <option>sans-serif</option>
                                <option>serif</option>
                                <option>cursive</option>
                                <option>system-ui</option>

                            </select>
                            <h4>Text Style 2</h4>
                            <select id="select-family-p-2" className="form-select form-control-sm mb-2" onChange={onChangeStyleText2}>
                                <option>Select-Style</option>
                                <option>Georgia</option>
                                <option>Gill Sans</option>
                                <option>sans-serif</option>
                                <option>serif</option>
                                <option>cursive</option>
                                <option>system-ui</option>
                            </select>

                            <hr />

                            <button className="btn btn-primary btn-sm mb-2">Save</button>
                        </div>
                    </div>

                </div>

            </div >

            <Footer />

        </div >

    );

};

export default Diseño;

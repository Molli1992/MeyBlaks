import React, { useState, useEffect, useRef } from "react";
import "./display.css";
import { Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';


function Diseño() {

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
        "32px", "34px", "36px", "38px", "40px", "42x", "44px", "46px", "48px", "50px", "52px", "54px", "56px"];
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

    return (

        <div>

            <div className="container py-5">

                <div className="row">

                    <div className="col-lg-8 display">

                        <div className="card card-content">

                            <div className="imgTshirt text-center">
                                <img
                                    className="img-responsive"
                                    src={colorTshirt}
                                    alt="img Tshirt"
                                />
                            </div>

                            <div className="memeText text-center" ref={constcontainerRef}>

                                <div>
                                    <p style={{ fontSize: text1FontSize, color: colorText1 }}>{text1}</p>
                                </div>

                                <div className="box" ref={boxRef}>
                                    <img
                                        src={image}
                                        alt="meme-text"
                                    />
                                </div>

                                <div>
                                    <p style={{ fontSize: text2FontSize, color: colorText2 }}>{text2}</p>
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
                            <input type="text" className="form-control form-control-sm" placeholder="Text 2" onChange={onChangeText2} />

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

                            </div>

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

                            <button className="btn btn-primary btn-sm mb-2">Save</button>
                        </div>
                    </div>

                </div>

            </div >

        </div>

    );

};

export default Diseño;

/*
        */

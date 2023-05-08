import React, { useEffect, useRef, useState } from "react";
import "./diseño.css";


function Diseño() {

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [draw_color, setDraw_Color] = useState("black");
    const [draw_width, setDraw_Width] = useState("2");
    const [is_drawing, setIs_Drawing] = useState(false);

    useEffect(() => {

        const canvas = canvasRef.current;
        canvas.width = 1282;
        canvas.height = 450;
        canvas.style.width = '100%';
        canvas.style.height = '450px';

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        contextRef.current = context;

        console.log(canvas)

    }, []);

    const startDrawning = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setIs_Drawing(true);
        nativeEvent.preventDefault();
    };

    const draw = ({ nativeEvent }) => {

        if (!is_drawing) {
            return
        }

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    };

    const finishDrawning = (event) => {
        contextRef.current.closePath();
        setIs_Drawing(false);
    };

    const clearCanva = () => {

        const canvas = canvasRef.current;
        canvas.width = 1277;
        canvas.height = 450;
        canvas.style.width = '100%';
        canvas.style.height = '450px';

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        contextRef.current = context;

        console.log(canvas)

    }

    const onClick1 = () => {
        setDraw_Color("red")
    }

    const onClick2 = () => {
        setDraw_Color("blue")
    }

    const onClick3 = () => {
        setDraw_Color("green")
    }


    const onClick4 = () => {
        setDraw_Color("yellow")
    }

    const onClick5 = () => {
        setDraw_Color("black")
    }

    const onClick6 = () => {
        setDraw_Color("white")
    }

    const onChangeTamaño = (e) => {
        setDraw_Width(e.target.value)
    };

    return (

        <div className="field">

            <canvas
                ref={canvasRef}
                onMouseDown={startDrawning}
                onMouseMove={draw}
                onMouseUp={finishDrawning}
            />

            <div className="field">

                <div className="tools">

                    <button type="button" className="button" onClick={clearCanva}>Clear</button>

                    <button style={{ background: "red" }} className="color-field" onClick={onClick1}></button>
                    <button style={{ background: "blue" }} className="color-field" onClick={onClick2}></button>
                    <button style={{ background: "green" }} className="color-field" onClick={onClick3}></button>
                    <button style={{ background: "yellow" }} className="color-field" onClick={onClick4}></button>
                    <button style={{ background: "black" }} className="color-field" onClick={onClick5}></button>
                    <button style={{ background: "white" }} className="color-field-2" onClick={onClick6}></button>

                    <select className="pen-range" onChange={onChangeTamaño}>
                        <option>2</option>
                        <option>4</option>
                        <option>6</option>
                        <option>8</option>
                        <option>10</option>
                        <option>12</option>
                        <option>14</option>
                        <option>16</option>
                        <option>18</option>
                        <option>22</option>
                        <option>24</option>
                        <option>26</option>
                        <option>28</option>
                        <option>30</option>
                    </select>

                    <span className="texto-diseño">Tamaño de trazo</span>

                </div>

            </div>

        </div>

    );

};


export default Diseño;

/*
        */

import React, { useState, useEffect } from 'react';
import './prueba.css';
import buzoFrenteBolsillo from '../diseño/Assets/BuzoCanguroFrente/bolsillo.png';
import buzoFrenteCintura from '../diseño/Assets/BuzoCanguroFrente/puñoFrente.png';
import buzoFrentePuños from '../diseño/Assets/BuzoCanguroFrente/puñoMangasFrente.png';
import buzoFrenteCapuchaInterior from '../diseño/Assets/BuzoCanguroFrente/buzoFrenteCapuchaInterior.png';
import buzoFrenteTorso from '../diseño/Assets/BuzoCanguroFrente/buzoFrenteTorso.png';
import buzoFrenteMangas from "../diseño/Assets/BuzoCanguroFrente/buzoFrenteMangas.png"
import buzoFrenteContorno from '../diseño/Assets/BuzoCanguroFrente/buzoFrenteContorno1.png';


function Prueba() {
  const images = [
    buzoFrenteBolsillo,
    buzoFrenteCintura,
    buzoFrentePuños,
    buzoFrenteCapuchaInterior,
    buzoFrenteTorso,
    buzoFrenteMangas
  ];

  const imageNames = [
    'Bolsillo',
    'Cintura',
    'Puños',
    'Capucha Interior',
    'Torso',
    "Mangas"
  ];

  const [selectedItem, setSelectedItem] = useState(buzoFrenteBolsillo);
  const [imageColors, setImageColors] = useState({
    [buzoFrenteBolsillo]: '#FFFFFF', // Color inicial para cada imagen: rojo
    [buzoFrenteCintura]: '#FFFFFF',
    [buzoFrentePuños]: '#FFFFFF',
    [buzoFrenteCapuchaInterior]: '#FFFFFF',
    [buzoFrenteTorso]: '#FFFFFF',
    [buzoFrenteMangas]: '#FFFFFF',

  });

  const canvasRefs = {};
  images.forEach((image) => (canvasRefs[image] = React.createRef()));

  const handleImageChange = (image) => {
    setSelectedItem(image);
  };

  const handleColorChange = (event) => {
    setImageColors({
      ...imageColors,
      [selectedItem]: event.target.value,
    });
  };

  useEffect(() => {
    Object.entries(imageColors).forEach(([imageName, color]) => {
      updateImageColor(imageName, color);
    });
  }, [imageColors]);

  const updateImageColor = (imageName, color) => {
    const canvas = canvasRefs[imageName].current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const red = parseInt(color.substr(1, 2), 16);
      const green = parseInt(color.substr(3, 2), 16);
      const blue = parseInt(color.substr(5, 2), 16);

      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] > 0) {
          data[i] = red;
          data[i + 1] = green;
          data[i + 2] = blue;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    img.src = imageName;
  };

  return (
    <div className="frente-prueba">
      <div className="image-buttons">
        {images.map((image, index) => (
          <button key={image} onClick={() => handleImageChange(image)}>
            {imageNames[index]}
          </button>
        ))}
      </div>
      <input type="color" value={imageColors[selectedItem]} onChange={handleColorChange} />
      <div className="canvas-container">
        {images.map((image) => (
          <canvas key={image} ref={canvasRefs[image]}></canvas>
        ))}
      </div>
    </div>
  );
}

export default Prueba;

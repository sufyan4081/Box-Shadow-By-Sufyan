import React, { useState } from 'react'
import Slider from "@mui/material/Slider";
import ShadowBox from './ShadowBox';

const SliderBox = () => {
  const [x, setX] = useState(5);
  const [y, setY] = useState(5);
  const [blur, setBlur] = useState(15);
  const [spread, setSpread] = useState(-4);
  const [color, setColor] = useState('lightgray');
  const [radius, setRadius] = useState(10)
  const [height, setHeight] = useState(45)
  const [width, setWidth] = useState(30)
  return (
    <>
    <div className="container__app">
      <div className='slider__box'>
          <table className='inner__slider__box'>
            <tbody>

              <tr>
                <td><label htmlFor="x">X&nbsp;:</label></td>
                <td className='tds'> <Slider className='Slider1' size='small' min={-100} max={100} value={x} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => setX(e.target.value)} /></td>
                <td> <input type="number" id='x' value={x}  onChange={(e) => setX(e.target.value)}/></td>
              </tr>
           


            
              <tr>
                <td> <label htmlFor="y">Y&nbsp;:</label></td>
                <td> <Slider className='Slider2' size='small' min={-100} max={100} value={y}aria-label="Default" valueLabelDisplay="auto" onChange={(e) => setY(e.target.value)} /></td>
                <td><input type="number" id='y' value={y} onChange={(e) => setY(e.target.value)} /></td>
              </tr>

         
              <tr>
                <td> <label htmlFor="blur">Blur&nbsp;:</label></td>
                <td><Slider className='Slider3' size='small' min={0} max={100} value={blur} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => setBlur(e.target.value)} /></td>
                <td> <input type="number" id='blur' value={blur} onChange={(e) => setBlur(e.target.value)} /></td>
              </tr>

          
              <tr>
                <td><label htmlFor="spread">Spread&nbsp;:</label></td>
                <td><Slider className='Slider4' size='small' min={-100} max={100} value={spread} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => setSpread(e.target.value)} /></td>
                <td><input type="number" id='spread' value={spread} onChange={(e) => setSpread(e.target.value)} /></td>
              </tr>


              <tr>
                <td><label htmlFor="radius">Border-Radius&nbsp;:</label></td>
                <td><Slider className='Slider4' size='small' min={0} max={100} value={radius} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => setRadius(e.target.value)} /></td>
                <td><input type="number" id='spread' value={radius} onChange={(e) => setRadius(e.target.value)} /></td>
              </tr>


              <tr>
                <td><label htmlFor="height">Height&nbsp;:</label></td>
                <td><Slider className='Slider4' size='small' min={20} max={73} value={height} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => setHeight(e.target.value)} /></td>
                <td><input type="number" id='height' value={height} onChange={(e) => setHeight(e.target.value)} /></td>
              </tr>


              <tr>
                <td><label htmlFor="width">Width&nbsp;:</label></td>
                <td><Slider className='Slider4' size='small' min={25} max={45} value={width} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => setWidth(e.target.value)} /></td>
                <td><input type="number" id='width' value={width} onChange={(e) => setWidth(e.target.value)} /></td>
              </tr>


              <tr>
                <td>Color : </td>
                <input type="color" onChange={(e)=>setColor(e.target.value)}  value={color}/>
              </tr>
            </tbody>
            </table>
        </div>
        <ShadowBox x={x} y={y} blur={blur} spread={spread} color={color} radius={radius} height={height} width={width}/>
        </div>
    </>
  )
}

export default SliderBox

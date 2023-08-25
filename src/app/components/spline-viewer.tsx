import * as React from "react";
import Spline from '@splinetool/react-spline';
import { useState } from "react";

const SplineViewer = () => {

  const [ text, setText ] = useState('Texto Inicializado');

  const onChangeText = () => {
    setText( 'Texto Cambiado' )
  }

  return (
    <div>
      { text }

      <button onClick={onChangeText} > Cambiar texto </button>
      <Spline scene="https://prod.spline.design/U9O6K7fXziMEU7Wu/scene.splinecode" />
      <Spline scene="https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode" />
    </div>
  )
}

export default SplineViewer;

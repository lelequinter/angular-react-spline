import * as React from "react";

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
    </div>
  )
}

export default SplineViewer;

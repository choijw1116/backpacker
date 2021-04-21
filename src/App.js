import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './component/Card';
import CardWithoutRating from './component/CardWithoutRating';
import CardJustRating from './component/CardJustRating';
import Horizontal from './component/Horizontal';
import Textarea from './component/Textarea';

function App() {
  return (
    <div>
      <h1 className="title">Card</h1>
      <div className="wrapper">
        <Card />
        <CardJustRating />
        <CardWithoutRating />
        <Horizontal />
      </div>
      <h1 className="title">Textbox</h1>
      <div>
        <Textarea />
      </div>
    </div>
  );
}

export default App;

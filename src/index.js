import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <React.StrictMode>
        <h1>hello</h1>
        <p>ok</p>
        <img src="./library.jpg" alt=""></img>
    </React.StrictMode>,
    document.getElementById('root')
);
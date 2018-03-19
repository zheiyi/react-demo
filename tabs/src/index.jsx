// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import Hello from '../component/hello.jsx';
// import './index.scss';

// ReactDOM.render(
//     <div className="page">
//         <Hello/>
//     </div>,
//     document.getElementById('page')
// );

import Tabs from '../component/tabs.jsx';
import '../component/tabs.scss';

const tab = new Tabs({
    element: '#tab-demo',
    tabs: '#tab-demo .tabs-nav li',
    panels: '#tab-demo .tabs-content div',
    activeIndex: 1,
});

tab.events.on('change', (o) => {
    console.log(o);
});


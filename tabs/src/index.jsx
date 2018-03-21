
/*
// hello demo
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hello from '../component/hello.jsx';
import './index.scss';

ReactDOM.render(
    <div className="page">
        <Hello/>
    </div>,
    document.getElementById('page')
);
*/


/*
// tabs no component demo
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
});*/


// tabs component demo
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TabsComponent from '../component/TabsComponent.jsx';
import TabPane from '../component/TabPane.jsx';

import '../component/tabs.scss';
import 'font-awesome/css/font-awesome.min.css';

/*
// 一种方式
<TabsComponent classPrefix={'tabs'} defaultActiveIndex={0}
               className="tabs-bar"
               children={[
                   <TabPane key={0} tab={'Tab 1'} order="0">第一个Tab里的内容</TabPane>,
                   <TabPane key={1} tab={'Tab 2'} order="1">第二个Tab里的内容</TabPane>,
                   <TabPane key={2} tab={'Tab 3'} order="2">第三个Tab里的内容</TabPane>,
               ]}>
</TabsComponent>
*/

ReactDOM.render(
    <TabsComponent classPrefix={'tabs'} defaultActiveIndex={0} className="tabs-bar">
        <TabPane key={0} order="0" tab={<span><i className="fa fa-home" />&nbsp;Home</span>}>第一个Tab里的内容</TabPane>
        <TabPane key={1} order="1" tab={<span><i className="fa fa-book" />&nbsp;Library</span>}>第二个Tab里的内容</TabPane>
        <TabPane key={2} order="2" tab={<span><i className="fa fa-pencil" />&nbsp;Applications</span>}>第三个Tab里的内容</TabPane>
    </TabsComponent>,
    document.getElementById('page')
);
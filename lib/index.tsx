import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './icon'
const fn = ()=> {
    console.log(111)
}
ReactDOM.render(<div>
    <Icon name="wechat" onClick={fn}/>
</div>, document.getElementById('root'))
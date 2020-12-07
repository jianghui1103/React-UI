import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './icon'

var childNode = document.createElement('div')
childNode.setAttribute('id','root')
document.body.appendChild(childNode)

ReactDOM.render(<div>
    <Icon name="wechat"/>
</div>, document.getElementById('root'))
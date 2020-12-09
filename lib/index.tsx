import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './icon'

ReactDOM.render(<div>
    <Icon name="wechat" 
        className="qqqq"
        onMouseEnter={()=>console.log('enter')}
        onMouseLeave={()=>console.log('leave')}
    />
</div>, document.getElementById('root'))
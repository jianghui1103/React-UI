import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './icon'
const fn = (e: React.MouseEvent<SVGAElement | SVGUseElement> )=> {
    console.log(e)
}
ReactDOM.render(<div>
    <Icon name="wechat" onClick={fn}/>
</div>, document.getElementById('root'))
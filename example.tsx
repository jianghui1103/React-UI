import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import DialogExample from './lib/dialog/dialog.example'

ReactDOM.render(<Router>
   <div>
       <header>
           DiamondUI
       </header>
       <div>
           <aside>
               <h2>组件</h2>
               <ul>
                   <li>
                       <Link to="/dialog">对话框</Link> 
                   </li>
               </ul>
           </aside>
           <main>
               <Route path="/dialog" component={DialogExample} />
           </main>
       </div>
   </div>
</Router>, document.getElementById('root'))
import React from "react";
import {Link} from 'react-router-dom'

export default function Error() {
  return <section className='error-page section'>
       <div className='error-container'>
          <h1>Oops! it's a dead end</h1>
          <Link to='/' className='btn btn-primary'>
            back home
          </Link>
          <p>
          <h1 class="page-footer font-small special-color-dark pt-4">
    <center className="footer-copyright text-center py-3">© 2020 Developed By:
       <a href="https://www.linkedin.com/in/ravish-ahmad-1a9519111" target="_blank">Ravish Ahmad</a>
      </center>
  </h1>
     </p>
       </div>
  </section>

}

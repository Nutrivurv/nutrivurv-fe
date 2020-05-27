import React from 'react';

const Nav = () => {

  return (
    <div className="navbar navbar-light bg-light flex-column flex-md-row">
        <a className="navbar-brand" href="#">Nutrivurv</a>
      <nav className="col-md-4 col-lg-3 col-xl-2 align-self-center">
        <ul className="nav justify-content-center">
          <li className='col-md-6 nav-item'><a className="nav-link px-0" href='#'>Sign In</a></li>
          <li className='col-md-6 nav-item'><a className="nav-link px-0" href='#'>Sign Up</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
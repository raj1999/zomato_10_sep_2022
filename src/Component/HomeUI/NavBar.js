import React from 'react'
import './Navbar.css'
import flag from '../../images/india.png'
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='address_div'>
                    <div>
                        <a className="navbar-brand" href='/' >Decent App</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <button className='btn location mr-3' >
                        <div className='location-icon'>
                            <i className='fas fa-map-marker-alt' style={{ fontSize: "16px" }}></i>
                        </div>
                        <div className='place'>
                            <span>Hello</span>
                            <span>Select your address</span>
                        </div>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Us</a>
                        </li> */}
                    {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/Action">Action</a>
                                <a className="dropdown-item" href="/AnotherAction">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/something">Something else here</a>
                            </div>
                        </li> */}
                    {/* <li className="nav-item">
                            <a className="nav-link" href="/disabled">Disabled</a>
                        </li>
                    </ul> */}
                    <ul className="navbar-nav ">
                        <li className="nav-item nav-items dropdown">
                            <a className="nav-link  dropdown-toggle" href="/dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                All
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/Action">Action</a>
                                <a className="dropdown-item" href="/AnotherAction">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/something">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-lite " type="submit"><span class="material-icons">
                            search
                        </span></button>
                    </form>
                </div>
                <ul className="navbar-nav ">
                    <li className="nav-item dropdown">
                        <a className="nav-link nav-link-country dropdown-toggle" href="/dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>
                                <span className='lang fw-bold'>
                                    English
                                </span>
                                <span className='abc'>
                                    <span>
                                        <img src={flag} alt="flag" />
                                    </span>
                                    
                                </span>
                            </span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/Action">Action</a>
                            <a className="dropdown-item" href="/AnotherAction">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/something">Something else here</a>
                        </div>
                    </li>
                </ul>
            </nav >
        </div >
    )
}

export default NavBar

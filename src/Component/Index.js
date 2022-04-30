

function Index() {

    
  return (
    <div>

<div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">PATIENT</span>
    </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a>
            <i className='bx bx-book-alt' ></i>
            <span className="links_name">Enquiries</span>
          </a>
        </li>

        <li>
            <a className="active">
              <i className='bx bx-user' ></i>
              <span className="links_name">Profile</span>
            </a>
          </li>

          <li>
            <a>
              <i className='bx bx-coin-stack' ></i>
              <span className="links_name">Payment</span>
            </a>
          </li>

 
        <li>
          <a>
            <i className='bx bx-cog' ></i>
            <span className="links_name">Setting</span>
          </a>
        </li>
        
      </ul>
  </div>
  <section className="home-section">
    <nav>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className='bx bx-search' ></i>
      </div>
    </nav>

    <div className="home-content">
    <h2 className="overview-boxes">My Patient Profile</h2>
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
          <img className="img" src="img/Img2.jpg" alt="img"/>
          <div className="box-topic">Janathan <p>Smith</p></div>
          <p className="status-active">Active</p>
          <div className="contactinfo language">
            <span className="percent">
              <div style={{width:'45%'}}></div>
              </span>
              <span className="text">Storage:45%</span>
              </div>
          </div>
        </div>
        <div className="box">
          <div className="right-side">
          <img className="img" src="img/Img1.jpg" alt="img" />
          
            <div className="box-topic">Kate <p>Smith</p></div>

                <p className="status-active">Active</p>
                <div className="contactinfo language">
                    <span className="percent">
                        <div style={{width:'81%'}}></div>
                    </span>
                    <span className="text">Storage:81%</span>
                </div>
          </div>
          
        </div>
        <div className="box">
          <div className="right-side">
          <img className="img" src="img/OIP.jpg" alt="img" />
            <div className="box-topic">Alexandra <p>Smith</p></div>

                <p className="status-Inactive">InActive</p>
                <div className="contactinfo language">
                    <span className="percent">
                        <div style={{width:'21%'}}></div>
                    </span>
                    <span className="text">Storage:21%</span>
                </div>
          </div>
          
        </div>
        <div className="box">
          <div className="right-side">
          <div className="Profile-Add">
              <p>&#43;</p>
            </div>
            <div className="box-topic">Create New<p>Patient Profile</p></div>
          </div>
          
        </div>
      </div>

      <div className="sales-boxes">
      <nav>
        <div className="footer">
            <p>Available Patient Profile <b>3 of 5</b> </p>

            <div className="contactinfo language">
                <span className="percent">
                    <div style={{width:'81%'}}></div>
                </span>
            </div>
        </div>
        <div className="profile-details">
          <span className="admin_name">Upgrade</span>
        </div>
      </nav>
        
      </div>
    </div>
  </section>
  </div>
  )
}

export default Index
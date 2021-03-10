export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>

        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <a className='navbar-brand page-scroll' href='/'>
            <img src='img/ARC_Compute.svg' style={{"width" : "100%", "marginTop" : "-35%"}} alt="logo" />
          </a>{' '}
          <a className='navbar-brand page-scroll' href='/' style={{"color" : "#5b55b9"}}>
            A R C &nbsp; C O M P U T E
          </a>{' '}
        </div>
        <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <button
                  className='btn btn-custom'
              >
                Contact Us
              </button>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>

        <div className='navbar-header'>
          <a className='navbar-brand page-scroll' href='/' style={{"color" : "#5b55b9"}}>
            A R C &nbsp; C O M P U T E
          </a>{' '}
        </div>
        <div>
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

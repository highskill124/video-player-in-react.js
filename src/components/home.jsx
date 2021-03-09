export const Home = (props) => {
  return (
    <div id='about' style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>GPU Compute.</h2>
              <h2>Affordable Cost.</h2>
              <br/>
              <h3>Save up to 50% on your GPU Compute costs and easily scale as you grow.</h3>
              <br/>
              <h3>Over-paying for compute cost is so 2020.</h3>
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

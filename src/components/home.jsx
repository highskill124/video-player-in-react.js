export const Home = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-5'>
            <div className='about-text'>
              <br/>
              <br/>
              <h2>GPU Compute.</h2>
              <h2>Affordable Cost.</h2>
              <br/>
              <h3>Save up to 50% on your GPU Compute costs and easily scale as you grow.</h3>
              <br/>
              <h3>Over-paying for compute cost is so 2020.</h3>
            </div>
          </div>
          <div className='col-xs-12 col-md-7 intro'>
            <video autoPlay loop={true} className='video'>
              <source src="img/streamingapp.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

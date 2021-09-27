import '../styles/Footer.css'

function Footer() {
    return (
      <div className="footer">
        <div className="logoDiv">
          <img className="logo" src={'/moonraker-horizontal.jpeg'}/>
        </div>
        <div className="links">

          <a className="l-link" href='https://www.instagram.com/moonraker.media/?hl=en' target="_blank">
            <img className='socialImg' src={'/Social-Icons-INSTGRAM.png'}/>
          </a>
          <a className="m-link" href='https://vimeo.com/user128951689' target="_blank">
            <img className='socialImg' src={'/Social-Icons-VIMEO.png'}/>
          </a>
          <a href='https://www.youtube.com/channel/UCS0ETeAkqiuEMFsZ5hrxXMQ' target="_blank">
            <img className='socialImg' src={'/Social-Icons-YOUTUBE.png'}/>
          </a>

        </div>
        <div className="address">
          <span>Lauren@moonrakerMedia.co</span>
          <span>Colorado Springs, Co</span>
          <span>(845) 636 0824</span>
        </div>
  
      </div>
    );
  }
  
  export default Footer;
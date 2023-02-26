import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
        <div className='text-box'>
            <div className="logo-element">
            <img className='logo' src="https://res.cloudinary.com/dqy7m95yz/image/upload/v1677352785/icon2_1_pdxuih.png" alt=''/>
            </div>
              <div className='about-section'>
                <div className='about'>About</div>
                <div className='about-content'><a href='#'>Who Are We?</a></div>
                <div className='about-content'><a href='#'>Blog</a></div>
                <div className='about-content'><a href='#'>Contact Us</a></div>
                <div className='about-content'><a href='#'>Work With Us</a></div>
              </div>

              <div className='for-hawkers'>
                <div className='about'>For Hawkers</div>
                <div className='about-content'><a href='#'>Your Profile</a></div>
                <div className='about-content'><a href='#'>Edit</a></div>
                <div className='about-content'><a href='#'>Report Problem</a></div>
             </div>

             <div className='social-links'>
                <div className='about'>Social Links</div>
                <div className='about-content'><a href='#'>Twitter</a></div>
                <div className='about-content'><a href='#'>LinkedIn</a></div>
                <div className='about-content'><a href='#'>GitHub</a></div>
                <div className='about-content'><a href='#'>Facebook</a></div>
             </div>
        </div>

        <div className='copyright'>
        <dic className='copyright-text'>All trademarks are properties of their respective owners. 2023 © Title™ Ltd. All rights reserved.</dic>
        </div>
    </div>
  );
}

export default Footer;

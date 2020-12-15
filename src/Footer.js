import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Footer() {
    return (
        <div className='footer_main'>
            <div className="footer">
                <div className='footer_amazonImage'>
                    <img src="/images/white-amazon.png" alt="Amazon Logo"/>
                </div>

                <div className="footer_contact">
                    <h3>Need Help?</h3>
                    <p className='call'>Call us</p>
                    <span className='footer_check'><CheckCircleOutlineIcon className='check'/><p>+237 650 50 12 79</p></span>
                    <span className='footer_check'><CheckCircleOutlineIcon className='check'/><p>+237 672 19 61 30</p></span>
                    <br/>
                    <h3>You can write to us at</h3>
                    <p>amazon-clone@info</p>
                </div>

                <div className="footer_subscribe">
                    <h3>Subscribe to Our Newsletters</h3>
                    <input type="text"/>
                    <button>Subscribe</button>
                </div>

                <div className="footer_socialMedia">
                    <h3>Reach us at</h3>
                    <div className="footer_icons">
                        <FacebookIcon className='check' />
                        <TwitterIcon className='check' />
                        <InstagramIcon className='check' />
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                    &copy Amazon-clone Njimukara Brian
            </div>
        </div>
    )
}

export default Footer

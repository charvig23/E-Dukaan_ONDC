import React from 'react';
import './Footer.css'; 

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-Footer" style={{color:'white'}}>© {new Date().getFullYear()} E-Dukaan</span>
        </div>
      </footer>
    );
  }
}

export default Footer;

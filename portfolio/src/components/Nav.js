import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navigation">
      <h1 className="title">Haleigh Rzonca</h1>
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
        About
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
        Contact
      </a>
      <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
        Portfolio
      </a>
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
        Resume
      </a>
      </div>
  );
}

export default NavTabs;
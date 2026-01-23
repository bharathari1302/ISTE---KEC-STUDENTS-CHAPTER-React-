import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-5 mt-5 border-top border-secondary">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-6 col-lg-4">
                        <h3 className="h4 text-uppercase fw-bold mb-3 border-bottom border-primary d-inline-block pb-1">
                            ISTE - KEC
                        </h3>
                        <p className="text-secondary">Empowering future engineers with innovation and leadership.</p>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* Placeholder for links if needed */}
                    </div>
                    <div className="col-lg-4 d-flex justify-content-lg-end align-items-start gap-3">
                        <a href="https://www.instagram.com/iste_kec_" className="text-secondary fs-4 hover-primary" target="_blank" rel="noreferrer">
                            <i className='bx bxl-instagram'></i>
                        </a>
                        <a href="mailto:istestudentschapterkec@gmail.com" className="text-secondary fs-4 hover-primary">
                            <i className='bx bx-envelope'></i>
                        </a>
                        <a href="#" className="text-secondary fs-4 hover-primary">
                            <i className='bx bxl-linkedin'></i>
                        </a>
                    </div>
                </div>
                <div className="text-center pt-4 mt-4 border-top border-secondary text-secondary small">
                    &copy; 2026 ISTE-KEC Team. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { RiFacebookFill, RiTwitterXFill } from 'react-icons/ri';
// import logo from '../assets/image-removebg-preview.png'
// import bgfooter from '../assets/footer_bg.jpg'
import Container from './Container';
import Logo from './Logo';

const Footer = () => {
    return (
        <>
            <footer className="border bg-black lg:bg-[url('assets/footer_bg.jpg')]  bg-no-repeat bg-cover bg-center  bg-blend-overlay">
                <Container>
                    {/* Social Media Follow Section */}
                    <div className="footer sm:footer-horizontal   text-neutral-content items-center pl-4  py-4 md:py-6 ">
                        <aside className="grid-flow-col   ">
                            <Logo />
                            {/* <img className='h-9 md:h-10 lg:14  ' src={logo} alt="" /> */}
                        </aside>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end items-center">
                            <p>Follow Us</p>
                            <a><RiFacebookFill /></a>
                            <a><RiTwitterXFill /></a>
                            <a><FaInstagram /></a>
                            <a><FaLinkedinIn /></a>
                        </nav>
                    </div>

                    {/* Devider */}
                    <div className=' h-0.5 bg-gray-700  mx-auto'></div>

                    {/* Links Section */}
                    <div className="footer  sm:footer-horizontal   text-white  pl-4 py-10">

                        <nav>
                            <h6 className="footer-title">Popular Search</h6>
                            <a className="link link-hover">Apartment for Sale</a>
                            <a className="link link-hover">Apartment for Rent</a>
                            <a className="link link-hover">Offices for Sale</a>
                            <a className="link link-hover">Offices for Rent</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Quick Links</h6>
                            <a className="link link-hover">Terms of Use</a>
                            <a className="link link-hover">Privacy Policy</a>
                            <a className="link link-hover">Our Services </a>
                            <a className="link link-hover">FAQs</a>

                        </nav>
                        <nav>
                            <h6 className="footer-title">Discovery</h6>
                            <a className="link link-hover">Uttara</a>
                            <a className="link link-hover">Gulshan</a>
                            <a className="link link-hover">Banani</a>
                            <a className="link link-hover">Bashundhara</a>

                        </nav>
                        <form>
                            <h6 className="footer-title">Keep Yourself Up to Date</h6>
                            <fieldset className="w-80">
                                <label>Enter your email address</label>
                                <div className="join">
                                    <input
                                        type="text"
                                        placeholder="Your email"
                                        className="input input-bordered join-item" />
                                    <button className="btn btn-primary join-item text-white">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    {/* Devider */}
                    <div className=' h-0.5 bg-gray-700  mx-auto'></div>
                    {/* Copy right Section */}
                    <div className="footer sm:footer-horizontal   text-neutral-content py-10 pl-4 ">
                        <aside className="grid-flow-col  items-center">
                            <p><small>Copyright © {new Date().getFullYear()} - All right reserved</small></p>
                        </aside>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <a><small>Privacy</small></a> <div className='w-1 my-auto h-1 bg-gray-700 rounded-full'></div>
                            <a><small>Terms</small></a><div className='w-1 h-1 my-auto bg-gray-700 rounded-full'></div>
                            <a><small>Sitemap</small></a>
                        </nav>
                    </div>
                </Container>

            </footer>

        </>
    );
};

export default Footer;
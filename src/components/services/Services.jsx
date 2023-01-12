import React from 'react';
import './services.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>
    
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">A<br />Service Title</h3>
                </div>
                <span className="services__button">
                    View More{" "}
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className="services__modal">
                    <div className="services__modal-content">
                        <HiX className="services__modal-close" />
                        <h3 className="services__modal-title">A Service Title</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit incidunt fugiat ipsa autem ipsum, voluptatem sunt facere error dolore corporis cumque quia laboriosam.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">B<br />Service Title</h3>
                </div>
                <span className="services__button">
                    View More{" "}
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className="services__modal">
                    <div className="services__modal-content">
                        <HiX className="services__modal-close" />
                        <h3 className="services__modal-title">B Service Title</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit incidunt fugiat ipsa autem ipsum, voluptatem sunt facere error dolore corporis cumque quia laboriosam.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">C<br />Service Title</h3>
                </div>
                <span className="services__button">
                    View More{" "}
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className="services__modal">
                    <div className="services__modal-content">
                        <HiX className="services__modal-close" />
                        <h3 className="services__modal-title">C Service Title</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit incidunt fugiat ipsa autem ipsum, voluptatem sunt facere error dolore corporis cumque quia laboriosam.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Services;
import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

class Team extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>About</h2>
                            <ol>
                                <li><Link to='/'>Home</Link></li>
                                <li>Team</li>
                            </ol>
                        </div>

                    </div>
                </section>


                <section id="team" class="team section-bg">
                    <div class="container">

                        <div class="section-title" data-aos="fade-up">
                            <h2>Our <strong>Team</strong></h2>
                            <p>Our Team comprises of self motivated minded crew, passionated to problem solving within the contrains of available resources.
                                Everyone pictured in the section is thr Head of Our Technical Department, representing individual members of the department.
                              </p>
                        </div>

                        <div class="row">

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="team-1" />
                                        <div class="social">
                                            <Link to='/about'><i class="bi bi-twitter"></i></Link>
                                            <Link to='/about'><i class="bi bi-facebook"></i></Link>
                                            <Link to='/about'><i class="bi bi-instagram"></i></Link>
                                            <Link to='/about'><i class="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="100">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="team-2" />
                                        <div class="social">
                                            <Link to='/about'><i class="bi bi-twitter"></i></Link>
                                            <Link to='/about'><i class="bi bi-facebook"></i></Link>
                                            <Link to='/about'><i class="bi bi-instagram"></i></Link>
                                            <Link to='/about'><i class="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="200">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="team-3" />
                                        <div class="social">
                                           <Link to='/about'><i class="bi bi-twitter"></i></Link>
                                            <Link to='/about'><i class="bi bi-facebook"></i></Link>
                                            <Link to='/about'><i class="bi bi-instagram"></i></Link>
                                            <Link to='/about'><i class="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="300">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="team-4" />
                                        <div class="social">
                                            <Link to='/about'><i class="bi bi-twitter"></i></Link>
                                            <Link to='/about'><i class="bi bi-facebook"></i></Link>
                                            <Link to='/about'><i class="bi bi-instagram"></i></Link>
                                            <Link to='/about'><i class="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                    <Footer />

            </div>
        )
    }
}

export default Team;
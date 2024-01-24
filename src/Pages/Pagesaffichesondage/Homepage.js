import React, {useState, useEffect}from 'react';
import axios from 'axios'

// import "./style/bootstrap.css"
// import "./style/responsive.css"
// import "./style/font-awesome.min.css"




export default function Homepage(){
    return(
        <div>
          <div class="hero_area">
        <div class="hero_bg_box">
          <div class="bg_img_box">
            <img src="images/hero-bg.png" alt=""/>
          </div>
        </div>
          
            <header class="header_section">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="index.html">
                  <span>
                    RxDForm
                  </span>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav  ">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html"> About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="service.html">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> Login</a>
                    </li>
                    <form class="form-inline">
                      <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
        
          <section class="slider_section ">
            <div id="customCarousel1" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container ">
                    <div class="row">
                      <div class="col-md-6 ">
                        <div class="detail-box">
                          <h1>
                            Bienvenue à la Plateforme de Sondage 
                            Fiable et Interactif
                          </h1>
                          <p>
                            La plateforme de sondage a pour objectif principal de simplifier et d'optimiser le processus de collecte de données en offrant une interface conviviale permettant la création et la diffusion faciles de sondages personnalisés. Elle vise à garantir la pertinence des données collectées, la diffusion multi-canal pour une portée étendue, la collecte en temps réel pour des résultats instantanés, une analyse automatisée des réponses, une personnalisation avancée, et la sécurité des données. En favorisant l'accessibilité et la convivialité, la plateforme aspire à fournir une expérience complète, répondant aux besoins évolutifs des utilisateurs tout en assurant la confidentialité des informations collectées.                    </p>
                          <div class="btn-box">
                            <a href="" class="btn1">
                              Créez votre sondage
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="img-box">
                          <img src="images/slider-img.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div class="container ">
                    <div class="row">
                      <div class="col-md-6 ">
                        <div class="detail-box">
                          <h1>
                            Bienvenue à la Plateforme de Sondage 
                            Fiable et Interactif
                          </h1>
                          <p>
                            La plateforme de sondage a pour objectif principal de simplifier et d'optimiser le processus de collecte de données en offrant une interface conviviale permettant la création et la diffusion faciles de sondages personnalisés. Elle vise à garantir la pertinence des données collectées, la diffusion multi-canal pour une portée étendue, la collecte en temps réel pour des résultats instantanés, une analyse automatisée des réponses, une personnalisation avancée, et la sécurité des données. En favorisant l'accessibilité et la convivialité, la plateforme aspire à fournir une expérience complète, répondant aux besoins évolutifs des utilisateurs tout en assurant la confidentialité des informations collectées.                    </p>
                          <div class="btn-box">
                            <a href="" class="btn1">
                              Créez votre sondage
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="img-box">
                          <img src="images/slider-img.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container ">
                    <div class="row">
                      <div class="col-md-6 ">
                        <div class="detail-box">
                          <h1>
                            Bienvenue à la Plateforme de Sondage 
                            Fiable et Interactif
                          </h1>
                          <p>
                            La plateforme de sondage a pour objectif principal de simplifier et d'optimiser le processus de collecte de données en offrant une interface conviviale permettant la création et la diffusion faciles de sondages personnalisés. Elle vise à garantir la pertinence des données collectées, la diffusion multi-canal pour une portée étendue, la collecte en temps réel pour des résultats instantanés, une analyse automatisée des réponses, une personnalisation avancée, et la sécurité des données. En favorisant l'accessibilité et la convivialité, la plateforme aspire à fournir une expérience complète, répondant aux besoins évolutifs des utilisateurs tout en assurant la confidentialité des informations collectées.                    </p>
                          <div class="btn-box">
                            <a href="" class="btn1">
                              Créez votre sondage
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="img-box">
                          <img src="images/slider-img.png" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol class="carousel-indicators">
                <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
              </ol>
            </div>

          </section>
        </div>
          
  <section class="client_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center psudo_white_primary mb_45">
        <h2>
         
        </h2>
      </div>
      <div class="carousel-wrap ">
        <div class="owl-carousel client_owl-carousel">
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="images/client1.jpg" alt="" class="box-img"/>
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      LusDen
                    </h6>
                    <p>
                      magna aliqua. Ut
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="images/client2.jpg" alt="" class="box-img"/>
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      Zen Court
                    </h6>
                    <p>
                      magna aliqua. Ut
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="images/client1.jpg" alt="" class="box-img"/>
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      LusDen
                    </h6>
                    <p>
                      magna aliqua. Ut
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="img-box">
                <img src="images/client2.jpg" alt="" class="box-img"/>
              </div>
              <div class="detail-box">
                <div class="client_id">
                  <div class="client_info">
                    <h6>
                      Zen Court
                    </h6>
                    <p>
                      magna aliqua. Ut
                    </p>
                  </div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_contact">
            <h4>
              Address
            </h4>
            <div class="contact_link_box">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div class="info_social">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col">
          <div class="info_detail">
            <h4>
              Info
            </h4>
            <p>
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto info_col">
          <div class="info_link_box">
            <h4>
              Links
            </h4>
            <div class="info_links">
              <a class="active" href="index.html">
                Home
              </a>
              <a class="" href="about.html">
                About
              </a>
              <a class="" href="service.html">
                Services
              </a>
              <a class="" href="why.html">
                Why Us
              </a>
              <a class="" href="team.html">
                Team
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

 
  <section class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/"></a>
      </p>
    </div>
  </section>

        </div>
    )
}
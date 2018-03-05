import React from 'react';
import './Services.css';

function Services () {
    return (
        <div className="Services">
            <section id="services">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Services</h2>
                <h3 class="section-subheading text-muted">We always do our best.</h3>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Cloud Funding</h4>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-database fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Big Data</h4>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Block Chain</h4>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
  }

  export default Services
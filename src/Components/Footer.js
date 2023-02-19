import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer class="footer-distributed">
          <div class="footer-left">
            <h3>
              Thank <span> You!</span>
            </h3>
            <p class="footer-company-about">
              Thank you for taking the time to visit my profile. I truly
              appreciate your interest and the opportunity to share my
              background and experience with you. Your time is valuable, and I
              am grateful that you have chosen to spend some of it getting to
              know me.
            </p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>Contact Me -</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+91-8174979703</p>
            </div>
            <div>
              <i class="fab fa-whatsapp"></i>
              <p>
              <a
                href="https://wa.me/+918174979703"
              >
                whatsapp
              </a>
              </p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:pankajpal096@gmail.com">
                  pankajpal096@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span>Let's Connect</span>
              Let's connect for fun together , I look forward to hearing back
              from you and connecting soon.
            </p>

            <div class="footer-icons">
              <a
                href="https://instagram.com/pankajpal._?igshid=ZmZhODViOGI="
                className="socialicon"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/pankaj_pal096"
                className="socialicon"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                className="socialicon"
                href="https://www.linkedin.com/in/pankaj-fwd/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Pankaj-FWD/" className="socialicon">
                <i class="fab fa-github"></i>
              </a>
            </div>
            <p class="footer-company-name">All rights reserved © 2023</p>
          </div>
        </footer>
      </>
    );
  }
}

import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <div className="Footer">
            <footer class="bg-light">
                <div class="container">
                    <div class="row">
                    <div class="col-md-4">
                        <span class="copyright">Copyright &copy; Whateveruwant. 2018</span>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                            <a href="jsx-a11y/href-no-hash">
                            <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="jsx-a11y/href-no-hash">
                            <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="jsx-a11y/href-no-hash">
                            <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-inline quicklinks">
                        <li class="list-inline-item">
                            <a href="jsx-a11y/href-no-hash">Privacy Policy</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="jsx-a11y/href-no-hash">Terms of Use</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
  }

  export default Footer
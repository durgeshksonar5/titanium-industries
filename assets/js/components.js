const HEADER_HTML = `<!-- Header Start -->
    <header class="main-header">
        <div class="header-sticky">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <!-- Logo Start -->
                    <a class="navbar-brand" href="./">
						<img src="assets/images/logo/logo.svg" alt="Logo">
					</a>
                    <!-- Logo End -->

                    <!-- Main Menu Start -->
                    <div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item submenu"><a class="nav-link" href="./">Home</a>
                                    <ul>
                                        <li class="nav-item"><a class="nav-link" href="index.html">Home - Main</a></li>
                                        <li class="nav-item"><a class="nav-link" href="index-video.html">Home - Video</a></li>
                                        <li class="nav-item"><a class="nav-link" href="index-slider.html">Home - Slider</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="about.html">About Us</a>
                                    <li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>
                                    <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                                    <li class="nav-item submenu"><a class="nav-link" href="#">Pages</a>
                                        <ul>
                                            <li class="nav-item"><a class="nav-link" href="service/service-single.html">Service Details</a></li>
                                            <li class="nav-item"><a class="nav-link" href="blog-single.html">Blog Details</a></li>
                                            <li class="nav-item"><a class="nav-link" href="projects.html">Our Projects</a></li>
                                            <li class="nav-item"><a class="nav-link" href="project-single.html">Project details</a></li>
                                            <li class="nav-item"><a class="nav-link" href="team.html">Our Team</a></li>
                                            <li class="nav-item"><a class="nav-link" href="team-single.html">Team Details</a></li>
                                            <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing Plan</a></li>
                                            <li class="nav-item"><a class="nav-link" href="testimonials.html">Testimonials</a></li>
                                            <li class="nav-item"><a class="nav-link" href="image-gallery.html">Image Gallery</a></li>
                                            <li class="nav-item"><a class="nav-link" href="video-gallery.html">Video Gallery</a></li>
                                            <li class="nav-item"><a class="nav-link" href="faqs.html">FAQs</a></li>
                                            <li class="nav-item"><a class="nav-link" href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>

                        <!-- Header Contact Btn Start -->
                        <div class="header-contact-box">
                            <!-- Header Contact Item Start -->
                            <div class="header-contact-item">
                                <div class="icon-box">
                                    <img src="assets/images/icons/icon-phone.svg" alt="">
                                </div>
                                <div class="header-contact-item-content">
                                    <p>call us now</p>
                                    <h3><a href="tel:987965698">+1.987 965 698</a></h3>
                                </div>
                            </div>
                            <!-- Header Contact Item End -->

                            <!-- Header Btn Start -->
                            <div class="header-btn">
                                <a href="contact.html" class="btn-default">Get Started</a>
                            </div>
                            <!-- Header Btn End -->
                        </div>
                        <!-- Header Contact Btn End -->
                    </div>
                    <!-- Main Menu End -->
                    <div class="navbar-toggle"></div>
                </div>
            </nav>
            <div class="responsive-menu"></div>
        </div>
    </header>
    <!-- Header End -->`;
const FOOTER_HTML = `<!-- Footer Start -->
    <footer class="main-footer dark-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Footer Header Start -->
                    <div class="footer-header">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Subscribe our newsletters</h2>
                            <p>“Our Community of 5000+ Expert Farmers Today!"</p>
                        </div>
                        <!-- Section Title End -->

                        <!-- Footer Newsletter Form Start -->
                        <div class="footer-newsletter-form">
                            <form id="newslettersForm" action="#" method="POST">
                                <div class="form-group">
                                    <input type="email" name="mail" class="form-control" id="mail" placeholder="Enter your email" required>
                                    <button type="submit" class="btn-default">subscribe</button>
                                </div>
                            </form>
                        </div>
                        <!-- Footer Newsletter Form End -->
                    </div>
                    <!-- Footer Header End -->
                </div>

                <div class="col-lg-4">
                    <!-- About Footer Start -->
                    <div class="about-footer">
                        <!-- Footer Logo Start -->
                        <div class="footer-logo">
                            <img src="assets/images/logo/footer-logo.svg" alt="">
                        </div>
                        <!-- Footer Logo End -->

                        <!-- About Footer Content Start -->
                        <div class="about-footer-content">
                            <p>We promote sustainable farming and organic produce to ensure a healthier, greener, and eco-friendly future.</p>
                        </div>
                        <!-- About Footer Content End -->

                        <!-- Footer Social Link Start -->
                        <div class="footer-social-links">
                            <ul>
                                <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <!-- Footer Social Link End -->
                    </div>
                    <!-- About Footer End -->
                </div>

                <div class="col-lg-2 col-md-3">
                    <!-- Footer Links Start -->
                    <div class="footer-links">
                        <h3>quick links</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="about.html">about us</a></li>
                            <li><a href="service.html">services</a></li>
                            <li><a href="projects.html">projects</a></li>
                            <li><a href="blog.html">Blog</a></li>
                        </ul>
                    </div>
                    <!-- Footer Links End -->
                </div>

                <div class="col-lg-3 col-md-4">
                    <!-- Footer Links Start -->
                    <div class="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="service/service-single.html">Organic Crop Cultivation</a></li>
                            <li><a href="service/service-single.html">Eco-Friendly Fertilization</a></li>
                            <li><a href="service/service-single.html">Farm-to-Table Solutions</a></li>
                            <li><a href="service/service-single.html">Biodiversity Preservation</a></li>
                            <li><a href="service/service-single.html">Agroforestry Development</a></li>
                        </ul>
                    </div>
                    <!-- Footer Links End -->
                </div>

                <div class="col-lg-3 col-md-5">
                    <!-- Footer Contact Box Start -->
                    <div class="footer-links footer-contact-box">
                        <h3>contact us</h3>
                        <ul>
                            <li><i class="fa-solid fa-phone"></i><a href="tel:987965698">+1.987 965 698</a></li>
                            <li><i class="fa-solid fa-envelope"></i><a href="mailto:info@domainname.com">info@domainname.com</a></li>
                            <li><i class="fa-solid fa-location-dot"></i>123 Greenfield Lane W1A 1AA UK </li>
                        </ul>
                    </div>
                    <!-- Footer Contact Box End -->
                </div>

                <div class="col-lg-12">
                    <!-- Copyright Text Start -->
                    <div class="footer-copyright-text">
                        <p>Copyright © 2025 All Rights Reserved.</p>
                    </div>
                    <!-- Copyright Text End -->
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->`;

(function() {
    const isSubfolder = window.location.pathname.includes('/service/');
    const prefix = isSubfolder ? '../' : '';

    function fixPaths(html) {
        return html.replace(/(href|src)="([^#][^\"]*)"/g, (match, attr, path) => {
            if (path.startsWith('http') || path.startsWith('tel:') || path.startsWith('mailto:') || path.startsWith('javascript:')) return match;
            if (path.startsWith('../')) return match;
            return `${attr}="${prefix}${path}"`;
        });
    }

    const headerHTML = fixPaths(HEADER_HTML);
    const footerHTML = fixPaths(FOOTER_HTML);

    document.addEventListener('DOMContentLoaded', () => {
        const headerPlaceholder = document.querySelector('header.main-header');
        if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;
        
        const footerPlaceholder = document.querySelector('footer.main-footer');
        if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
        
        // Set active link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            let href = link.getAttribute('href');
            if (href && (href.endsWith(currentPath) || (currentPath === '' && href.endsWith('index.html')))) {
                link.parentElement.classList.add('active');
            }
        });
    });
})();

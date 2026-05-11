const HEADER_HTML = `<!-- Header Start -->
    <header class="main-header">
        <div class="header-sticky">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <!-- Logo Start -->
                    <a class="navbar-brand" href="./">
						<img src="assets/images/update-logo-transferent.png" alt="Logo">
					</a>
                    <!-- Logo End -->

                    <!-- Main Menu Start -->
                    <div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item"><a class="nav-link" href="./">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                                <li class="nav-item submenu"><a class="nav-link" href="service.html">Services</a>
                                    <ul>
                                        <li class="nav-item"><a class="nav-link" href="service.html">All Services</a></li>
                                        <li class="nav-item"><a class="nav-link" href="service/service-single.html">VMC Machining</a></li>
                                        <li class="nav-item"><a class="nav-link" href="service/service-single.html">CNC Turning</a></li>
                                        <li class="nav-item"><a class="nav-link" href="service/service-single.html">Oil & Gas Components</a></li>
                                        <li class="nav-item"><a class="nav-link" href="service/service-single.html">Robotics Fixtures</a></li>
                                        <li class="nav-item"><a class="nav-link" href="service/service-single.html">Automobile Parts</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="image-gallery.html">Gallery</a></li>
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
                                    <h3><a href="tel:9665771023">+91 96657 71023</a></h3>
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
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Stay Updated with Industry News</h2>
                            <p>“Join our network of 500+ satisfied industrial clients today!"</p>
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
                            <img src="assets/images/update-logo-transferent.png" alt="">
                        </div>
                        <!-- Footer Logo End -->

                        <!-- About Footer Content Start -->
                        <div class="about-footer-content">
                            <p>Titanium Industries specializes in precision VMC and CNC machining, serving the Oil, Robotics, and Automotive sectors with excellence.</p>
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
                            <li><a href="image-gallery.html">gallery</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </div>
                    <!-- Footer Links End -->
                </div>

                <div class="col-lg-3 col-md-4">
                    <!-- Footer Links Start -->
                    <div class="footer-links">
                        <h3>Our Services</h3>
                        <ul>
                            <li><a href="service/service-single.html">VMC Machining</a></li>
                            <li><a href="service/service-single.html">CNC Turning Solutions</a></li>
                            <li><a href="service/service-single.html">Oil & Gas Components</a></li>
                            <li><a href="service/service-single.html">Robotics BIW Fixtures</a></li>
                            <li><a href="service/service-single.html">Precision Engineering</a></li>
                        </ul>
                    </div>
                    <!-- Footer Links End -->
                </div>

                <div class="col-lg-3 col-md-5">
                    <!-- Footer Contact Box Start -->
                    <div class="footer-links footer-contact-box">
                        <h3>contact us</h3>
                        <ul>
                            <li><i class="fa-solid fa-phone"></i><a href="tel:9665771023">+91 96657 71023</a></li>
                            <li><i class="fa-solid fa-envelope"></i><a href="mailto:titaniumindustries21@gmail.com">titaniumindustries21@gmail.com</a></li>
                            <li><i class="fa-solid fa-location-dot"></i>Sr. No 54, Plot No-83, Swami V H SOCY Industrial Estate, Pune - 411028</li>
                        </ul>
                    </div>
                    <!-- Footer Contact Box End -->
                </div>

                <div class="col-lg-12">
                    <!-- Copyright Text Start -->
                    <div class="footer-copyright-text">
                        <p>Copyright © 2026 Titanium Industries. All Rights Reserved.</p>
                    </div>
                    <!-- Copyright Text End -->
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->`;

(function () {
  const isSubfolder = window.location.pathname.includes("/service/");
  const prefix = isSubfolder ? "../" : "";

  function fixPaths(html) {
    return html.replace(/(href|src)="([^#][^\"]*)"/g, (match, attr, path) => {
      if (
        path.startsWith("http") ||
        path.startsWith("tel:") ||
        path.startsWith("mailto:") ||
        path.startsWith("javascript:")
      )
        return match;
      if (path.startsWith("../")) return match;
      return `${attr}="${prefix}${path}"`;
    });
  }

  const headerHTML = fixPaths(HEADER_HTML);
  const footerHTML = fixPaths(FOOTER_HTML);

  document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.querySelector("header.main-header");
    if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;

    const footerPlaceholder = document.querySelector("footer.main-footer");
    if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

    // Set active link
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach((link) => {
      let href = link.getAttribute("href");
      if (
        href &&
        (href.endsWith(currentPath) ||
          (currentPath === "" && href.endsWith("index.html")))
      ) {
        link.parentElement.classList.add("active");
      }
    });
  });
})();

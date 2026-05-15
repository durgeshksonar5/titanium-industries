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
                                        <li><a href="services/vmc-machining.html">VMC Machining</a></li>
                                        <li><a href="services/cnc-turning-solutions.html">CNC Turning Solutions</a></li>
                                        <li><a href="services/oil-and-gas-components.html">Oil & Gas Components</a></li>
                                        <li><a href="services/robotics-biw-fixtures.html">Robotics BIW Fixtures</a></li>
                                        <li><a href="services/automobile-components.html">Automobile Components</a></li>
                                        <li><a href="services/agricultural-machinery.html">Agricultural Machinery</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="image-gallery.html">Gallery</a></li>
                                <li class="nav-item"><a class="nav-link" href="clients.html">Clients</a></li>
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
                    
                    <!-- Mobile Menu Toggle Start -->
                    <button class="navbar-toggler" type="button" id="mobile-menu-trigger">
                        <span class="navbar-toggler-icon">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </span>
                    </button>
                    <!-- Mobile Menu Toggle End -->
                </div>
            </nav>
            
            <!-- Mobile Menu Sidebar Start -->
            <div class="mobile-menu-wrapper">
                <div class="mobile-menu-overlay" id="mobile-menu-overlay"></div>
                <div class="mobile-menu-content">
                    <div class="mobile-menu-header">
                        <div class="mobile-logo">
                            <img src="assets/images/update-logo-transferent.png" alt="Logo">
                        </div>
                        <button class="close-menu" id="mobile-menu-close">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="mobile-menu-body">
                        <div id="mobile-nav"></div>
                    </div>
                    <div class="mobile-menu-footer">
                        <div class="mobile-contact">
                            <p>Get in touch</p>
                            <a href="tel:9665771023"><i class="fa-solid fa-phone"></i> +91 96657 71023</a>
                        </div>
                        <div class="mobile-social">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Mobile Menu Sidebar End -->
        </div>
    </header>
    <!-- Header End -->`;

const FOOTER_HTML = `<!-- Footer Start -->
    <footer class="main-footer dark-section">
        <div class="container">
            <div class="row">

                <div class="col-lg-5 col-md-12 mb-5 mb-lg-0">
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
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <!-- Footer Social Link End -->
                    </div>
                    <!-- About Footer End -->
                </div>

                <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                    <!-- Footer Links Start -->
                    <div class="footer-links">
                        <h3>quick links</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="about.html">about us</a></li>
                            <li><a href="service.html">services</a></li>
                            <li><a href="image-gallery.html">gallery</a></li>
                            <li><a href="clients.html">clients</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </div>
                    <!-- Footer Links End -->
                </div>


                <div class="col-lg-4 col-md-6">
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
                        <p style="display: block; line-height: 1.8;">Copyright © 2026 Titanium Industries. All Rights Reserved. <br> Designed & Developed by  <a href="#" style="color: var(--accent-color); font-weight: 700; display: inline-flex; align-items: center; gap: 8px; vertical-align: middle;"> <img src="assets/images/hds-logo.png" alt="HDS Logo" style="height: 28px; width: auto;"></a></p>
                    </div>
                    <!-- Copyright Text End -->
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->`;

(function () {
  const isSubfolder = window.location.pathname.includes("/services/") || window.location.pathname.includes("/service/");
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
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const isServicePage = window.location.pathname.includes("/services/");

    document.querySelectorAll(".nav-link, .submenu li a").forEach((link) => {
      let href = link.getAttribute("href");
      if (href) {
        // Direct match
        if (href.endsWith(currentPath) || (currentPath === "" && href.endsWith("index.html"))) {
          link.parentElement.classList.add("active");
          
          // If it's a dropdown item, also highlight the parent main menu item
          const parentSubmenu = link.closest(".submenu");
          if (parentSubmenu) {
            parentSubmenu.classList.add("active");
          }
        }
        
        // Highlight "Services" if on any service detail page
        if (isServicePage && link.innerText.trim().toLowerCase() === "services") {
           link.parentElement.classList.add("active");
        }
      }
    });

    // Initialize Mobile Menu Logic
    const mobileMenuTrigger = document.getElementById("mobile-menu-trigger");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const mobileNav = document.getElementById("mobile-nav");
    const desktopMenu = document.getElementById("menu");

    if (mobileMenuTrigger && desktopMenu && mobileNav) {
      // Clone desktop menu to mobile for zero-redundancy updates
      const mobileMenuContent = desktopMenu.cloneNode(true);
      mobileMenuContent.removeAttribute("id");
      mobileMenuContent.classList.remove("navbar-nav");
      mobileMenuContent.classList.add("mobile-nav-list");

      // Identify submenus in cloned structure
      mobileMenuContent.querySelectorAll("li").forEach((li) => {
        if (li.querySelector("ul")) {
          li.classList.add("submenu");
        }
      });

      mobileNav.appendChild(mobileMenuContent);

      const openMenu = () => {
        mobileMenuTrigger.classList.add("active");
        mobileMenuWrapper.classList.add("active");
        document.body.classList.add("menu-open");
      };

      const closeMenu = () => {
        mobileMenuTrigger.classList.remove("active");
        mobileMenuWrapper.classList.remove("active");
        document.body.classList.remove("menu-open");
      };

      mobileMenuTrigger.addEventListener("click", openMenu);
      if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMenu);
      if (mobileMenuOverlay)
        mobileMenuOverlay.addEventListener("click", closeMenu);

      // Handle submenu accordion toggling
      mobileMenuContent.querySelectorAll(".submenu > a").forEach((link) => {
        link.addEventListener("click", (e) => {
          const parentLi = link.parentElement;
          const subMenu = parentLi.querySelector("ul");
          if (subMenu) {
            e.preventDefault();
            const isOpen = parentLi.classList.contains("open");

            // Close other open submenus if any (optional, for accordion feel)
            mobileMenuContent
              .querySelectorAll(".submenu.open")
              .forEach((openLi) => {
                if (openLi !== parentLi) {
                  openLi.classList.remove("open");
                  openLi.querySelector("ul").style.display = "none";
                }
              });

            if (isOpen) {
              parentLi.classList.remove("open");
              subMenu.style.display = "none";
            } else {
              parentLi.classList.add("open");
              subMenu.style.display = "block";
            }
          }
        });
      });

      // Close menu when clicking a page link
      mobileMenuContent.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          if (!link.parentElement.classList.contains("submenu")) {
            closeMenu();
          } else if (
            link.getAttribute("href") &&
            link.getAttribute("href") !== "#"
          ) {
            setTimeout(closeMenu, 150);
          }
        });
      });
    }
  });
})();

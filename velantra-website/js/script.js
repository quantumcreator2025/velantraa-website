/* Global Styles */
:root {
    --primary-color: #2B2D42;
    --secondary-color: #8D99AE;
    --accent-color: #EF233C;
    --light-bg: #EDF2F4;
    --white: #FFFFFF;
    --black: #000000;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--black);
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: var(--primary-color);
}

/* Navigation */
.navbar {
    background-color: var(--primary-color) !important;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    transition: all 0.3s ease;
}

.navbar-brand img {
    height: 50px;
    transition: all 0.3s ease;
}

.navbar-nav .nav-link {
    color: var(--white) !important;
    font-weight: 500;
    margin: 0 10px;
    transition: all 0.3s ease;
    position: relative;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
    color: var(--accent-color) !important;
}

.navbar-nav .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--accent-color);
    transition: all 0.3s ease;
}

.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
    width: 100%;
    left: 0;
}

/* Buttons */
.btn-custom {
    background-color: var(--accent-color);
    color: var(--white);
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    margin: 0 10px;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
    cursor: pointer;
}

.btn-custom:hover {
    background-color: #d62241;
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(239, 35, 60, 0.3);
}

/* Hero Sections */
.hero-section,
.about-hero,
.mission-hero,
.team-hero,
.products-hero,
.contact-hero {
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
}

.hero-section::before,
.about-hero::before,
.mission-hero::before,
.team-hero::before,
.products-hero::before,
.contact-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(43, 45, 66, 0.8), rgba(43, 45, 66, 0.8));
}

.hero-content,
.hero > .container,
.about-hero > .container,
.mission-hero > .container,
.team-hero > .container,
.products-hero > .container,
.contact-hero > .container {
    position: relative;
    z-index: 1;
}

/* Cards */
.team-card,
.product-card,
.mission-card,
.vision-card,
.contact-info,
.contact-form {
    background: var(--white);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.team-card:hover,
.product-card:hover,
.mission-card:hover,
.vision-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* Footer */
.footer {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 40px 0 20px;
    margin-top: 80px;
}

.social-icons a {
    color: var(--white);
    font-size: 1.5rem;
    margin: 0 10px;
    transition: all 0.3s ease;
    display: inline-block;
}

.social-icons a:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .hero-content p {
        font-size: 1.2rem;
    }
    
    .btn-custom {
        margin: 5px;
        padding: 10px 20px;
    }
    
    .navbar-brand img {
        height: 40px;
    }
    
    .hero-section,
    .about-hero,
    .mission-hero,
    .team-hero,
    .products-hero,
    .contact-hero {
        padding: 100px 0 60px;
        background-attachment: scroll;
    }
}

@media (max-width: 576px) {
    .hero-content h1 {
        font-size: 2rem;
    }
    
    .hero-content p {
        font-size: 1rem;
    }
    
    .btn-custom {
        display: block;
        margin: 10px auto;
        width: 200px;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}

/* Form Styles */
.form-control {
    border: 2px solid var(--light-bg);
    border-radius: 10px;
    padding: 12px 15px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-control:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 0.2rem rgba(239, 35, 60, 0.25);
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Loading Animation */
.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: var(--white);
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
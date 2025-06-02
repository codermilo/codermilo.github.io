<!DOCTYPE html>
<html lang="en">

<head>
    <title>MILO</title>
    <?php require 'partials/head.php'
    ?>
</head>

<body>

    <?php require 'partials/header.php'
    ?>


    <!--Fixed Position Backdrop -->
    <?php require 'partials/backdrop.php'
    ?>


    <div class="page-wrapper">
        <!-- Sidenav -->
        <?php require 'partials/sidebar.php'
        ?>
        <main>
            <section id="hero" class="content__item--home">
                <h1>
                    <span class="stroke anim__text" data-splitting>Hey, I'm </span>
                    <span class="wide-el anim__text" data-splitting>Daniel
                        Mills</span>
                    <span class="stroke anim__text" data-splitting>
                        and my studio is called
                    </span>
                    <span class="wide-el anim__text" data-splitting>MILO</span>
                </h1>
                <p class=" anim__text" data-splitting>I'm a
                    full-stack web developer</p>
            </section>
            <section id="projects" class="container">
                <div class="border-top">
                    <h1 class="wide-el">Projects</h1>
                    <div class="project__list">
                        <div class="project__container">
                            <div class="project">
                                <div class="pr-img">
                                    <img src="/assets/images/projects/netmatters-homepage-lg.png"
                                        alt="Netmatters homepage in large screen size">
                                    <!-- <img class="mobile-img" src="/assets/images/projects/netmatters-homepage-mobile-clean.png" alt="Netmatters homepage in mobile screen size"> -->
                                </div>
                                <div class="pr-details">
                                    <div class="pr-title">
                                        <h4>Project - HTML & SCSS</h4>
                                    </div>
                                    <div class="pr-description">
                                        <h2> 1: Netmatters Homepage</h2>
                                    </div>
                                    <div class="pr-link">
                                        <a href="http://netmatters.daniel-mills.netmatters-scs.co.uk/" target="_blank">
                                            <button>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                            <p>View Case</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project__container">
                            <div class="project">
                                <div class="pr-img"></div>
                                <div class="pr-details">
                                    <div class="pr-title">
                                        <h4>Project - Digital</h4>
                                    </div>
                                    <div class="pr-description">
                                        <h2> 1: Netmatters Homepage</h2>
                                    </div>
                                    <div class="pr-link">
                                        <a href="#">
                                            <button>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                            <p>View Case</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project__container">
                            <div class="project">
                                <div class="pr-img"></div>
                                <div class="pr-details">
                                    <div class="pr-title">
                                        <h4>Project - Digital</h4>
                                    </div>
                                    <div class="pr-description">
                                        <h2> 1: Netmatters Homepage</h2>
                                    </div>
                                    <div class="pr-link">
                                        <a href="#">
                                            <button>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                            <p>View Case</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project__container">
                            <div class="project">
                                <div class="pr-img"></div>
                                <div class="pr-details">
                                    <div class="pr-title">
                                        <h4>Project - Digital</h4>
                                    </div>
                                    <div class="pr-description">
                                        <h2> 1: Netmatters Homepage</h2>
                                    </div>
                                    <div class="pr-link">
                                        <a href="#">
                                            <button>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                            <p>View Case</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project__container">
                            <div class="project">
                                <div class="pr-img"></div>
                                <div class="pr-details">
                                    <div class="pr-title">
                                        <h4>Project - Digital</h4>
                                    </div>
                                    <div class="pr-description">
                                        <h2> 1: Netmatters Homepage</h2>
                                    </div>
                                    <div class="pr-link">
                                        <a href="#">
                                            <button>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                            <p>View Case</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project__container">
                            <div class="project">
                                <div class="pr-img"></div>
                                <div class="pr-details">
                                    <div class="pr-title">
                                        <h4>Project - Digital</h4>
                                    </div>
                                    <div class="pr-description">
                                        <h2> 1: Netmatters Homepage</h2>
                                    </div>
                                    <div class="pr-link">
                                        <a href="#">
                                            <button>
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                            <p>View Case</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" class="container">
                <div class="contact-content__container border-top">
                    <div class="contact-info">
                        <h1 class="wide-el">Get In Touch</h1>
                        <h2>00000 00000000</h2>
                        <h3>info@netmatters.com</h3>
                        <p>Say hello! Whether it's a chat about anything design related or a potential project or
                            opportunity
                            you
                            have in mind, hit me up!</p>
                    </div>
                    <!-- Contact Form -->

                    <form method="POST" action="/enquiries">
                        <div class="message-area">
                            <?php if (!empty($success) && isset($success['message'])): ?>
                                <div class="success">
                                    <?= htmlspecialchars($success['message']) ?>
                                    <button type="button" class="alert-close" aria-label="Close">&#x00D7;</button>
                                </div>
                            <?php endif; ?>

                            <?php if (isset($errors['message'])) : ?>
                                <div class="error"><?= $errors['message'] ?> <button type="button" class="alert-close" aria-label="Close">&#x00D7;</button></div>
                            <?php endif; ?>
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label class="srt" for="f-name">First Name</label>
                                <input type="text" name="f-name" id="first-name" placeholder="First Name" value="<?= old(key: 'fname') ?>">
                            </div>
                            <div class="form-group">
                                <label class="srt" for="l-name">Last Name</label>
                                <input type="text" name="l-name" id="last-name" placeholder="Last Name" value="<?= old(key: 'lname') ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="srt" for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" value="<?= old(key: 'email') ?>">
                        </div>
                        <div class="form-group">
                            <label class="srt" for="subject">Subject</label>
                            <input type="text" name="subject" id="subject" placeholder="Subject" value="<?= old(key: 'subject') ?>">
                        </div>
                        <div class="form-group">
                            <label class="srt" for="message">Message</label>
                            <textarea name="message" id="message" rows="4" placeholder="Message"><?= old('message') ?></textarea>
                        </div>
                        <button>Submit</button>
                        <div class="error-message">
                            <p>Please fill in all required fields!</p>
                        </div>
                    </form>
                </div>

            </section>
        </main>
    </div>
    <div class="noise"></div>

    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
    <script src="/js/jquery-3.7.1.min.js"></script>
    <script src="/js/app.js"></script>
    <script src="/js/form.js"></script>

</body>

</html>
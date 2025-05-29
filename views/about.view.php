<!DOCTYPE html>
<html lang="en">

<head>
    <title>MILO | About Me</title>
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
            <section id="hero">
                <h1>
                    <span class="stroke anim__text" data-splitting>About </span><span class="wide-el anim__text"
                        data-splitting>Me</span>
                </h1>
                <p class="anim__text" data-splitting>I'm a full-stack web developer</p>
            </section>
        </main>
    </div>
    <div class="noise"></div>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
    <script src="/js/jquery-3.7.1.min.js"></script>
    <script src="/js/app.js"></script>
</body>

</html>
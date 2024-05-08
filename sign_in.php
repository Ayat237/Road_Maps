<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Sign In</title>
    <link rel="stylesheet" href="sign_in.css">
</head>

<body>
    <div class="container">

        <!-- ===================================================================================================== -->

        <nav class="navBar">
            <img src="media/R.png" class="logo">
            <ul>
                <li><a href="roadMaps2.html"> Home</a></li>
                <li><a href="about us.html">About Us</a></li>
                <li><a href="http://localhost/server4/contactUs.php">Contact Us</a></li>
                <input class="Search" type="text" placeholder="Search..">
                <li class="registerimg"><img src="media/register.png"></li>
                <a href="http://localhost/server4/sign_in.php" class="Login"><label>Login</label></a>
                <li class="registerimg"><img src="media/register.png"></li>
                <a href="http://localhost/server4/sign_up.php" class="Register"><label>Register</label></a>
                <div class="con" id="con">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </ul>
        </nav>


        <!--==================================================================================================================-->

        <button id="btnScroll"><img src="media/arrow.png" alt=""></button>

        <!--==================================================================================================================-->

        <!-- <aside>sidbar</aside> -->
        <!-- <section>.........logo.......</section> -->
        <div class="traks">
            <form action="x.php" method="POST">
                <h1 class="sign_inlabel">Sign In</h1>
                <label class="label">Email</label>
                <input type="Email" required placeholder="your Email..." name="mail" class="input" id="txt"><br><br>
                <label class="label">Password</label>
                <input type="password" required placeholder="your password..." name="pass" class="input"><br><br>
                <input type="submit" value="LOG IN" class="btn">

            </form>

        </div>

        <!-- ===================================================================================================== -->

        <footer class="footer">
            <div class="textAndLogo">
                <p class="footerText">RoadMaps</p>
                <img src="media/R.png" class="footerLogo">
            </div>
            <div>
                <ul>
                    <h1>Site Menu</h1>

                    <li><a href="roadMaps2.html"> Home</a></li>


                    <li><a href="##############">Tracks</a></li>


                    <li><a href="about us.html">AboutUs</a></li>


                    <li> <a href="contactUs.html">ContactUs</a></li>
                </ul>
            </div>

            <div>
                <ul class="sccialmedia">
                    <h1>SOCIAL</h1>
                    <li><img src="media/face.png" alt="Face"> Facebook</a></li>
                    <li><img src="media/twitter.png" alt="Twitter"> Twitter</a></li>
                    <li><img src="media/instagram.png" alt="Instagram"> Instagram</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h1>Copyright © 2022 Roadmap</h1>
                    <li>Ahmed Ali</li>
                    <li>Ahmed Hussein</li>
                    <li>Ayat Mohammed</li>
                    <li>Farah Mohammed</li>
                </ul>
            </div>

        </footer>

        <!-- ===================================================================================================== -->

        <!-- Side List -->
        <div id="sideList" class="sideList">
            <ul>
                <li><a href="Python/python.html" target="_blank" class="sideList_links">Python</a></li>
                <li><a href="Flutter/Flutter.html" target="_blank" class="sideList_links">Flutter</a></li>
                <li><a href="syberscurity/syberscuritymainbbage.html" target="_blank" class="sideList_links">Cyber
                        Security</a></li>
                <li><a href="android/android.html" target="_blank" class="sideList_links">Android Application</a></li>
                <li><a href="Embedded/embedded.html" target="_blank" class="sideList_links">Embedded Systems</a></li>
                <li><a href="machine/machine.html" target="_blank" class="sideList_links">Machine learning</a></li>
                <li><a href="PS/PS.html" target="_blank" class="sideList_links">Problem Solving</a></li>
                <li><a href="AI/ai.html" target="_blank" class="sideList_links">Artificial Intelligence</a></li>
                <li><a href="web/web.html" target="_blank" class="sideList_links">Web Development</a></li>
                <li><a href="Java/java2.html" target="_blank" class="sideList_links">Java</a></li>
                <li><a href="Digital Marketing/dm.html" target="_blank" class="sideList_links">Marketing</a></li>
                <li><a href="Data Structure/DataStructure.html" target="_blank" class="sideList_links">Data
                        Structure</a></li>
            </ul>
        </div>
        <!-- ===================================================================================================== -->

    </div>
    <script src="sign_in.js"></script>
</body>

</html>
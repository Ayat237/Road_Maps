<?php
$conn =new mysqli('localhost','admin','Bo237gh55','db_contact');
// $conn =new mysqli($servername,$username,$password,$dbname);
@$FristName = $_POST['firstName'];
@$LastName = $_POST['lastName'];
@$Email = $_POST['email'];
@$Password= $_POST['password'];
$sql = "INSERT INTO table_contact (FirstName,LastName,Email,Password) 
VALUES ('$FristName', '$LastName', '$Email', '$Password')";
 if($conn->query($sql)===TRUE){
    echo "New Record Created Successfully";
  } else{
        echo " ERROR :";

    }
 $conn->close();
 ?>
<!DOCTYPE html>
<html>

<head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="sign_up.css">
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

        <div class="signUp">
            <h1 class="SignUpLabel">Sign Up</h1>
            <form action="sign_up.php" method="post">
                <label for="firstName">First Name</label>
                <input type="text" required min="3" max="10" name="firstName" placeholder="Enter Your First Name"
                    id="txt">

                <label for="lastName">Last Name</label>
                <input type="text" required min="3" max="10" name="lastName" placeholder="Enter Your Last Name">

                <label for="email">E-Mail</label>
                <input type="email" required name="email" placeholder="Enter Your E-Mail">

                <label for="password">Password</label>
                <input type="password" required max="10" name="password" placeholder="Enter Password">
                <input type="submit" value="Creat My Account" class="botton">
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
    </div>

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

    <script src="sign_up.js"></script>


</body>

</html>
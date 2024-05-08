    
    <?php
   $Email =   trim( $_POST["mail"] );
   $userpassword =  trim(  $_POST["pass"] );
   echo "hello";
   try{
  
    $sever_name="localhost";
    $username="admin";
    $password="Bo237gh55";
    $db="db_contact";

    // $conn=mysqli_connect($sever_name , $username , $password , $db);
    $conn=new PDO ("mysql:host=localhost; dbname=$db;" , $username , $password);

    // $conn=new PDO("mysql.host=$sever_name",$username,$password);
    // $conn->numfmt_set_attribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

  }catch(PDOException)
  {
    echo "error in connection";
  }
         
  //  $data = $conn->prepare ("SELECT password FROM userdata where name = '".$username."'; " ) ;
  //  $data->execute();

  $sql=$conn->prepare("SELECT Password FROM table_contact where Email = '".$Email."'; " ) ; 
  $sql2="SELECT Password FROM table_contact where Email = '".$Email."'; "  ; 

  $sql->execute();

      foreach($sql as $result)
      {
         $result['Password'];
      }

     if (isset( $result['Password'] ) )
     {
         if( $result['Password']==$userpassword )
         {
            header("Location: roadMaps2.html");
            exit;
         }else{
            header("Location: sign_in.php?error=Password");
            exit();
         }

     }
     else
     {
           header("Location: sign_in.php?error=gmail");
           exit();
     }


    //  $sql= " iNSERT into userdata (name , password) VALUES (  ' ".$usernamee."' ,  '".$userpassword."' ) ";
    //  $conn->query($sql);
    

    //  if(1)
    //  {
    //   header("Location: ddd.php?error=username");
    //   exit();
    //  }
    
    
    ?> <br>
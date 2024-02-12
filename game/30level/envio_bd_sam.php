<?php

   ini_set('error_reporting',E_ALL);
   ini_set('display_errors','on');
  //1. Cadena de conexión...
    $oConn=mysql_pconnect('localhost','root','') or die('Error al conectar');
  //2. Usar utf8 en el cliente   
    mysql_set_charset('utf8',$oConn);
  //3. Selección de la base de datos...  
    mysql_select_db('DEMO');
    if (isset($_POST["nom_ph"])){
	$cons_Act = 'INSERT INTO CONTROL_JAVA (NOMBRE , PUNT) 
        VALUES ("'.$_POST["nom_ph"].'","'.$_POST["punt_ph"].'");';
    mysql_query($cons_Act);
	}
	
	
    $cons_Inf = 'SELECT NOMBRE , PUNT
                FROM CONTROL_JAVA ORDER BY PUNT ASC LIMIT 5;';
    $acCion_Inf =mysql_query($cons_Inf); 
    echo '<div id=table>';
	echo '<table>';
        echo '<tr>';
        echo '<th  colspan=3><div id=centr>TABLE OF HEROES</div></th>';
        echo '</tr>';
		echo '<tr>';
        echo '<th  colspan=3><div id=centr>--- -- ------</div></th>';
        echo '</tr>';  
 
				echo '<tr>';
        echo '<th  colspan=3><div id=centr></div></th>';
        echo '</tr>';     
	$contPrin = 1;
	while ($recorrido = mysql_fetch_assoc($acCion_Inf))    
    {
        echo '<tr>';
		echo '<th><div id=izq>'.$contPrin.'º</div></th>';
        echo '<th><div id=izq>'.$recorrido['NOMBRE'].'</div></th>';
        echo '<th><div id=der>'.$recorrido['PUNT'].'</div></th>';
        echo '</tr>';

		$contPrin++;
    }
	echo '</table>';
	echo '</div>';
?>

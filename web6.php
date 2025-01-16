<head>
<meta http-equiv="refresh" content="1"/>
<style>
p 
{
color:white;
font-size:40px;
position:absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
}
body 
{
background-color:black;
}
</style>
<p> 
<?php 
date_default_timezone_set("Asia/Calcutta"); //India time (GMT+5:30)
echo date(" h: i : s :a");
?> 
</p>
</head>	
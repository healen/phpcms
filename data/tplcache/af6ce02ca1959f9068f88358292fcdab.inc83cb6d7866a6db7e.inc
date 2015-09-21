<?php
$z[0]=Array("arcurl","",40,55);
$z[1]=Array("pubdate","",273,317);
$z[1][4]['function']="MyDate('m',@me)";
$z[2]=Array("pubdate","",385,429);
$z[2][4]['function']="MyDate('d',@me)";
$z[3]=Array("title","",624,703);
$z[3][4]['function']="(strlen(\"@me\")>20?cn_substr(\"@me\",20).\"…\" : \"@me\" )";
$z[4]=Array("pubdate","",751,806);
$z[4][4]['function']="MyDate('Y年m月d日',@me)";
$z[5]=Array("description","",941,1028);
$z[5][4]['function']="(strlen(\"@me\")>100?cn_substr(\"@me\",100).\"…\" : \"@me\" )";

?>
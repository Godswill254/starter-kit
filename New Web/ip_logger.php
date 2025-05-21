<?php
  $ip_address = $_POST['ip_address'];
  $device_info = $_POST['device_info'];
  $country = $_POST['country'];

  $file = 'ip_addresses.txt';
  $fp = fopen($file, 'a');
  fwrite($fp, "IP Address: $ip_address\n");
  fwrite($fp, "Device Info: $device_info\n");
  fwrite($fp, "Country: $country\n\n");
  fclose($fp);
?>
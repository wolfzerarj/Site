<?php
    $autoload = function($class){
        include('classes/'.$class.'.php');

    };
    spl_autoload_register($autoload);
    define('INCLUDE_PATH', 'https://localhost/site grx/');
?>
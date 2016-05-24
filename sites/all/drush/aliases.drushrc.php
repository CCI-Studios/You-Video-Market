<?php

$aliases['dev'] = array(
	'uri'=> 'youvideo.ccistaging.com',
	'root' => '/home/staging/subdomains/youvideo/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=> '-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'youvideomarket.com',
	'root' => '/home/youvideo/subdomains/live/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'youvideo',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	
);

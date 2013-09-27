<?php

/*
 * Fake Tweets API
**/

$content = array(
	'statuses' => array()
);

$topic = isset($_GET['q']) && !empty($_GET['q'])
	? trim($_GET['q'], '#')
	: false;

$count = isset($_GET['count']) && !empty($_GET['count'])
	? (int) $_GET['count']
	: 10;

if ( $count < 1 || $count > 10 ) {
	$count = 10;
}

do {

	if ( !$topic ) break;
	if ( !($data = file_get_contents(dirname(__FILE__) . '/data/' . $topic . '.json')) ) break;

	$data = (array) json_decode($data);
	shuffle($data['statuses']);
	$content['statuses'] = array_slice($data['statuses'], 0, $count);

} while (false);

header('Content-type: application/json');
echo json_encode($content);
exit(0);
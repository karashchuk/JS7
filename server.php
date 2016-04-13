<?
    $users = array(
        array('id' => 1, 'name' => 'Ivan'),
        array('id' => 2, 'name' => 'Petr'),
        array('id' => 3, 'name' => 'Dima'),
        array('id' => 4, 'name' => 'Igor')
    );
    if($_GET['id'] <= 4 && $_GET['id'] >= 1) {
        echo '<p>' . $users[$_GET['id']-1]['name'] . '</p>';
    }
?>
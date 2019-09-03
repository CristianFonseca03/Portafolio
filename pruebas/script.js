function get_date() {
    return moment().format('h:mm:ss a');;
};

function alter_date() {
    $("#fecha").html(get_date());
};

function alter_time_elapsed() {
    var sec = parseInt($("#seconds_elapsed").text());
    sec++;
    $("#seconds_elapsed").html(sec);
    var formatted = moment.utc(sec * 1000).format('HH:mm:ss');
    $("#tt_carga").html(formatted);
};

$(function () {
    moment.locale('es');
    setInterval('alter_date()', 100);
    $("#carga").html(get_date());
    console.log(moment([2010, 1, 14, 15, 25, 50]).format('LLLL'));
    setInterval('alter_time_elapsed()', 1000);
});
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

function alter_time_to_birth_date() {
    var birth_date = moment([1998, 8, 27, 19, 0, 0]);
    var now = moment();
    var years = now.diff(birth_date, 'years');
    birth_date.add(years, 'years');
    var days = now.diff(birth_date, 'days');
    birth_date.add(days, 'days');
    var hours = now.diff(birth_date, 'hours');
    birth_date.add(hours, 'hours');
    var minutes = now.diff(birth_date, 'minutes');
    birth_date.add(minutes, 'minutes');
    var seconds = now.diff(birth_date, 'seconds');
    $("#relative_time").html(years + " años " + days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos");
}

$(function () {
    moment.locale('es');
    var birth_date = moment([1998, 8, 27, 19, 0, 0]);
    setInterval('alter_date()', 1000);
    $("#carga").html(get_date());
    setInterval('alter_time_elapsed()', 1000);
    $("#birth_date").html(birth_date.format('LL h:mm A'));
    setInterval('alter_time_to_birth_date()', 1000);
});
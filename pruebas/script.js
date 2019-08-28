function get_date() {
    var d = new Date();
    var strDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return strDate;
};

function alter_date() {
    $("#fecha").html(get_date());
};

function alter_time_elapsed(h, m, s) {
    $("#tt_carga").html(time_elapsed(h, m, s));
};

function time_elapsed(h, m, s) {
    var d = new Date();
    ch = Math.abs(d.getHours() - h);
    cm = Math.abs(d.getMinutes() - m);
    cs = Math.abs(d.getSeconds() - s);
    return ch + ":" + cm + ":" + cs;
};
$(function () {
    var ct = new Date();
    setInterval('alter_date()', 150);
    $("#carga").html(ct.getHours() + ":" + ct.getMinutes() + ":" + ct.getSeconds());
    setInterval("alter_time_elapsed(ct.getHours(), ct.getMinutes(), ct.getSeconds())", 150);
});
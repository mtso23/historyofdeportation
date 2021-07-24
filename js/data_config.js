var data_im = {};

$(document).ready(function(){
    data_im.getData();
});

data_im.getData = function () {
    $.when (
        $.getScript("src/data_new.js"),
    ).done(function(){
        data_im.setParameters();
    });
}
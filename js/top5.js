<script type="text/javascript" src='./src/data_new.js'></script>

var data_sort = JSON.parse(data_im);

var top10 = data_sort.sort(function(a,b){return a.value < b.value ? 1 : -1; }).slice (0,10);

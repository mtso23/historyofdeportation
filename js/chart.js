let myChart = document.getElementById('myChart').getContext('2d');
  
let massPopChart = new Chart(myChart, {
    type:'bar',
    data:{
        labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge','New Bedford'],
        datasets:[{
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ]
        }]
    },
    options:{}
});


async function getData(){
    const xs = [];
    const ys = [];
    
    const response = await fetch('maptest_regions.csv');
    const region = await response.text();

    const table = region.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const continent = columns[0];
        ys.push(continent);
        const count = columns[1];
        xs.push(count);
        console.log(continent, count);
    });
    return {xs, yx};
}


async function chartIt() {
    const data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type:'line',
        data:{
            labels: data.xs,
            datasets:[
                {
                    label: 'Deportations',
                    data: data.ys,
            }]
        },
        options:{}
    });
}
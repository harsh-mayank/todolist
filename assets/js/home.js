var viewButton = document.getElementsByClassName('view-button');
var category = ['personal','work','school','cleaning','other'];
var color = ['red','orange','crimson','peach','pink']

for(let i of viewButton){
    //console.log(i.innerText);
    let index = category.findIndex(function(val){
        return val==i.innerText;
    });
    //console.log(index);
    //console.log(color[index]);
    i.style.backgroundColor = color[index];
}
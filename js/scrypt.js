const icons=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

function patternIcon(icon){ 
return `<div class="container-icon">
            <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color}"></i>
            <div class="icon-name">${icon.name.toUpperCase()}</div>
        </div>`
}

function stamp(iconsArray, patternIcon){
    iconsArray.forEach(function (icon) {
        container.innerHTML+=patternIcon(icon);
    })
}

//funzione che riempie la select, riceve l'array di icone
//e la select da riempire
function addValuesSelect(icons, select){

    //creo una lista di value che contiene già il value all
    const valueList=["all"];

    //per ogni oggetto di icons prendo il valore di type
    //se non è presente nella lista di value lo aggiungo
    icons.forEach(function (icon) {
        if(!valueList.includes(icon.type)){
            valueList.push(icon.type);
        }
    })

    //per ogni valore della lista di value
    //creo un elemento html option, gli aggiungo un value
    //e stampo lo stesso value
    //aggiungo l'elemento html option creato alla selct passata
    //come argomento della funzione
    valueList.forEach(function (element) {
        const value=document.createElement("option");
        value.setAttribute("value", `${element}`);
        value.innerHTML= `${element}`;
        select.append(value);
    })
}

const container=document.querySelector('.container');

stamp(icons, patternIcon);

const select = document.getElementById("select-menu");
addValuesSelect(icons, select);

select.addEventListener("change", function() {
    const value=document.getElementById("select-menu").value;

    const iconsDisplay = icons.filter(function (icon) {
        return value==="all" || icon.type===value;
    })
    
    container.innerHTML="";
    stamp(iconsDisplay, patternIcon);
})
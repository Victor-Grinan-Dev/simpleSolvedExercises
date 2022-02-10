const listOfPayers = [];

const addPayer = (named) => listOfPayers.push(named);


addPayer("Cachete");
addPayer("el mulato");
addPayer("Charla");
addPayer("Yoyamenta");
addPayer("Racielada");
addPayer("Pedrusco");

const whoPays = (list) => {
    const result = Math.floor(Math.random() * list.length) + 1;
    console.log(result)
}
for (let i = 0; i < 10; i++){
    whoPays(listOfPayers);
}

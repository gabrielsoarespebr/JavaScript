const amigas = ['Ana', 'Bia', 'Carla', 'Dani', 'Elise', 'Fran'];

//o forEach percorre cada elemento "pessoa" do array "amigas" e executa a arrow function 
amigas.forEach(pessoa => {
    console.log(this.indexOf(pessoa)+") " + pessoa)
})
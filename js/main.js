function Coletar(){
  let artista = document.querySelector('.artista').value;
  let musica = document.querySelector('.musica').value;
  //console.log(artista, musica)
  Dados(artista, musica)
}
async function Dados(artista, musica){
  let dados = await fetch(`https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}`).then(response => response.json())
  //console.log(dados)
  ExibirDados(dados)
}
function ExibirDados(dados){
  document.querySelector('.letra').innerHTML = dados.mus[0].text
}
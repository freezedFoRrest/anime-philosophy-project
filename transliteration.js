document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('transliterate');

  button.addEventListener('click', () => {
    document.getElementsByTagName('p')[0].childNodes[1].innerText = "Bogdanov"
    document.getElementsByTagName('p')[1].childNodes[1].innerText = "Bogdan"
    document.getElementsByTagName('p')[2].childNodes[1].innerText = "Aleksandrovich"
    
    document.getElementsByTagName('p')[4].childNodes[1].innerText = "G.Sochi Krasnodarskiy krai Russia"
    document.getElementsByTagName('p')[5].childNodes[1].innerText = "GU MVD ROSSII PO KRASNODARSKOMU KRAIY"
  });
});

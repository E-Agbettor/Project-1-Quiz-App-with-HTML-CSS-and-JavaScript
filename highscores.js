let highScoresList = document.getElementById("highScoresList");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let selectCategory = document.querySelector('#selectCategory');
let selectElem = document.getElementById('category')


selectElem.addEventListener('change', function() {
  let categoryIndex= selectElem.selectedIndex;
  let category = selectElem.options[categoryIndex].value;

  let resultsHtml = '';
  let highScoresLength = highScores.length
  for(var i = 0; i < highScoresLength; i++) {
      if (category == 'A' || category == highScores[i].category) {
       
        resultsHtml+=`
         <li class="high-score">${highScores[i].name} - ${highScores[i].score}</li>`;   
      }
      highScoresList.innerHTML = resultsHtml;
    }
      
     
})



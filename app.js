let selectElem = document.getElementById('category')
selectElem.addEventListener('change', function() {
     let category = selectElem.value
     document.cookie = category
})





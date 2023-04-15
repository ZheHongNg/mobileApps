function onAddToList(){
    let name = $.trim($('#TripNameInput').val())
    let location = $.trim($('#LocationInput').val())
    let departDate = $.trim($('#DepartDateInput').val())
    let returnDate = $.trim($('#ReturnDateInput').val())

    if (name === ''|| location === ''){
        alert ('Error:Both fields are required!')
        return
    }
    let data = JSON.stringify({name, location, departDate, returnDate})
    window.open('index.html?data='+ encodeURIComponent(data), 'Add trip')
    
}

document.addEventListener('deviceready', function(){
    Zepto(function($){
        $('#btn-save').on('click', onAddToList)
      })
}, false)


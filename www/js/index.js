let allParams = new URLSearchParams (window.location.search)
let params = JSON.parse(allParams.get('data'))

    function onDisplay(){
        let name = params.name
        let location = params.location
        let departDate = params.departDate
        let returnDate = params.returnDate
        let tripDisplay = $('<a></a>').addClass('list-group-item list-group-item-action')
        .attr('href','#')
        .attr('aria-current','true')
        let nameDisplay = $('<h5></h5>').addClass('mb-1').text(name)
        let locationDisplay = $('<small></small>').addClass('location').text(location)
        let dateDisplay = $('<div></div>').addClass('d-flex w-100 justify-content-between')
        let departDisplay = $('<p></p>').addClass('mb-1').text(departDate)
        let returnDisplay = $('<p></p>').addClass('mb-1').text(returnDate)

        $(dateDisplay).append(departDisplay).append(returnDisplay)
        $(tripDisplay).append(nameDisplay).append(locationDisplay).append(dateDisplay)
        $('#list').append(tripDisplay)
        $('#list').parent().removeClass('d-none')

    }
    document.addEventListener('deviceready', function(){
        Zepto(function($){
            onDisplay()
            $('#btn-add').on('click', window.open('add_trip.html'))
          })
    }, false)
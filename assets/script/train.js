var list = []

function renderRow(list){
    $('#tbody').empty();

    for (var i = 0; i < list.length; i++){

        var rowTraininfo = $('<p>');
        rowTraininfo.text(list[i]);

        $('#tbody').append(rowTraininfo);
    }

}


$('#submitBtn').on('click', function(event){

    event.preventDefault();

    var trainNameInput = $('#trainName').val().trim();
    var destinationInput = $('#destination').val().trim();
    var timeInput = $('#militaryTime').val().trim();
    var frequencyInput = $('#frequency').val().trim();

    var newRow = $( `<tr>
    <td class='trainName'>${trainNameInput}</td>
    <td class='trainDestination'>${destinationInput}</td>
    <td class='trainFrequency'>${frequencyInput}</td>
    <td class='trainTime'>${timeInput}</td>
    </tr>` )

    list.push(newRow)
    
    $('#tbody').append(newRow)

    localStorage.setItem("Train-Info", (trainNameInput + " " + destinationInput + " " + timeInput + " " + frequencyInput));
    $('#tbody').append(localStorage)

    trainNameInput= $('#trainName').val('');
    destinationInput = $('#destination').val('');
    timeInput = $('#militaryTime').val('');
    frequencyInput = $('#frequency').val('');

})
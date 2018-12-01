$('#submitBtn').on('click', function(event){

    event.preventDefault();
    var trainNameInput = $('#trainName').val();
    var destinationInput = $('#destination').val();
    var timeInput = $('#militaryTime').val();
    var frequencyInput = $('#frequency').val();

    console.log(trainNameInput);
    console.log(destinationInput);
    console.log(timeInput);
    console.log(frequencyInput);


    var newRow = $('<tr>')
    var trainName = $('<th>').attr('id', 'trainNameAppend')
                             .push(trainNameInput)
                             
    var destination = $('<th>').attr('id', 'destinationAppend')
                               .push(destinationInput)
                               
    var time = $('<th>').attr('id', 'timeAppend')
                        .push(timeInput)
                        
    var frequency = $('<th>').attr('id', 'frequencyAppend')
                             .push(frequencyInput)
                             
    var closeRow = $('</tr>')

    $('#tbody').append(newRow);
    newRow.append(trainName);
    $('#trainNameAppend').append(destination);
    $('#destinationAppend').append(time);
    $('#timeAppend').append(frequency);
    $('#frequencyAppend').append(closeRow);
  
    trainNameInput= $('#trainName').val('');
    destinationInput = $('#destination').val('');
    timeInput = $('#militaryTime').val('');
    frequencyInput = $('#frequency').val('');

})
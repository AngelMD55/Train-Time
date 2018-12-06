$('document').ready(function(){

let trains = []

$('#submitBtn').on('click', function (event) {

    event.preventDefault();

    let trainNameInput = $('#trainName').val().trim();
    let destinationInput = $('#destination').val().trim();
    let timeInput = moment($('#militaryTime').val().trim(), "HH:mm").format("HH:mm");
    let frequencyInput = $('#frequency').val().trim();

    // console.log(timeInput);

    let train = {
        name: trainNameInput,
        destination: destinationInput,
        time: timeInput,
        frequency: frequencyInput
    }

    trains.push(train);

    // console.log(trains)

    localStorage.setItem("Train-Info", JSON.stringify(trains));

    let timeInputConverted = moment(timeInput, "HH:mm");
    console.log(timeInputConverted);

    let currentTime = moment();

    console.log(currentTime.format("HH:mm"));

    let timeDifference = moment().diff(moment(timeInputConverted), "minutes");
    // console.log(timeDifference)

    let timeRemaining = (timeDifference % frequencyInput);
    console.log(timeRemaining)

    let minutesAway = (frequencyInput - timeRemaining);
    console.log(minutesAway)

    let nextTrain = moment().add(minutesAway, "minutes").format("HH:mm");
    console.log(nextTrain)


    let newRow = $(`<tr>
    <td class='trainName'>${trainNameInput}</td>
    <td class='trainDestination'>${destinationInput}</td>
    <td class='trainFrequency'>${frequencyInput}</td>
    <td class='trainTime'>${nextTrain}</td>
    <td class='minutesAway'>${minutesAway}</td>
    </tr>` )

    $('#tbody').append(newRow);

    trainNameInput = $('#trainName').val('');
    destinationInput = $('#destination').val('');
    timeInput = $('#militaryTime').val('');
    frequencyInput = $('#frequency').val('');
})
trains = JSON.parse(localStorage.getItem("Train-Info"));
populateTrains(trains);
function populateTrains(trains) {
    for (let i = 0; i < trains.length; i++) {

        let timeDifference = moment().diff(moment(trains[i].time, "HH:mm"), "minutes");

        let timeRemaining = (timeDifference % trains[i].frequency);
        console.log(timeRemaining)

        let minutesAway = (trains[i].frequency - timeRemaining);
        console.log(minutesAway)

        let nextTrain = moment().add(minutesAway, "minutes").format("HH:mm");
        console.log(nextTrain)
        let newRow = $(`<tr>
        <td class='trainName'>${trains[i].name}</td>
        <td class='trainDestination'>${trains[i].destination}</td>
        <td class='trainFrequency'>${trains[i].frequency}</td>
        <td class='trainTime'>${nextTrain}</td>
        <td class='minutesAway'>${minutesAway}</td>
        </tr>` )

        $('#tbody').append(newRow);
    }
}});
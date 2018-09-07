/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTraining(attentionPoint, swimTraining, swimSpeed) {
    var totalDistance = 0;

    if (swimSpeed) {
        var data = trainingdb({'training_part': 'warming_up', 'swim_speed': swimSpeed});
        var randomInt = getRandomInt(0, data.count() - 1);
        var warmingUp = data.get()[randomInt].training_text;
        totalDistance += data.get()[randomInt].distance;

        console.log(warmingUp, totalDistance);
    }

    var trainingText = "";

    if (warmingUp) {
        trainingText += "<h2>Warming Up</h2>" + "<p>" +  warmingUp + "</p>";
    }

    return trainingText;
}

$(document).ready(function() {
    $("#attentionPoint, #swimTraining, #swimSpeed").click(function() {
        var attentionPoint = $(':radio[name=attentionPoint]:checked').val();
        var swimTraining = $(':radio[name=swimTraining]:checked').val();
        var swimSpeed = $(':radio[name=swimSpeed]:checked').val();

        console.log(attentionPoint, swimTraining, swimSpeed);

        var completeTraining = generateTraining(attentionPoint, swimTraining, swimSpeed);

        $('#trainingTextBox').fadeOut('slow');
        $('#trainingTextBox').promise().done(function() {
            $('#trainingTextBox').html(completeTraining);
        });
        $('#trainingTextBox').fadeIn('slow');
    });

    $('#printTrainingButton').click(function() {
        console.log('print button!');

        $('#trainingTextBox').printThis();
    });
});

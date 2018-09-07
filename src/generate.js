/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTraining(swimTraining, swimSpeed) {
    var totalDistance = 0;

    if (swimSpeed) {
        var data = trainingdb({'training_part': 'warming_up', 'swim_speed': swimSpeed});
        var randomInt = getRandomInt(0, data.count() - 1);
        var warmingUp = data.get()[randomInt].training_text;
        totalDistance += data.get()[randomInt].distance;
    }

    if (swimSpeed) {
        var data = trainingdb({'training_part': 'build', 'swim_speed': swimSpeed});
        var randomInt = getRandomInt(0, data.count() - 1);
        var build = data.get()[randomInt].training_text;
        totalDistance += data.get()[randomInt].distance;
    }

    if (swimTraining && swimSpeed) {
        if (swimTraining == 'random') {
            var data = trainingdb({'training_part': 'main', 'swim_speed': swimSpeed});
        } else {
            var data = trainingdb({'training_part': 'main', 'swim_speed': swimSpeed, 'training_type': swimTraining});
        }
        var randomInt = getRandomInt(0, data.count() - 1);
        var main = data.get()[randomInt].training_text;
        totalDistance += data.get()[randomInt].distance;
    }

    if (swimSpeed) {
        var data = trainingdb({'training_part': 'cooling_down', 'swim_speed': swimSpeed});
        var randomInt = getRandomInt(0, data.count() - 1);
        var coolingDown = data.get()[randomInt].training_text;
        totalDistance += data.get()[randomInt].distance;
    }

    var trainingText = "";
    if (warmingUp) {
        trainingText += "<h2>Warming Up</h2>" + "<p>" +  warmingUp + "</p>";
    }
    if (build) {
        trainingText += "<h2>Build</h2>" + "<p>" + build + "</p>";
    }
    if (main) {
        trainingText += "<h2>Main</h2>" + "<p>" + main + "</p>";
    }
    if (coolingDown) {
        trainingText += "<h2>Cooling Down</h2>" + "<p>" + coolingDown + "</p>";
    }

    if (totalDistance > 0) {
        trainingText += "<b>Total distance:</b> " + totalDistance;
    }

    return trainingText;
}

$(document).ready(function() {
    $("#swimTraining, #swimSpeed").click(function() {
        var swimTraining = $(':radio[name=swimTraining]:checked').val();
        var swimSpeed = $(':radio[name=swimSpeed]:checked').val();
        var completeTraining = generateTraining(swimTraining, swimSpeed);

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

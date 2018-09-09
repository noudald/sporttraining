/* global trainingdb */

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTraining(swimTraining, swimSpeed) {
  let totalDistance = 0;
  let warmingUp = null;
  let build = null;
  let main = null;
  let coolingDown = null;

  if (swimSpeed) {
    const data = trainingdb({ training_part: 'warming_up', swim_speed: swimSpeed });
    const randomInt = getRandomInt(0, data.count() - 1);
    warmingUp = data.get()[randomInt].training_text;
    totalDistance += data.get()[randomInt].distance;
  }

  if (swimSpeed) {
    const data = trainingdb({ training_part: 'build', swim_speed: swimSpeed });
    const randomInt = getRandomInt(0, data.count() - 1);
    build = data.get()[randomInt].training_text;
    totalDistance += data.get()[randomInt].distance;
  }

  if (swimTraining && swimSpeed) {
    let data;
    if (swimTraining === 'random') {
      data = trainingdb({ training_part: 'main', swim_speed: swimSpeed });
    } else {
      data = trainingdb({ training_part: 'main', swim_speed: swimSpeed, training_type: swimTraining });
    }
    const randomInt = getRandomInt(0, data.count() - 1);
    main = data.get()[randomInt].training_text;
    totalDistance += data.get()[randomInt].distance;
  }

  if (swimSpeed) {
    const data = trainingdb({ training_part: 'cooling_down', swim_speed: swimSpeed });
    const randomInt = getRandomInt(0, data.count() - 1);
    coolingDown = data.get()[randomInt].training_text;
    totalDistance += data.get()[randomInt].distance;
  }

  let trainingText = '';
  if (warmingUp) {
    trainingText += `${'<h2>Warming Up</h2><p>'}${warmingUp}</p>`;
  }
  if (build) {
    trainingText += `${'<h2>Build</h2><p>'}${build}</p>`;
  }
  if (main) {
    trainingText += `${'<h2>Main</h2><p>'}${main}</p>`;
  }
  if (coolingDown) {
    trainingText += `${'<h2>Cooling Down</h2><p>'}${coolingDown}</p>`;
  }

  if (totalDistance > 0) {
    trainingText += `<b>Total distance:</b> ${totalDistance}`;
  }

  return trainingText;
}

$(document).ready(() => {
  $('#swimTraining, #swimSpeed').click(() => {
    const swimTraining = $(':radio[name=swimTraining]:checked').val();
    const swimSpeed = $(':radio[name=swimSpeed]:checked').val();
    const completeTraining = generateTraining(swimTraining, swimSpeed);

    $('#trainingTextBox').fadeOut('slow');
    $('#trainingTextBox').promise().done(() => {
      $('#trainingTextBox').html(completeTraining);
    });
    $('#trainingTextBox').fadeIn('slow');
  });

  $('#printTrainingButton').click(() => {
    $('#trainingTextBox').printThis();
  });
});

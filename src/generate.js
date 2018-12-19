/* MIT License
 * Copyright (c) 2018 Noud Aldenhoven
 */

/* global trainingdb */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_disclaimer() {
  return '<p>The information contained in this generated swim training is for informational purposes only, and is made available to you as a self-help tool for your own use.</p>';
}

function generateTraining(swimType, swimSpeed, swimTime) {
  let totalDistance = 0;
  let warmingUp = null;
  let build = null;
  let main = null;
  let coolingDown = null;
  let trainingText = '';

  if (swimType == 'cssTest') {
    trainingText = '<h1>CSS Test</h1>';
  } else if (swimType == 'technique') {
    trainingText = '<h1>Technique training</h1>';
  } else if (swimType == 'threshold') {
    trainingText = '<h1>Threshold training</h1>';
  } else if (swimType == 'sprint') {
    trainingText = '<h1>Sprint training</h1>';
  } else if (swimType == 'openwater') {
    trainingText = '<h1>Open Water training</h1>';
  } else if (swimType == 'endurance') {
    trainingText = '<h1>Endurance training</h1>';
  }

  if (swimType == 'cssTest' && swimSpeed && swimTime) {
    const data = trainingdb({
      training_part: 'cssTest',
      swim_speed: swimSpeed,
      swim_time: swimTime,
    });
    const cssTest = data.get()[0];
    warmingUp = cssTest.warming_up_text;
    build = cssTest.build_text;
    main = cssTest.main_text;
    coolingDown = cssTest.cooling_down_text;
    totalDistance += cssTest.distance;

  } else {
    if (swimSpeed && swimTime) {
      const data = trainingdb({
        training_part: 'warming_up',
        swim_speed: swimSpeed,
        swim_time: swimTime,
      });
      const randomInt = getRandomInt(0, data.count() - 1);
      warmingUp = data.get()[randomInt].training_text;
      totalDistance += data.get()[randomInt].distance;
    }

  if (swimType == 'endurance') {
    if (swimTime == '30') {
      return 'You cannot do an endurance training in less than 60 minutes.';
    } else {
      const data = trainingdb({
        training_type: swimType,
        swim_speed: swimSpeed
      });
      const randomInt = getRandomInt(0, data.count() - 1);
      const enduranceTraining = data.get()[randomInt];
      totalDistance = enduranceTraining.distance;
      trainingText += `<p>${enduranceTraining.training_text}</p>`;
      trainingText += `<b>Total distance:</b> ${totalDistance}`;
      trainingText += get_disclaimer();
      return trainingText;
    }
  }


    if (swimSpeed && swimTime) {
      if (swimTime == '30' && swimSpeed == 'novice') {
        // Skip build if swimmer is novice and swims for half an hour.
        build = null;
      } else {
        const data = trainingdb({
          training_part: 'build',
          swim_speed: swimSpeed,
          swim_time: swimTime,
        });
        const randomInt = getRandomInt(0, data.count() - 1);
        build = data.get()[randomInt].training_text;
        totalDistance += data.get()[randomInt].distance;
      }
    }

    if (swimType && swimSpeed && swimTime) {
      let data;
      if (swimType === 'random') {
        data = trainingdb({
          training_part: 'main',
          swim_speed: swimSpeed,
          swim_time: swimTime,
        });
      } else {
        data = trainingdb({
          training_part: 'main',
          swim_speed: swimSpeed,
          training_type: swimType,
          swim_time: swimTime,
        });
      }
      const randomInt = getRandomInt(0, data.count() - 1);
      main = data.get()[randomInt].training_text;
      totalDistance += data.get()[randomInt].distance;
    }

    if (swimSpeed) {
      const data = trainingdb({
        training_part: 'cooling_down',
        swim_speed: swimSpeed,
        swim_time: swimTime,
      });
      const randomInt = getRandomInt(0, data.count() - 1);
      coolingDown = data.get()[randomInt].training_text;
      totalDistance += data.get()[randomInt].distance;
    }
  }

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

  trainingText += get_disclaimer();

  return trainingText;
}

$(document).ready(() => {
  $('#mainTitle').html('Swim training generator');

  $('#buttonDiv').hide();

  $('#swimType, #swimSpeed, #swimTime, #newTrainingButton').click(() => {
    const swimType = $(':radio[name=swimType]:checked').val();
    const swimSpeed = $(':radio[name=swimSpeed]:checked').val();
    const swimTime = $(':radio[name=swimTime]:checked').val();
    if (swimType && swimSpeed && swimTime) {
      const completeTraining = generateTraining(swimType, swimSpeed, swimTime);

      $('#trainingTextBox').fadeOut('slow');
      $('#trainingTextBox').promise().done(() => {
        $('#trainingTextBox').html(completeTraining);
      });
      $('#trainingTextBox').fadeIn('slow');
      $('#buttonDiv').fadeIn('slow');

      const trainingTextBox = $('#sportTraining');
      $('html,body').animate(
        { scrollTop: trainingTextBox.offset().top }, 'slow',
      );
    }
  });

  $('#resetTrainingButton').click(() => {
    $('#trainingTextBox').fadeOut('slow');
    $('#trainingTextBox').promise().done(() => {
      $('#trainingTextBox').html('');
    });
    $('input[name="swimType"]').prop('checked', false);
    $('input[name="swimSpeed"]').prop('checked', false);
    $('input[name="swimTime"]').prop('checked', false);
    const trainingOptions = $('#trainingOptions');
    $('html,body').animate(
      { scrollTop: trainingOptions.offset().top }, 'slow',
    );
    $('#buttonDiv').fadeOut('slow');
  });

  $('#printTrainingButton').click(() => {
    $('#printTrainingText').printThis();
  });
});

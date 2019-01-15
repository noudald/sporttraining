/* MIT License
 * Copyright (c) 2018 Noud Aldenhoven
 */

/* global trainingdb */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_disclaimer() {
  return '<p>The information contained in this generated swim workout is for informational purposes only, and is made available to you as a self-help tool for your own use.</p>';
}

function isInteger(value) {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

function computeCSS(seconds200m, seconds400m) {
  CSSMetersPerSecond = 200.0 / (seconds400m - seconds200m);
  return 100.0 / CSSMetersPerSecond;
}

function computeCSSNovice() {
  let min200m = document.getElementById('min200m').value;
  let sec200m = document.getElementById('sec200m').value;

  if (!isInteger(min200m) || !isInteger(sec200m) || min200m < 0 || sec200m < 0 || sec200m > 59) {
    alert('Invalid input, make sure the minutes and seconds are correct!');
    return;
  }

  min200m = Number(min200m);
  sec200m = Number(sec200m);

  // For a novice swimmer we assume the 400m time is 2 * 200m time + 10 seconds.
  const totalSeconds200m = 60 * min200m + sec200m;
  const totalSeconds400m = 2 * totalSeconds200m + 10;

  const CSSSeconds = computeCSS(totalSeconds200m, totalSeconds400m);
  const CSSSec = Math.floor(CSSSeconds % 60);
  const CSSMin = Math.floor(CSSSeconds / 60);

  $('#CSSSpeed').promise().done(() => {
    $('#CSSSpeed').html(`Your CSS Speed is ${CSSMin}:${String(CSSSec).padStart(2, '0')} min / 100m`);
  });
}

function computeCSSNoNovice() {
  let min200m = document.getElementById('min200m').value;
  let sec200m = document.getElementById('sec200m').value;
  let min400m = document.getElementById('min400m').value;
  let sec400m = document.getElementById('sec400m').value;

  if (!isInteger(min200m) || !isInteger(sec200m) || min200m < 0 || sec200m < 0 || sec200m > 59
      || !isInteger(min400m) || !isInteger(sec400m) || min400m < 0 || sec400 < 0 || sec400 > 59) {
    alert('Invalid input, make sure the minutes and seconds are correct!');
    return;
  }

  min200m = Number(min200m);
  sec200m = Number(sec200m);
  const totalSeconds200m = 60 * min200m + sec200m;

  min400m = Number(min400m);
  sec400m = Number(sec400m);
  const totalSeconds400m = 60 * min400m + sec400m;

  const CSSSeconds = computeCSS(totalSeconds200m, totalSeconds400m);
  const CSSSec = Math.floor(CSSSeconds % 60);
  const CSSMin = Math.floor(CSSSeconds / 60);

  $('#CSSSpeed').promise().done(() => {
    $('#CSSSpeed').html(`Your CSS Speed is ${CSSMin}:${String(CSSSec).padStart(2, '0')} min / 100m`);
  });
}

function get_css_calculator(swimSpeed) {
  let cssString = '<p><h3>CSS calculator</h3>';
  if (swimSpeed == 'novice') {
    cssString += 'Insert the recorded 200m time and press the <i>Compute CSS</i> button to compute your CSS.';
    cssString += '<p>200m min: <input type="text" id="min200m" value=""/>'
        + ' sec: <input type="text" id="sec200m" value=""/></p>'
        + '<p><button onclick="computeCSSNovice()" id="computeCSSButton">Compute CSS</button></p>';
  } else {
    cssString += 'Insert the recorded 200m and 400m time and press the <i>Compute CSS</i> button to compute your CSS.</br>';
    cssString += '<p>200m min: <input type="text" id="min200m" value=""/>'
        + ' sec: <input type="text" id="sec200m" value=""/></br>'
        + ' 400m min: <input type="text" id="min400m" value=""/>'
        + ' sec: <input type="text" id="sec400m" value=""/></p>'
        + '<p><button onclick="computeCSSNoNovice()" id="computeCSSButton">Compute CSS</button></p>';
  }
  cssString += '<p><div id="CSSSpeed"></div></p>';
  cssString += '</p>';
  return cssString;
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
    main = cssTest.main_text + get_css_calculator(swimSpeed);
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

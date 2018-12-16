/* MIT License
 * Copyright (c) 2018 Noud Aldenhoven
 */

/* eslint-disable max-len */

const trainingdb = TAFFY([ // eslint-disable-line no-unused-vars,no-undef
  /* All warming-up training schedules. */

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '200m with fins, &uarr; broken arrow &darr; freestyle steady + R15s<br>'
                + '100m easy freestyle - nice and smooth',
    distance: 300,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '300m with pull buoy - focus on good roll + R20s<br>'
      + '200m with fins, &uarr; broken arrow &darr; freestyle steady + R15s<br>'
      + '100m easy freestyle - nice and smooth',
    distance: 600,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '400m easy freestyle, focus on smooth exhalation and bilateral breathing + R30s<br>'
      + '300m with pull buoy - focus on good roll + R20s<br>'
      + '200m with fins &uarr; broken arrow &darr; freestyle steady + R15s<br>'
      + '100m easy freestyle - nice and smooth',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '200m with fins, long, smooth strokes, breathing easily + R20s<br>'
      + '2 x 100m fins &uarr; 6/1/6 &darr; freestyle + R15s',
    distance: 400,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2x set: 200m with fins, long, smooth strokes, breathing easily + R20s<br>'
      +'&nbsp;&nbsp; 2 x 100m fins &uarr; 6/1/6 &darr; freestyle + R15s',
    distance: 800,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2x set: 200m with fins, long, smooth strokes, breathing easily + R20s<br>'
      + '&nbsp;&nbsp; 2 x 100m with fins &uarr; 6/1/6 &darr; freestyle + R15s<br>'
      + '&nbsp;&nbsp; 2 x 50m easy freestyle - nice and relaxed + R10s',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '100m easy freestyle + R10s<br>'
      + '2 x 50m with pull buoy - focus on catch + R10s<br>'
      + '4 x 25m freestyle as odd numbers fast and even numbers easy + R5s',
    distance: 300,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: 'set 1: 100m easy freestyle + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m with pull buoy - focus on catch + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m freestyle as odd# fast and even# easy + R5s<br>'
      + 'set 2: freestyle fins breathing each 5 strokes + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m torpedo kick, alternating front and back + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m, where breath each 1) 3 strokes 2) 5 strokes 3) 7 strokes 4) 3 strokes + R5',
    distance: 600,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: 'set 1: 100m easy freestyle + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m with pull buoy - focus on catch + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m freestyle as odd# fast and even# easy + R5s<br>'
      + 'set 2: freestyle fins breathing each 5 strokes + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m torpedo kick, alternating front and back + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m, where breath each 1) 3 strokes 2) 5 strokes 3) 7 strokes 4) 3 strokes + R5<br>'
      + 'set 3: 100m freestyle, nice and smooth + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m with fins, as 25m shoulder tap, 25m freestyle + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m freestyle swim progressively faster + R5',
    distance: 900,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 x 200m + R20s<br>'
      + '&nbsp;&nbsp; 1st set: freestyle breathing 25m left, 25m right, 50m normal<br>'
      + '&nbsp;&nbsp; 2nd set: freestyle with fins &uarr; 6/1/6 &darr; freestyle',
    distance: 400,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '3 x 200m + R20s<br>'
      + '&nbsp;&nbsp; 1st set: freestyle breathing 25m left, 25m right, 50m normal<br>'
      + '&nbsp;&nbsp; 2nd set: fins &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp; 3th set: freestyle breathing 25m left, 25m right, 50m normal',
    distance: 600,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '5 x 200m + R20s<br>'
      + '&nbsp;&nbsp; 1st set: freestyle breathing 25m left, 25m right, 50m normal<br>'
      + '&nbsp;&nbsp; 2nd set: fins &uarr; 6/1/6 &darr; freestyle'
      + '&nbsp;&nbsp; 3th set: freestyle breathing 25m left, 25m right, 50m normal<br>'
      + '&nbsp;&nbsp; 4th set: with pull buoy as 15m scull#1 + 85m freestyle<br>'
      + '&nbsp;&nbsp; 5th set: freestyle easy - nice and relaxed',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '300m freestyle, focus on exhalation and a fluid stroke. Try to hold a reasonable consistend pace',
    distance: 300,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '500m freestyle, focus on exhalation and a fluid stroke. Try to hold a reasonable consistend pace',
    distance: 500,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 x 500m freestyle + R30s<br>'
      + '&nbsp;&nbsp; 1st set: focus on exhalation and a fluid stroke. Try to hold a reasonable consistend pace<br>'
      + '&nbsp;&nbsp; 2nd set: 200m with pull buoy and band, 100m only band, 200m with pull bouy and band',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '200m freestyle easy - breathing bilateral + R15s<br>'
      +'200m with pull buoy, alternate breathing side each 25m + R15s',
    distance: 400,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '200m freestyle easy - breathing bilateral + R15s<br>'
      + '200m with pull buoy, alternate breathing side each 25m + R15s<br>'
      + '200m with fins, as 25m left Unco, 25m freestyle, 25m right Unco, 25m freestyle + R15s',
    distance: 600,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '200m freestyle easy - breathing bilateral + R15s<br>'
      + '200m with pull buoy, alternate breathing side per 25m + R15s<br>'
      + '200m with fins, as  25m left Unco, 25m freestyle, 25m right Unco, 25m freestyle<br>'
      + '200m with pull buoy, alternate breathing sides each 25m<br>'
      + '200m freestyle easy - breathing bilateral',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 50m freestyle easy',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '200m freestyle easy',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '200m freestyle easy',
    distance: 200,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 50m, as 25m breast easy, 25m freestyle easy',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '100m freestyle, 100m backstroke',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '100m freestyle, 100m backstroke',
    distance: 200,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 50m freestyle easy, sink down before every 50m',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '200m freestyle easy, sink down before every 50m',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '200m freestyle easy, sink down before every 50m',
    distance: 200,
  },

  /* All build training schedules */
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 50m freestyle + R15s - 25m fast holding good form, 25m easy',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '6 x 50m freestyle + R15s - 25m fast holding good form, 25m easy',
    distance: 300,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '8 x 50m freestyle + R15s - 25m fast holding good form, 25m easy',
    distance: 400,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 50m freestyle + R15s - every 50m a little bit faster',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '6 x 50m freestyle + R15s - every 50m a little bit faster',
    distance: 300,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 x (4 x 50m freestyle + R15s - every 50m a little bit faster)',
    distance: 400,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 50m freestyle + R20s - each 50m accelerate from an easy to a fast pace',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '4 x 50m freestyle + R20s - each 50m accelerate from an easy to a fast pace<br>'
      + '100m freestyle easy + R20s',
    distance: 300,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '4 x 50m freestyle + R20s - each 50m accelerate from an easy to a fast pace<br>'
      + '100m backstroke + R20s<br>'
      + '100m breaststroke + R20s',
    distance: 400,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 50m freestyle + R20s - tempo until you have to take a breathe',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '6 x 50m freestyle + R20s - tempo until you have to take a breathe',
    distance: 300,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '6 x 50m freestyle + R20s - tempo until you have to take a breathe<br>'
      + '100m backstroke',
    distance: 400,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 x 50m freestyle + R20s - alternate: 10 fast strokes, 10 easy long strokes, breath easy!',
    distance: 100,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '4 x 50m freestyle + R20s - alternate: 10 fast strokes, 10 easy long strokes, breath easy!',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '4 x 75m freestyle + R20s - alternate: 10 fast strokes, 10 easy long strokes, breath easy!',
    distance: 300,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'beginner',
    swim_time: '60',
    training_text: '2 x 50m as 25m backstroke + 25m breaststroke, 25m breaststoke + 25m freestyle',
    distance: 100,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '4 x 50m as<br>'
      + '&nbsp;&nbsp; 25m butterfly + 25m back<br>'
      + '&nbsp;&nbsp; 25m back + 25m breast<br>'
      + '&nbsp;&nbsp; 25m breast + 25m free<br>'
      + '&nbsp;&nbsp; 25m free + 25m butterfly<br>',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 x (4 x 50m) as<br>'
      + '&nbsp;&nbsp; 25m butterfly + 25m back<br>'
      + '&nbsp;&nbsp; 25m back + 25m breast<br>'
      + '&nbsp;&nbsp; 25m breast + 25m free<br>'
      + '&nbsp;&nbsp; 25m free + 25m butterfly<br>',
    distance: 400,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '6 x 50m with pull buoy + R10s - 15m scull#1, 10m doggy paddle, 10m fast, 15m easy',
    distance: 300,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '8 x 50m with pull buoy + R10s - 15m scull#1, 10m doggy paddle, 10m fast, 15m easy',
    distance: 400,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '10 x 50m with pull buoy + R10s - 15m scull#1, 10m doggy paddle, 10m fast, 15m easy',
    distance: 500,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '200m freestyle + R20s<br>'
      + '&nbsp;&nbsp; 50m fast and smooth<br>'
      + '&nbsp;&nbsp; 100m cruise at moderate intensity<br>'
      + '&nbsp;&nbsp; 50m increase speed and finish strong',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 x 200m freestyle + R20s<br>'
      + '&nbsp;&nbsp; 50m fast and smooth<br>'
      + '&nbsp;&nbsp; 100m cruise at moderate intensity<br>'
      + '&nbsp;&nbsp; 50m increase speed and finish strong',
    distance: 400,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '3 x 200m freestyle + R20s, where:<br>'
      + '&nbsp;&nbsp; 50m fast and smooth<br>'
      + '&nbsp;&nbsp; 100m cruise at moderate intensity<br>'
      + '&nbsp;&nbsp; 50m increase speed and finish strong',
    distance: 600,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '4x50m freestyle + R20s - sprint until you have to take a breathe',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4x50m freestyle + R20s - sprint until you have to take a breathe',
    distance: 200,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '4x50m freestyle + R15s - 25m fast, 25m easy',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4x50m freestyle + R15s - 25m fast, 25m easy',
    distance: 200,
  },

  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '4x50m freestyle + R20s - accelerate from slow to fast pace',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4x50m freestyle + R20s - accelerate from slow to fast pace',
    distance: 200,
  },

  /* All main training schedules */
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 200m + R20s, where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 x (4 x 200m + R20s), where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '3 x (4 x 200m + R20s), where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 2400,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 100m + R20s, where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '2 x (4 x 100m + R20s), where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '2 x (4 x 100m + R20s), where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '3 x 200m + R15s, where:<br>'
      + ' &nbsp;&nbsp; 100m fins: 25m left side kick, 25m right side kick, 50m freestyle<br>'
      + ' &nbsp;&nbsp; 100m fins: 50m 6/1/6, 50m freestyle',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '5 x 200m + R15s, where:<br>'
      + ' &nbsp;&nbsp; 100m fins: 25m left side kick, 25m right side kick, 50m freestyle<br>'
      + ' &nbsp;&nbsp; 100m fins: 50m 6/1/6, 50m freestyle',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '7 x 200m + R15s, where:<br>'
      + ' &nbsp;&nbsp; 100m fins: 25m left side kick, 25m right side kick, 50m freestyle<br>'
      + ' &nbsp;&nbsp; 100m fins: 50m 6/1/6, 50m freestyle',
    distance: 1400,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '2 x 200m + R15s, where:<br>'
      + ' &nbsp;&nbsp; 100m fins: 25m left side kick, 25m right side kick, 50m freestyle<br>'
      + ' &nbsp;&nbsp; 100m fins: 50m 6/1/6, 50m freestyle',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '3 x 200m + R15s, where:<br>'
      + ' &nbsp;&nbsp; 100m fins: 25m left side kick, 25m right side kick, 50m freestyle<br>'
      + ' &nbsp;&nbsp; 100m fins: 50m 6/1/6, 50m freestyle',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4 x 200m + R15s, where:<br>'
      + ' &nbsp;&nbsp; 100m fins: 25m left side kick, 25m right side kick, 50m freestyle<br>'
      + ' &nbsp;&nbsp; 100m fins: 50m 6/1/6, 50m freestyle',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + ' &nbsp;&nbsp; 25m kick (use pull buoy as kick board)<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + '4 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m breathing every 3 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing 5 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing at least favourite side',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '6 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + ' &nbsp;&nbsp; 25m kick (use pull buoy as kick board)<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + '6 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m breathing every 3 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing 5 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing at least favourite side',
    distance: 900,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '8 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + ' &nbsp;&nbsp; 25m kick (use pull buoy as kick board)<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + '8 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m breathing every 3 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing 5 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing at least favourite side',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '2 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + ' &nbsp;&nbsp; 25m kick (use pull buoy as kick board)<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + '2 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m breathing every 3 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing 5 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing at least favourite side',
    distance: 300,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '3 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + ' &nbsp;&nbsp; 25m kick (use pull buoy as kick board)<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + '3 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m breathing every 3 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing 5 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing at least favourite side',
    distance: 450,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + ' &nbsp;&nbsp; 25m kick (use pull buoy as kick board)<br>'
      + ' &nbsp;&nbsp; 25m with pull buoy<br>'
      + '4 x 75m + R10s, where:<br>'
      + ' &nbsp;&nbsp; 25m breathing every 3 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing 5 strokes<br>'
      + ' &nbsp;&nbsp; 25m breathing at least favourite side',
    distance: 600,
  },

  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '3 x (5 x 50m + R15s), even numbers = drills, odd numbers = 25m freestyle fast, 25m freestyle easy, where:<br>'
      + ' &nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m ride side kick<br>'
      + ' &nbsp;&nbsp; 2nd set: with fins, 25m 6/3/6, 25m freestyle<br>'
      + ' &nbsp;&nbsp; 3th set: 10m scull#1, 10m scull#2, 30m freestyle',
    distance: 750,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '3 x (7 x 50m + R15s), even numbers = drills, odd numbers = 25m freestyle fast, 25m freestyle easy, where:<br>'
      + '&nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m ride side kick<br>'
      + '&nbsp;&nbsp; 2nd set: with fins, 25m 6/3/6, 25m freestyle<br>'
      + '&nbsp;&nbsp; 3th set: 10m scull#1, 10m scull#2, 30m freestyle',
    distance: 1050,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '3 x (10 x 50m + R15s), even numbers = drills, odd numbers = 25m freestyle fast, 25m freestyle easy, where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, 25m left side kick, 25m ride side kick<br>'
      + '&nbsp;&nbsp;2nd set: with fins, 25m 6/3/6, 25m freestyle<br>'
      + '&nbsp;&nbsp;3th set: 10m scull#1, 10m scull#2, 30m freestyle',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '3 x (3 x 50m + R15s), even numbers = drills, odd numbers = 25m freestyle fast, 25m freestyle easy, where:<br>'
      + ' &nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m ride side kick<br>'
      + ' &nbsp;&nbsp; 2nd set: with fins, 25m 6/3/6, 25m freestyle<br>'
      + ' &nbsp;&nbsp; 3th set: 10m scull#1, 10m scull#2, 30m freestyle',
    distance: 450,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '3 x (4 x 50m + R15s), even numbers = drills, odd numbers = 25m freestyle fast, 25m freestyle easy, where:<br>'
      + ' &nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m ride side kick<br>'
      + ' &nbsp;&nbsp; 2nd set: with fins, 25m 6/3/6, 25m freestyle<br>'
      + ' &nbsp;&nbsp; 3th set: 10m scull#1, 10m scull#2, 30m freestyle',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '3 x (5 x 50m + R15s), even numbers = drills, odd numbers = 25m freestyle fast, 25m freestyle easy, where:<br>'
      + ' &nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m ride side kick<br>'
      + ' &nbsp;&nbsp; 2nd set: with fins, 25m 6/3/6, 25m freestyle<br>'
      + ' &nbsp;&nbsp; 3th set: 10m scull#1, 10m scull#2, 30m freestyle',
    distance: 750,
  },

  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '6 x 150m + R20s - Focus on stoke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 900,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '6 x 200m + R20s - Focus on stoke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '6 x 250m + R20s - Focus on stoke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 100m + R20s - Focus on stoke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '6 x 100m + R20s - Focus on stoke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4 x 200m + R20s - Focus on stoke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '500m + R30s, shoulder tap drill, where:<br>'
      + '&nbsp;&nbsp; 25m drill, 25m freestyle<br>'
      + '&nbsp;&nbsp; 50m drill, 50m freestyle<br>'
      +' &nbsp;&nbsp; 75m drill, 75m freestyle<br>'
      + '&nbsp;&nbsp; 100m drill, 100m freestyle',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 x 500m + R30s, shoulder tap drill, where:<br>'
      + '&nbsp;&nbsp; 25m drill, 25m freestyle<br>'
      + '&nbsp;&nbsp; 50m drill, 50m freestyle<br>'
      +' &nbsp;&nbsp; 75m drill, 75m freestyle<br>'
      + '&nbsp;&nbsp; 100m drill, 100m freestyle',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '3 x 500m + R30s, shoulder tap drill, where:<br>'
      + '&nbsp;&nbsp; 25m drill, 25m freestyle<br>'
      + '&nbsp;&nbsp; 50m drill, 50m freestyle<br>'
      +' &nbsp;&nbsp; 75m drill, 75m freestyle<br>'
      + '&nbsp;&nbsp; 100m drill, 100m freestyle',
    distance: 1500,
  },

  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '100-200-300-300-200-100 freestyle at CSS + R30s',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '100-200-300-400-300-200-100 freestyle at CSS + R30s',
    distance: 1400,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '100-200-300-400-400-300-200-100 freestyle at CSS + R30s',
    distance: 1800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '50-100-150-150-100-50 freestyle at CSS + R15s',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '50-100-150-200-150-100-50 freestyle at CSS + R15s',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '50-100-150-200-200-150-100-50 freestyle at CSS + R15s',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '15x50m freestyle + R30s: 25m fast, 25m easy',
    distance: 750,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '20x50m freestyle + R30s: 25m fast, 25m easy',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '25x50m freestyle + R30s: 25m fast, 25m easy',
    distance: 1250,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '8x50m freestyle + R30s: 25m fast, 25m easy',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '10x50m freestyle + R30s: 25m fast, 25m easy',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '12x50m freestyle + R30s: 25m fast, 25m easy',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4x300m freestyle + R30s if possible drafting steadily with a partner where:<br>'
            + '&nbsp;&nbsp; 1e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 2e with fins and head-up sighting ever 9 strokes<br>'
            + '&nbsp;&nbsp; 3e with pull buoy, breathing to least favorite side<br>'
            + '&nbsp;&nbsp; 4e normale freestyle',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '6x300m freestyle + R30s if possible drafting steadily with a partner where:<br>'
            + '&nbsp;&nbsp; 1e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 2e with fins and head-up sighting ever 9 strokes<br>'
            + '&nbsp;&nbsp; 3e with pull buoy, breathing to least favorite side<br>'
            + '&nbsp;&nbsp; 4e normale freestyle<br>'
            + '&nbsp;&nbsp; 5e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 6e with fins and head-up sighting ever 9 strokes<br>',
    distance: 1800,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2x4x300m freestyle + R30s if possible drafting steadily with a partner where:<br>'
            + '&nbsp;&nbsp; 1e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 2e with fins and head-up sighting ever 9 strokes<br>'
            + '&nbsp;&nbsp; 3e with pull buoy, breathing to least favorite side<br>'
            + '&nbsp;&nbsp; 4e normale freestyle',
    distance: 2400,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4x150m freestyle + R30s if possible drafting steadily with a partner where:<br>'
            + '&nbsp;&nbsp; 1e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 2e with fins and head-up sighting ever 9 strokes<br>'
            + '&nbsp;&nbsp; 3e with pull buoy, breathing to least favorite side<br>'
            + '&nbsp;&nbsp; 4e normale freestyle',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '6x150m freestyle + R30s if possible drafting steadily with a partner where:<br>'
            + '&nbsp;&nbsp; 1e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 2e with fins and head-up sighting ever 9 strokes<br>'
            + '&nbsp;&nbsp; 3e with pull buoy, breathing to least favorite side<br>'
            + '&nbsp;&nbsp; 4e normale freestyle<br>'
            + '&nbsp;&nbsp; 5e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 6e with fins and head-up sighting ever 9 strokes<br>',
    distance: 900,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4x300m freestyle + R30s if possible drafting steadily with a partner where:<br>'
            + '&nbsp;&nbsp; 1e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 2e with fins and head-up sighting ever 9 strokes<br>'
            + '&nbsp;&nbsp; 3e with pull buoy, breathing to least favorite side<br>'
            + '&nbsp;&nbsp; 4e normale freestyle',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: 'Freestyle, all at CSS+5s + R20s</br>'
            + '&nbsp;&nbsp; 10x50m</br>'
            + '&nbsp;&nbsp; 5x100m</br>'
            + '&nbsp;&nbsp; 2x200m</br>'
            + '&nbsp;&nbsp; 500m</br>',
    distance: 1900,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: 'Freestyle, all at CSS+5s + R20s</br>'
            + '&nbsp;&nbsp; 15x50m</br>'
            + '&nbsp;&nbsp; 10x100m</br>'
            + '&nbsp;&nbsp; 5x200m</br>'
            + '&nbsp;&nbsp; 500m</br>',
    distance: 3250,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: 'Freestyle, all at CSS+5s + R20s</br>'
            + '&nbsp;&nbsp; 20x50m</br>'
            + '&nbsp;&nbsp; 10x100m</br>'
            + '&nbsp;&nbsp; 5x200m</br>'
            + '&nbsp;&nbsp; 2x500m</br>',
    distance: 4000,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: 'Freestyle, all at CSS+5s + R20s</br>'
            + '&nbsp;&nbsp; 4x50m</br>'
            + '&nbsp;&nbsp; 3x100m</br>'
            + '&nbsp;&nbsp; 2x150m</br>'
            + '&nbsp;&nbsp; 200m</br>',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: 'Freestyle, all at CSS+5s + R20s</br>'
            + '&nbsp;&nbsp; 6x50m</br>'
            + '&nbsp;&nbsp; 4x100m</br>'
            + '&nbsp;&nbsp; 2x200m</br>'
            + '&nbsp;&nbsp; 300m</br>',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: 'Freestyle, all at CSS+5s + R20s</br>'
            + '&nbsp;&nbsp; 8x50m</br>'
            + '&nbsp;&nbsp; 4x100m</br>'
            + '&nbsp;&nbsp; 2x200m</br>'
            + '&nbsp;&nbsp; 500m</br>',
    distance: 1700,
  },

  {
    training_part: 'cssTest',
    training_type: 'cssTest',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: 'CSS Test',
    warming_up_text: '2 x 100m easy + R20s',
    build_text: '4 x 25m kick + R20s</br>'
      + '4 x 25m freestyle, slowly increase speed in each 25m</br>'
      + '100m easy + R60s',
    main_text: 'CSS Test:</br>'
            + '&nbsp;&nbsp; 200m Time Trial (record your time)</br></br>'
            + 'Calculate your CSS at <a href="http://www.swimsmooth.com/improve/intermediate/swim-smooth-css-calculator">Swim Smooth CSS calculator</a>. Use 2 x 200m time for your 400m time.',
    cooling_down_text: '200m freestyle easy, with pull buoy',
    distance: 900,
  },
  {
    training_part: 'cssTest',
    training_type: 'cssTest',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: 'CSS Test',
    warming_up_text: '4 x 100m easy + R20s',
    build_text: '4 x 25m kick + R10s</br>'
      + '4 x 50m freestyle, slowly increase speed in each 50m</br>'
      + '100m easy + R60s',
    main_text: 'CSS Test:</br>'
            + '&nbsp;&nbsp; 400m Time Trial (record your time)</br>'
            + '&nbsp;&nbsp; 4 x 50m easy + R20s</br>'
            + '&nbsp;&nbsp; 200m Time Trial (record your time)</br></br>'
            + 'Calculate your CSS at <a href="http://www.swimsmooth.com/improve/intermediate/swim-smooth-css-calculator">Swim Smooth CSS calculator</a>',
    cooling_down_text: '200m freestyle easy, with pull buoy',
    distance: 1600,
  },
  {
    training_part: 'cssTest',
    training_type: 'cssTest',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: 'CSS Test',
    warming_up_text: '4 x 100m easy + R20s',
    build_text: '4 x 25m kick + R10s</br>'
      + '4 x 50m freestyle, slowly increase speed in each 50m</br>'
      + '100m easy + R60s',
    main_text: 'CSS Test:</br>'
            + '&nbsp;&nbsp; 400m Time Trial (record your time)</br>'
            + '&nbsp;&nbsp; 4 x 50m easy + R20s</br>'
            + '&nbsp;&nbsp; 200m Time Trial (record your time)</br></br>'
            + 'Calculate your CSS at <a href="http://www.swimsmooth.com/improve/intermediate/swim-smooth-css-calculator">Swim Smooth CSS calculator</a>',
    cooling_down_text: '200m freestyle easy, with pull buoy',
    distance: 1800,
  },
  {
    training_part: 'cssTest',
    training_type: 'cssTest',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: 'CSS Test',
    warming_up_text: '2 x 100m easy + R20s',
    build_text: '4 x 25m kick + R10s</br>'
      + '4 x 25m freestyle, slowly increase speed in each 25m</br>'
      + '100m easy + R60s',
    main_text: 'CSS Test:</br>'
            + '&nbsp;&nbsp; 200m Time Trial (record your time)</br></br>'
            + 'Calculate your CSS at <a href="http://www.swimsmooth.com/improve/intermediate/swim-smooth-css-calculator">Swim Smooth CSS calculator</a>. Use 2 x 200m time for your 400m time.',
    cooling_down_text: '200m freestyle easy + R60s, with pull buoy</br>'
      + '900m easy',
    distance: 2400,
  },
  {
    training_part: 'cssTest',
    training_type: 'cssTest',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: 'CSS Test',
    warming_up_text: '4 x 100m easy + R20s',
    build_text: '4 x 25m kick + R10s</br>'
      + '4 x 50m freestyle, slowly increase speed in each 50m</br>'
      + '100m easy + R60s',
    main_text: 'CSS Test:</br>'
            + '&nbsp;&nbsp; 400m Time Trial (record your time)</br>'
            + '&nbsp;&nbsp; 4 x 50m easy + R20s</br>'
            + '&nbsp;&nbsp; 200m Time Trial (record your time)</br></br>'
            + 'Calculate your CSS at <a href="http://www.swimsmooth.com/improve/intermediate/swim-smooth-css-calculator">Swim Smooth CSS calculator</a>',
    cooling_down_text: '200m freestyle easy + R60s, with pull buoy</br>'
      + '400m easy',
    distance: 2000,
  },
  {
    training_part: 'cssTest',
    training_type: 'cssTest',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: 'CSS Test',
    warming_up_text: '4 x 100m easy + R20s',
    build_text: '4 x 25m kick + R10s</br>'
      + '4 x 50m freestyle, slowly increase speed in each 50m</br>'
      + '100m easy + R60s',
    main_text: 'CSS Test:</br>'
            + '&nbsp;&nbsp; 400m Time Trial (record your time)</br>'
            + '&nbsp;&nbsp; 4 x 50m easy + R20s</br>'
            + '&nbsp;&nbsp; 200m Time Trial (record your time)</br></br>'
            + 'Calculate your CSS at <a href="http://www.swimsmooth.com/improve/intermediate/swim-smooth-css-calculator">Swim Smooth CSS calculator</a>',
    cooling_down_text: '200m freestyle easy + R60s, with pull buoy</br>'
      + '2 x 200m easy + R60s</br>'
      + '400m easy',
    distance: 2400,
  },

  /* All cooling down schedules */
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '200m freestyle',
    distance: 200,
  },
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '300m freestyle',
    distance: 300,
  },
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '400m freestyle',
    distance: 400,
  },
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '100m freestyle',
    distance: 100,
  },
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '100m freestyle',
    distance: 100,
  },
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '100m freestyle',
    distance: 100,
  },
]);

/* eslint-enable max-len */

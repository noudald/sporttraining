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
      + 'set 2: 100m freestyle with fins breathing each 5 strokes + R10s<br>'
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
      + 'set 2: 100m freestyle with fins breathing each 5 strokes + R10s<br>'
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
    training_text: '300m freestyle, focus on exhalation and a fluid stroke. Try to hold a reasonable consistent pace',
    distance: 300,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '500m freestyle, focus on exhalation and a fluid stroke. Try to hold a reasonable consistent pace',
    distance: 500,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 x 500m freestyle + R30s<br>'
      + '&nbsp;&nbsp; 1st set: focus on exhalation and a fluid stroke. Try to hold a reasonable consistent pace<br>'
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
    training_text: '4 x 50m freestyle easy, sink down to the bottom of the pool every 50m',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '200m freestyle easy, sink down to the bottom of the pool every 50m',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '200m freestyle easy, sink down to the bottom of the pool every 50m',
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
      + '&nbsp;&nbsp;3th set: with fins, &uarr; broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '4 x 200m + R20s, where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr; broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '4 x 200m + R20s, where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr; broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 100m + R20s, where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr; broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '4 x 100m + R20s, where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr; broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4 x 100m + R20s, where:<br>'
      + '&nbsp;&nbsp;1st set: with fins, &uarr; 6/1/6 &darr; freestyle<br>'
      + '&nbsp;&nbsp;2nd set: with pull buoy, breathing 3/5/7/3...<br>'
      + '&nbsp;&nbsp;3th set: with fins, &uarr; broken arrow &darr; freestyle<br>'
      + '&nbsp;&nbsp;4th set: freestyle - nice and smooth',
    distance: 400,
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
      + ' &nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m right side kick<br>'
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
      + '&nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m right side kick<br>'
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
      + '&nbsp;&nbsp;1st set: with fins, 25m left side kick, 25m right side kick<br>'
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
      + ' &nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m right side kick<br>'
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
      + ' &nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m right side kick<br>'
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
      + ' &nbsp;&nbsp; 1st set: with fins, 25m left side kick, 25m right side kick<br>'
      + ' &nbsp;&nbsp; 2nd set: with fins, 25m 6/3/6, 25m freestyle<br>'
      + ' &nbsp;&nbsp; 3th set: 10m scull#1, 10m scull#2, 30m freestyle',
    distance: 750,
  },

  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 150m + R20s - Focus on stroke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '4 x 200m + R20s - Focus on stroke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '4 x 250m + R20s - Focus on stroke rate, where:<br>'
      + '&nbsp;&nbsp; 1st: basic stroke rate<br>'
      + '&nbsp;&nbsp; 2nd: basic stroke rate + 5 SPM<br>'
      + '&nbsp;&nbsp; 3th: basic stroke rate - 5 SPM<br>'
      + '&nbsp;&nbsp; 4th: basic stroke rate + 3 SPM',
    distance: 1000,
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
    training_text: '10 x 100m at CSS + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace and take 1 beep recovery per 100m',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '14 or 16 x 100m at CSS + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace and take 1 beep recovery per 100m',
    distance: 1400,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '18 or 20 x 100m at CSS + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace and take 1 beep recovery per 100m',
    distance: 1800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '5 x 100m at CSS + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace and take 1 beep recovery per 100m',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '8 x 100m at CSS + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace and take 1 beep recovery per 100m',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '10 x 100m at CSS + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace and take 1 beep recovery per 100m',
    distance: 1000,
  },

  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '5 x 200m at CSS+2s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 2s and take 1 beep recovery per 100m',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '7 x 200m at CSS+2s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 2s and take 1 beep recovery per 100m',
    distance: 1400,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '8 x 200m at CSS+2s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 2s and take 1 beep recovery per 100m',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '3 x 200m at CSS+2s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 2s and take 1 beep recovery per 100m',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '4 x 200m at CSS+2s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 2s and take 1 beep recovery per 100m',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '5 x 200m at CSS+2s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 2s and take 1 beep recovery per 100m',
    distance: 1000,
  },

  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 x 400m at CSS+4s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 4s and take 1 beep recovery per 100m',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '3 x 400m at CSS+4s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 4s and take 1 beep recovery per 100m',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '4 x 400m at CSS+4s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 4s and take 1 beep recovery per 100m',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '3 x 150m at CSS+3s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 3s and take 1 beep recovery per 100m',
    distance: 450,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '2 x 300m at CSS+3s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 3s and take 1 beep recovery per 100m',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '3 x 300m at CSS+3s / 100m + R20s, hold fastest maintainable pace, if use metrome: set this per 25m at CSS pace + 3s and take 1 beep recovery per 100m',
    distance: 900,
  },

  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: 'For each 2 beeps recovery (beep is swimtime per 25m):'
      + '100m at CSS<br>'
      + '150m at CSS+1s / 100m<br>'
      + '200m at CSS+2s / 100m<br>'
      + '150m at CSS+1s / 100m<br>'
      + '100m at CSS',
    distance: 700,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: 'For each 2 beeps recovery (beep is swimtime per 25m):'
      + '100m at CSS<br>'
      + '200m at CSS+2s / 100m<br>'
      + '300m at CSS+3s / 100m<br>'
      + '200m at CSS+2s / 100m<br>'
      + '100m at CSS',
    distance: 900,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: 'For each 2 beeps recovery (beep is swimtime per 25m):'
      + '100m at CSS<br>'
      + '200m at CSS+2s / 100m<br>'
      + '300m at CSS+3s / 100m<br>'
      + '300m at CSS+3s / 100m<br>'
      + '200m at CSS+2s / 100m<br>'
      + '100m at CSS',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: 'For each 2 beeps recovery (beep is swimtime per 25m):'
      + '50m at CSS<br>'
      + '100m at CSS+1s / 100m<br>'
      + '150m at CSS+2s / 100m<br>'
      + '100m at CSS+1s / 100m<br>'
      + '50m at CSS',
    distance: 450,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: 'For each 2 beeps recovery (beep is swimtime per 25m):'
      + '100m at CSS<br>'
      + '200m at CSS+2s / 100m<br>'
      + '300m at CSS+3s / 100m<br>'
      + '200m at CSS+2s / 100m<br>'
      + '100m at CSS',
    distance: 900,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: 'For each 2 beeps recovery (beep is swimtime per 25m):'
      + '100m at CSS<br>'
      + '200m at CSS+2s / 100m<br>'
      + '300m at CSS+3s / 100m<br>'
      + '200m at CSS+2s / 100m<br>'
      + '100m at CSS',
    distance: 900,
  },

  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '1 x (3 x 100m at CSS, 2 x 150m at CSS+1s / 100m, 200m at CSS+2s / 100m), + R20s of 1 beep (beep is swimtime per 25m)',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 x (3 x 100m at CSS, 200m at CSS+2s / 100m, 300m at CSS+3s / 100m), + R20s of 1 beep (beep is swimtime per 25m)',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 x (3 x 100m at CSS, 2 x 200m at CSS+2s / 100m, 300m at CSS+3s / 100m), + R20s of 1 beep (beep is swimtime per 25m)',
    distance: 2000,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '100m at CSS, 150m at CSS+1s / 100m,  200m at CSS+2s / 100m + R20s of 1 beep (beep is swimtime per 25m)',
    distance: 450,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '3 x 100m at CSS, 200m at CSS+2s / 100m, 300m at CSS+3s / 100m + R20s of 1 beep (beep is swimtime per 25m)',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '3 x 100m at CSS, 2 x 200m at CSS+2s / 100m, 300m at CSS+2s / 100m + R20s of 1 beep (beep is swimtime per 25m)',
    distance: 900,
  },

  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 x 100m at CSS, 200m at CSS+2s / 100m, 3 x 100m at CSS, 300m at CSS+3s / 100m + R20s or 1 beep (beep is swimtime per 25m)',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 x 100m at CSS, 200m at CSS+2s / 100m, 2 x (3 x 100m at CSS, 300m at CSS+3s / 100m) + R20s or 1 beep (beep is swimtime per 25m)',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 x 100m at CSS, 200m at CSS+2s / 100m, 3 x 100m at CSS, 300m at CSS+3s / 100m, 4 x 100m at CSS, 400m at CSS+4s / 100m + R20s or 1 beep (beep is swimtime per 25m)',
    distance: 1800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '100m at CSS, 200m at CSS+2s / 100m, 100m at CSS, 300m at CSS+3s / 100m + R20s or 1 beep (beep is swimtime per 25m)',
    distance: 700,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '2 to 3 x (100m at CSS, 200m at CSS+2s / 100m + R20s or 1 beep (beep is swimtime per 25m))',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '2 to 3 x (2 x 100m at CSS, 200m at CSS+2s / 100m + R20s or 1 beep (beep is swimtime per 25m))',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '3 x 300m at CSS+3s / 100m + R40s or 2 beeps (beep is swimtime per 25m), 1 & 3 = freestyle, 2 = Pull buoy & Paddles',
    distance: 900,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '4 x 300m at CSS+3s / 100m + R40s or 2 beeps (beep is swimtime per 25m), 1 & 3 = freestyle,  2 & 4 = Pull buoy & Paddles',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '6 x 300m at CSS+3s / 100m + R40s or 2 beeps (beep is swimtime per 25m), 1 & 3 & 5 = freestyle,  2 & 4 & 6 = Pull buoy & Paddles',
    distance: 1800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '2 x 300m at CSS+3s / 100m + R40s or 2 beeps (beep is swimtime per 25m), 1 = freestyle, 2 = Pull buoy & Paddles',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '3 x 250m at CSS+3s / 100m + R30s or 2 beeps (beep is swimtime per 25m), 1 & 3 = freestyle, 2 = Pull buoy & Paddles',
    distance: 750,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '3 x 300m at CSS+3s / 100m + R40s or 2 beeps (beep is swimtime per 25m), 1 & 3 = freestyle, 2 = Pull buoy & Paddles',
    distance: 900,
  },

  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '20 x 50m Spike set:<br>'
      + '&nbsp;&nbsp; 8 x 50m freestyle, sprint every 4th: starttime = CSS+5s per 50m</br>'
      + '&nbsp;&nbsp; 6 x 50m freestyle, sprint every 3th: starttime = CSS+10s per 50m</br>'
      + '&nbsp;&nbsp; 4 x 50m freestyle, sprint every 2nd: starttime = CSS+15s per 50m</br>'
      + '&nbsp;&nbsp; 2 x 50m freestyle, sprint every time: starttime = CSS+20s per 50m',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '31 x 50m Spike set:<br>'
      + '&nbsp;&nbsp; 12 x 50m freestyle, sprint every 4th: starttime = CSS+5s per 50m</br>'
      + '&nbsp;&nbsp; 9 x 50m freestyle, sprint every 3th: starttime = CSS+10s per 50m</br>'
      + '&nbsp;&nbsp; 6 x 50m freestyle, sprint every 2nd: starttime = CSS+15s per 50m</br>'
      + '&nbsp;&nbsp; 4 x 50m freestyle, sprint every time: starttime = CSS+20s per 50m',
    distance: 1550,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '40 x 50m Spike set:<br>'
      + '&nbsp;&nbsp; 16 x 50m freestyle, sprint every 4th: starttime = CSS+5s per 50m</br>'
      + '&nbsp;&nbsp; 12 x 50m freestyle, sprint every 3th: starttime = CSS+10s per 50m</br>'
      + '&nbsp;&nbsp; 8 x 50m freestyle, sprint every 2nd: starttime = CSS+15s per 50m</br>'
      + '&nbsp;&nbsp; 4 x 50m freestyle, sprint every time: starttime = CSS+20s per 50m',
    distance: 2000,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '10 x 50m Spike set:<br>'
      + '&nbsp;&nbsp; 4 x 50m freestyle, sprint every 4th: starttime = CSS+5s per 50m</br>'
      + '&nbsp;&nbsp; 3 x 50m freestyle, sprint every 3th: starttime = CSS+10s per 50m</br>'
      + '&nbsp;&nbsp; 2 x 50m freestyle, sprint every 2nd: starttime = CSS+15s per 50m</br>'
      + '&nbsp;&nbsp; 1 x 50m freestyle, sprint every time: starttime = CSS+20s per 50m',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '15 x 50m Spike set:<br>'
      + '&nbsp;&nbsp; 6 x 50m freestyle, sprint every 4th: starttime = CSS+5s per 50m</br>'
      + '&nbsp;&nbsp; 4 x 50m freestyle, sprint every 3th: starttime = CSS+10s per 50m</br>'
      + '&nbsp;&nbsp; 3 x 50m freestyle, sprint every 2nd: starttime = CSS+15s per 50m</br>'
      + '&nbsp;&nbsp; 2 x 50m freestyle, sprint every time: starttime = CSS+20s per 50m',
    distance: 750,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '20 x 50m Spike set:<br>'
      + '&nbsp;&nbsp; 8 x 50m freestyle, sprint every 4th: starttime = CSS+5s per 50m</br>'
      + '&nbsp;&nbsp; 6 x 50m freestyle, sprint every 3th: starttime = CSS+10s per 50m</br>'
      + '&nbsp;&nbsp; 4 x 50m freestyle, sprint every 2nd: starttime = CSS+15s per 50m</br>'
      + '&nbsp;&nbsp; 2 x 50m freestyle, sprint every time: starttime = CSS+20s per 50m',
    distance: 1000,
  },

  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 50m + R10s, head-up sighting every 9 strokes</br>'
      + '200m + R20s, with partners practicing inline drafting swapping every 50m</br>'
      + '2 x 100m + R15s practice arrow head drafting at a moderate pace with 2 friends',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '4 x 50m + R10s, head-up sighting every 9 strokes</br>'
      + '2 x 200m + R20s, with partners practicing inline drafting swapping every 50m</br>'
      + '4 x 100m + R15s practice arrow head drafting at a moderate pace with 2 friends',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '4 x 50m + R10s, head-up sighting every 9 strokes</br>'
      + '4 x 200m + R20s, with partners practicing inline drafting swapping every 50m</br>'
      + '4 x 100m + R15s practice arrow head drafting at a moderate pace with 2 friends',
    distance: 1400,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 50m + R10s, head-up sighting every 9 strokes</br>'
      + '200m + R20s, with partners practicing inline drafting swapping every 50m</br>'
      + '2 x 100m + R15s practice arrow head drafting at a moderate pace with 2 friends',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '4 x 50m + R10s, head-up sighting every 9 strokes</br>'
      + '200m + R20s, with partners practicing inline drafting swapping every 50m</br>'
      + '4 x 100m + R15s practice arrow head drafting at a moderate pace with 2 friends',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4 x 50m + R10s, head-up sighting every 9 strokes</br>'
      + '200m + R20s, with partners practicing inline drafting swapping every 50m</br>'
      + '4 x 100m + R15s practic arrow head drafting at a moderate pace with 2 friends',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 x 300m + R30s, if possible drafting steadily with a partner</br>'
      + '&nbsp;&nbsp; 1st with fins, long and smooth</br>'
      + '&nbsp;&nbsp; 2nd with fins, head-up sighting ever 9 strokes',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '3 x 300m + R30s, if possible drafting steadily with a partner</br>'
      + '&nbsp;&nbsp; 1st with fins, long and smooth</br>'
      + '&nbsp;&nbsp; 2nd with fins, head-up sighting ever 9 strokes</br>'
      + '&nbsp;&nbsp; 3th with pull buoy, breathing to your least favorite side',
    distance: 900,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '4 x 300m + R30s, if possible drafting steadily with a partner</br>'
      + '&nbsp;&nbsp; 1st with fins, long and smooth</br>'
      + '&nbsp;&nbsp; 2nd with fins, head-up sighting ever 9 strokes</br>'
      + '&nbsp;&nbsp; 3th with pull buoy, breathing to your least favorite side</br>'
      + '&nbsp;&nbsp; 4th freestyle',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '2 x 200m + R30s, if possible drafting steadily with a partner</br>'
      + '&nbsp;&nbsp; 1st with fins, long and smooth</br>'
      + '&nbsp;&nbsp; 2nd with fins, head-up sighting ever 9 strokes',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '3 x 200m + R30s, if possible drafting steadily with a partner</br>'
      + '&nbsp;&nbsp; 1st with fins, long and smooth</br>'
      + '&nbsp;&nbsp; 2nd with fins, head-up sighting ever 9 strokes</br>'
      + '&nbsp;&nbsp; 3th with pull buoy, breathing to your least favorite side',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '4 x 200m + R30s, if possible drafting steadily with a partner</br>'
      + '&nbsp;&nbsp; 1st with fins, long and smooth</br>'
      + '&nbsp;&nbsp; 2nd with fins, head-up sighting ever 9 strokes</br>'
      + '&nbsp;&nbsp; 3th with pull buoy, breathing to your least favorite side</br>'
      + '&nbsp;&nbsp; 4th freestyle',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '8 x 50m + R10s, start and turn without touching the sides of the pool</br>'
        + '4 x 100m + R15s, drafting but trying to drop your partners (or 50m easy, 50m fast)',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '400m + R30s, drafting inline, swap each 100m, hold a moderate fast pace</br>'
        + '8 x 50m + R10s, start and turn without touching the sides of the pool</br>'
        + '4 x 100m + R15s, drafting but trying to drop your partners (or 50m easy, 50m fast)',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 x 400m + R30s, drafting inline, swap each 100m, hold a moderate fast pace</br>'
        + '8 x 50m + R10s, start and turn without touching the sides of the pool</br>'
        + '4 x 100m + R15s, drafting but trying to drop your partners (or 50m easy, 50m fast)',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 50m + R10s, start and turn without touching the sides of the pool</br>'
        + '(2 to 3) x 100m + R15s, drafting but trying to drop your partners (or 50m easy, 50m fast)',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '400m + R30s, drafting inline, swap each 100m, hold a moderate fast pace</br>'
        + '8 x 50m + R10s, start and turn without touching the sides of the pool',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '400m + R30s, drafting inline, swap each 100m, hold a moderate fast pace</br>'
        + '8 x 50m + R10s, start and turn without touching the sides of the pool',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 x 150m, 4 x 50m, 3 x 100m, 4 x 50m at CSS + R10s, optional with pull buoy & band, focus on openwater start and head-up sighting',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 x 150m, 4 x 75m, 3 x 100m, 6 x 50m at CSS + R10s, optional with pull buoy & band, focus on openwater start and head-up sighting',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '300m at CSS+3s / 100m, 2 x 150m, 4 x 75m, 3 x 100m, 6 x 50m at CSS + R10s, optional with pull buoy & band, focus on openwater start and head-up sighting',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '150m, 4 x 50m, 4 x 50m at CSS + R10s, optional with pull buoy & band, focus on openwater start and head-up sighting',
    distance: 650,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '150m, 4 x 75m, 2 x 100m, 3 x 50m at CSS + R10s, optional with pull buoy & band, focus on openwater start and head-up sighting',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '200m at CSS+2s / 100m, 150m, 2 x 75m, 2 x 100m, 4 x 50m at CSS + R10s, optional with pull buoy & band, focus on openwater start and head-up sighting',
    distance: 900,
  },

  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '12 x 50m + R10s, where:</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate +12 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate -12 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate +8 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate -8 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate +4 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate -4 SPM',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '18 x 50m + R10s, where:</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate +12 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate -12 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate +8 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate -8 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate +4 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate -4 SPM',
    distance: 900,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '24 x 50m + R10s, where:</br>'
        + '&nbsp;&nbsp; 4 x 50m at base stroke rate +12 SPM</br>'
        + '&nbsp;&nbsp; 4 x 50m at base stroke rate -12 SPM</br>'
        + '&nbsp;&nbsp; 4 x 50m at base stroke rate +8 SPM</br>'
        + '&nbsp;&nbsp; 4 x 50m at base stroke rate -8 SPM</br>'
        + '&nbsp;&nbsp; 4 x 50m at base stroke rate +4 SPM</br>'
        + '&nbsp;&nbsp; 4 x 50m at base stroke rate -4 SPM',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '10 x 50m + R10s, where:</br>'
        + '&nbsp;&nbsp; 50m at base stroke rate +12 SPM</br>'
        + '&nbsp;&nbsp; 50m at base stroke rate -12 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate +8 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate -8 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate +4 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate -4 SPM',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '12 x 50m + R10s, where:</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate +12 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate -12 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate +8 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate -8 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate +4 SPM</br>'
        + '&nbsp;&nbsp; 2 x 50m at base stroke rate -4 SPM',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '18 x 50m + R10s, where:</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate +12 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate -12 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate +8 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate -8 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate +4 SPM</br>'
        + '&nbsp;&nbsp; 3 x 50m at base stroke rate -4 SPM',
    distance: 900,
  },

  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4 x 150m, race simulation (with 2 to 4 swimmers), drafting inline, fast effort, climb out of the pool and walk to other end of the pool at the end of each interval, swap positions after each interval',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '8 x 150m, race simulation (with 2 to 4 swimmers), drafting inline, fast effort, climb out of the pool and walk to other end of the pool at the end of each interval, swap positions after each interval',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '10 x 150m, race simulation (with 2 to 4 swimmers), drafting inline, fast effort, climb out of the pool and walk to other end of the pool at the end of each interval, swap positions after each interval',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 100m, race simulation (with 2 to 4 swimmers), drafting inline, fast effort, climb out of the pool and walk to other end of the pool at the end of each interval, swap positions after each interval',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '(6 to 8) x 100m, race simulation (with 2 to 4 swimmers), drafting inline, fast effort, climb out of the pool and walk to other end of the pool at the end of each interval, swap positions after each interval',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '(8 to 10) x 100m, race simulation (with 2 to 4 swimmers), drafting inline, fast effort, climb out of the pool and walk to other end of the pool at the end of each interval, swap positions after each interval',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '6 x 100m + R60s, aim to swim as fast as possible with consitent pace, breathing every 5 stroke!',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '8 x 100m + R60s, aim to swim as fast as possible with consitent pace, breathing every 5 stroke!',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '10 x 100m + R60s, aim to swim as fast as possible with consitent pace, breathing every 5 stroke!',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '(4 to 5) x 100m + R60s, aim to swim as fast as possible with consitent pace, breathing every 5 stroke!',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '(6 to 8) x 100m + R60s, aim to swim as fast as possible with consitent pace, breathing every 5 stroke!',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '(8 to 10) x 100m + R60s, aim to swim as fast as possible with consitent pace, breathing every 5 stroke!',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '6 x 50m + R20s, 25m fast + 25m easy</br>'
       + '12 x 25m + R10s, odd nuber fast & even numbers easy',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '8 x 50m + R20s, 25m fast + 25m easy</br>'
       + '16 x 25m + R10s, odd nuber fast & even numbers easy',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '8 x 50m + R20s, 25m fast + 25m easy</br>'
       + '16 x 25m + R10s, odd nuber fast & even numbers easy',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '5 x 50m + R20s, 25m fast + 25m easy</br>'
       + '12 x 25m + R10s, odd nuber fast & even numbers easy',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '8 x 50m + R20s, 25m fast + 25m easy</br>'
       + '16 x 25m + R10s, odd nuber fast & even numbers easy',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '8 x 50m + R20s, 25m fast + 25m easy</br>'
       + '16 x 25m + R10s, odd nuber fast & even numbers easy',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '25m-<b>50m</b>-75m-<b>100m</b>-100m-<b>75m</b>-50m-<b>25m</b> + R15s between intervals, fast tempo at bold intervals',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 sets of 25m-<b>50m</b>-75m-<b>100m</b>-100m-<b>75m</b>-50m-<b>25m</b> + R15s between intervals, fast tempo at bold intervals',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '3 sets of 25m-<b>50m</b>-75m-<b>100m</b>-100m-<b>75m</b>-50m-<b>25m</b> + R15s between intervals, fast tempo at bold intervals',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '25m-<b>50m</b>-75m-<b>100m</b>-100m-<b>75m</b>-50m-<b>25m</b> + R15s between intervals, fast tempo at bold intervals',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '25m-<b>50m</b>-75m-<b>100m</b>-100m-<b>75m</b>-50m-<b>25m</b>-25m-<b>50m</b>-75m-<b>100m</b> + R15s between intervals, fast tempo at bold intervals',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '25m-<b>50m</b>-75m-<b>100m</b>-100m-<b>75m</b>-50m-<b>25m</b>-25m-<b>50m</b>-75m-<b>100m</b> + R15s between intervals, fast tempo at bold intervals',
    distance: 1000,
  },

  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '10 x 50m + R15s, start with 2 x 50m at base SPM, after each 2 x 50m add extra + 3SPM',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '24 x 50m + R15s, start with 4 x 50m at base SPM, after each 4 x 50m add extra + 3SPM',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '30 x 50m + R15s, start with 4 x 50m at base SPM, after each 4 x 50m add extra + 3SPM',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '10 x 50m + R15s, start with 2 x 50m at base SPM, after each 2 x 50m add extra + 3SPM',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '15 x 50m + R15s, start with 4 x 50m at base SPM, after each 4 x 50m add extra + 3SPM',
    distance: 750,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '15 x 50m + R15s, start with 4 x 50m at base SPM, after each 4 x 50m add extra + 3SPM',
    distance: 750,
  },

  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 sets of:</br>'
        + '&nbsp;&nbsp; 2 x 100m + R45s, best pace possible</br>'
        + '&nbsp;&nbsp; 25m + R45s, 25m + R40s, 25m + R35s, 25m + R90s, all at maximum pace!</br>',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 sets of:</br>'
        + '&nbsp;&nbsp; 3 x 100m + R45s, best pace possible</br>'
        + '&nbsp;&nbsp; 50m + R55s, 50m + R50s, 50m + R45s, 50m + R100s, all at maximum pace!</br>',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 sets of:</br>'
        + '&nbsp;&nbsp; 3 x 200m + R45s, best pace possible</br>'
        + '&nbsp;&nbsp; 50m + R55s, 50m + R50s, 50m + R45s, 50m + R100s, all at maximum pace!</br>',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '2 sets of:</br>'
        + '&nbsp;&nbsp; 100m + R45s, best pace possible</br>'
        + '&nbsp;&nbsp; 25m + R45s, 25m + R40s, 25m + R35s, 25m + R90s, all at maximum pace!</br>',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '2 sets of:</br>'
        + '&nbsp;&nbsp; 100m + R45s, best pace possible</br>'
        + '&nbsp;&nbsp; 50m + R55s, 50m + R50s, 50m + R45s, 50m + R100s, all at maximum pace!</br>',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '2 sets of:</br>'
        + '&nbsp;&nbsp; 2 x 100m + R45s, best pace possible</br>'
        + '&nbsp;&nbsp; 50m + R55s, 50m + R50s, 50m + R45s, 50m + R100s, all at maximum pace!',
    distance: 800,
  },

  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '10 x 50m freestyle, start time CSS/2 + 5s</br>'
      + '5 x 100m freestyle, start time CSS + 10s</br>'
      + '2 x 200m freestyle, start time 2xCSS + 20s</br>'
      + '500m freestyle, start time 5xCSS + 50s</br>',
    distance: 1900,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '16 x 50m freestyle, start time CSS/2 + 5s</br>'
      + '8 x 100m freestyle, start time CSS + 10s</br>'
      + '4 x 200m freestyle, start time 2xCSS + 20s</br>'
      + '500m freestyle, start time 5xCSS + 50s</br>',
    distance: 2800,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '20 x 50m freestyle, start time CSS/2 + 5s</br>'
      + '10 x 100m freestyle, start time CSS + 10s</br>'
      + '5 x 200m freestyle, start time 2xCSS + 20s</br>'
      + '500m freestyle, start time 5xCSS + 50s</br>',
    distance: 3500,
  },

  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '3 x 500m + R60s, where:</br>'
      + '&nbsp;&nbsp; 1st steady freestyle at CSS + 6s</br>'
      + '&nbsp;&nbsp; 2nd with fins, very steady swim. Keep your strokes long and smooth</br>'
      + '&nbsp;&nbsp; 3th steady freestyle at CSS + 4s',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '4 x 500m + R60s, where:</br>'
      + '&nbsp;&nbsp; 1st steady freestyle at CSS + 6s</br>'
      + '&nbsp;&nbsp; 2nd with fins, very steady swim. Keep your strokes long and smooth</br>'
      + '&nbsp;&nbsp; 3th steady freestyle at CSS + 4s</br>'
      + '&nbsp;&nbsp; 4th with pull buoy, breathing 3/2/3/2...',
    distance: 2000,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '5 x 500m + R60s, where:</br>'
      + '&nbsp;&nbsp; 1st steady freestyle at CSS + 6s</br>'
      + '&nbsp;&nbsp; 2nd with fins, very steady swim. Keep your strokes long and smooth</br>'
      + '&nbsp;&nbsp; 3th steady freestyle at CSS + 4s</br>'
      + '&nbsp;&nbsp; 4th with pull buoy, breathing 3/2/3/2...</br>'
      + '&nbsp;&nbsp; 5th steady freestyle at CSS + 2s</br>',
    distance: 2500,
  },

  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: 'BEAT THE BEEP, go faster to have more rest</br>'
      + '4 x 50m freestyle at CSS+5s + R30s</br>'
      + '2 x 200m freestyle start time 2 x CSS + 20s</br>'
      + '4 x 100m freestyle at CSS+5s + R30s</br>'
      + '2 x 200m freestyle start time 2 x CSS + 20s</br>'
      + '4 x 50m freestyle at CSS+5s + R30s',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: 'BEAT THE BEEP, go faster to have more rest</br>'
      + '6 x 50m freestyle at CSS+5s + R30s</br>'
      + '3 x 200m freestyle start time 2 x CSS + 20s</br>'
      + '5 x 100m freestyle at CSS+5s + R30s</br>'
      + '3 x 200m freestyle start time 2 x CSS + 20s</br>'
      + '6 x 50m freestyle at CSS+5s + R30s',
    distance: 2300,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: 'BEAT THE BEEP, go faster to have more rest</br>'
      + '6 x 50m freestyle at CSS+5s + R30s</br>'
      + '3 x 300m freestyle start time 3 x CSS + 30s</br>'
      + '5 x 100m freestyle at CSS+5s + R30s</br>'
      + '3 x 300m freestyle start time 2 x CSS + 30s</br>'
      + '6 x 50m freestyle at CSS+5s + R30s',
    distance: 2900,
  },

  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 x (25m, 50m, 100m, 200m, 300m) freestyle + R30s</br>'
      + '&nbsp;&nbsp; 1st set at CSS + 6s per 100m</br>'
      + '&nbsp;&nbsp; 2nd set at CSS + 3s per 100m',
    distance: 1650,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2 x (50m, 100m, 200m, 300m, 200m D, 100m D, 50m D) freestyle + R30s</br>'
      +' &nbsp;&nbsp; at CSS + 6s per 100m, D (decending) at CSS + 3s per 100m',
    distance: 2000,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    training_text: '2 x (100m, 200m, 300m, 400m, 300m D, 200m D, 100m D) freestyle + R30s</br>'
      +'&nbsp;&nbsp; at CSS + 6s per 100m, D (decending) at CSS + 3s per 100m',
    swim_time: '60',
    distance: 3200,
  },

  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    training_text: '2 x (4 min, 8 min, 16 min) freestyle + R60s, easy steady pace',
    swim_time: '60',
    distance: 1500,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    training_text: '2 x (4 min, 8 min, 16 min) freestyle + R60s, easy steady pace',
    swim_time: '60',
    distance: 2000,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    training_text: '2 x (4 min, 8 min, 16 min) freestyle + R60s, easy steady pace',
    swim_time: '60',
    distance: 3000,
  },

  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    training_text: 'Two sets (optional set two with pull buoy and paddles):</br>'
      + '4 x 100m freestyle at CSS+10s + R20s</br>'
      + '300m freestyle BEAT THE BEEPER! Starttime CSS+10s per 100m',
    swim_time: '60',
    distance: 1400,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    training_text: 'Two sets:</br>'
      + '200m freeestyle at CSS+10s per 100m + R20s</br>'
      + '300m freeestyle BEAT THE BEEPER! Starttime CSS+10s per 100m (optional with pull buoy and paddles)</br>'
      + '400m freeestyle BEAT THE BEEPER! Starttime CSS+10s per 100m</br>'
      + '500m freeestyle BEAT THE BEEPER! Starttime CSS+10s per 100m (optional with pull buoy and paddles)</br>',
    swim_time: '60',
    distance: 2800,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    training_text: 'Two sets:</br>'
      + '3 x 100m freestyle at CSS+10s per 100m + R20s</br>'
      + '300m freestyle BEAT THE BEEPER! Starttime CSS+10s per 100m (optional with pull buoy and paddles)</br>'
      + '400m freestyle BEAT THE BEEPER! Starttime CSS+10s per 100m</br>'
      + '500m freestyle BEAT THE BEEPER! Starttime CSS+10s per 100m (optional with pull buoy and paddles)</br>',
    swim_time: '60',
    distance: 3000,
  },

  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    training_text: '4 x 200m freestyle + R30s:</br>'
      + '&nbsp;&nbsp; 1 & 4 easy</br>'
      + '&nbsp;&nbsp; 2 &uarr; easy &uarr; moderate pace</br>'
      + '&nbsp;&nbsp; 3 at CSS+2s per 100m</br>'
      + '4 x 200m + R20s:</br>'
      + '&nbsp;&nbsp; 1 &uarr; drill 6-1-6  &darr; freestyle</br>'
      + '&nbsp;&nbsp; 2 & 4 freestyle easy</br>'
      + '&nbsp;&nbsp; 3 &uarr; drill broken arrow &darr; freestyle</br>'
      + '4 x 100m + R15s:</br>'
      + '&nbsp;&nbsp; 35m drill doggy paddle 65m freestyle R15s</br>'
      + '4 x 100m freestyle + R30s:</br>'
      + '&nbsp;&nbsp; 1 & 4 easy</br>'
      + '&nbsp;&nbsp; 2 &uarr; easy &darr; moderate pace</br>'
      + '&nbsp;&nbsp; 3 at CSS',
    swim_time: '60',
    distance: 2000,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    training_text: '4 x 300m freestyle + R30s:</br>'
      + '&nbsp;&nbsp; 1 & 4 easy</br>'
      + '&nbsp;&nbsp; 2 &uarr; easy &uarr; moderate pace</br>'
      + '&nbsp;&nbsp; 3 at CSS+3s per 100m</br>'
      + '4 x 200m + R20s:</br>'
      + '&nbsp;&nbsp; 1 &uarr; drill 6-1-6  &darr; freestyle</br>'
      + '&nbsp;&nbsp; 2 & 4 freestyle easy</br>'
      + '&nbsp;&nbsp; 3 &uarr; drill broken arrow &darr; freestyle</br>'
      + '4 x 100m + R15s:</br>'
      + '&nbsp;&nbsp; 35m drill doggy paddle 65m freestyle R15s</br>'
      + '4 x 200m freestyle + R30s:</br>'
      + '&nbsp;&nbsp; 1 & 4 easy</br>'
      + '&nbsp;&nbsp; 2 &uarr; easy &darr; moderate pace</br>'
      + '&nbsp;&nbsp; 3 at CSS+2s per 100m',
    swim_time: '60',
    distance: 2800,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'advanced',
    training_text: '4 x 400m freestyle + R30s:</br>'
      + '&nbsp;&nbsp; 1 & 4 easy</br>'
      + '&nbsp;&nbsp; 2 &uarr; easy &uarr; moderate pace</br>'
      + '&nbsp;&nbsp; 3 at CSS+4s per 100m</br>'
      + '4 x 200m + R20s:</br>'
      + '&nbsp;&nbsp; 1 &uarr; drill 6-1-6  &darr; freestyle</br>'
      + '&nbsp;&nbsp; 2 & 4 freestyle easy</br>'
      + '&nbsp;&nbsp; 3 &uarr; drill broken arrow &darr; freestyle</br>'
      + '4 x 100m + R15s:</br>'
      + '&nbsp;&nbsp; 35m drill doggy paddle 65m freestyle R15s</br>'
      + '4 x 200m freestyle + R30s:</br>'
      + '&nbsp;&nbsp; 1 & 4 easy</br>'
      + '&nbsp;&nbsp; 2 &uarr; easy &darr; moderate pace</br>'
      + '&nbsp;&nbsp; 3 at CSS+2s per 100m</br>',
    swim_time: '60',
    distance: 3600,
  },

  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '100m freestyle easy + R30s</br>'
      + '200m freestyle with pull buoy and paddles + R30s</br>'
      + '300m freestyle with fins + R30s</br>'
      + '100m, as 50m drill 3-3-3, 50m freestyle + R30s</br>'
      + '400m, as 2 x (50m breathing left side, 50m breathing right side, 100m breathing every 5 stoke) + R30s</br>'
      + '400m freestyle with pull buoy, as 4 x (10m drill scull, 15m drill doggy paddle, 75m easy) + R30s</br>'
      + '4 x 150m, as 100m with pull buoy and paddles, 50m tempo, 200m easy + R30s',
    distance: 2000,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '100m freestyle easy + R30s</br>'
      + '200m freestyle with pull buoy and paddles + R30s</br>'
      + '300m freestyle with fins + R30s</br>'
      + '100m, as 50m drill 3-3-3, 50m freestyle + R30s</br>'
      + '400m, as 2 x (50m breathing left side, 50m breathing right side, 100m breathing every 5 stoke) + R30s</br>'
      + '400m freestyle with pull buoy, as 4 x (10m drill scull, 15m drill doggy paddle, 75m easy) + R30s</br>'
      + '5 x 250m freestyle, as 200m with pull buoy, 50m sprint + R30s</br>'
      + '200m easy',
    distance: 2950,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '100m freestyle easy + R30s</br>'
      + '200m freestyle with pull buoy and paddles + R30s</br>'
      + '300m freestyle with fins + R30s</br>'
      + '100m, as 50m drill 3-3-3, 50m freestyle + R30s</br>'
      + '400m, as 2 x (50m breathing left side, 50m breathing right side, 100m breathing every 5 stoke) + R30s</br>'
      + '400m freestyle with pull buoy, as 4 x (10m drill scull, 15m drill doggy paddle, 75m easy) + R30s</br>'
      + '6 x 250m freestyle, as 200m with pull buoy, 50m sprint + R30s</br>'
      + '200m easy',
    distance: 3200,
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

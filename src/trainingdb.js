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
    training_text: '200m with fins, &uarr; broken arrow &darr; f/s steady + R15s<br>'
                + '100m easy f/s - nice and smooth',
    distance: 300,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '300m with pull buoy - focus on good roll + R20s<br>'
      + '200m with fins, &uarr; broken arrow &darr; f/s steady + R15s<br>'
      + '100m easy f/s - nice and smooth',
    distance: 600,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '400m easy f/s, focus on smooth exhalation and bilateral breathing + R30s<br>'
      + '300m with pull buoy - focus on good roll + R20s<br>'
      + '200m with fins &uarr; broken arrow &darr; f/s steady + R15s<br>'
      + '100m easy f/s - nice and smooth',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '200m with fins, long, smooth strokes, breathing easily + R20s<br>'
      + '2 x 100m fins &uarr; 6/1/6 &darr; f/s + R15s',
    distance: 400,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '2x set: 200m with fins, long, smooth strokes, breathing easily + R20s<br>'
      +'&nbsp;&nbsp; 2 x 100m fins &uarr; 6/1/6 &darr; f/s + R15s',
    distance: 800,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2x set: 200m with fins, long, smooth strokes, breathing easily + R20s<br>'
      + '&nbsp;&nbsp; 2 x 100m with fins &uarr; 6/1/6 &darr; f/s + R15s<br>'
      + '&nbsp;&nbsp; 2 x 50m easy f/s - nice and relaxed + R10s',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '100m easy f/s + R10s<br>'
      + '2 x 50m with pull buoy - focus on catch + R10s<br>'
      + '4 x 25m f/s as odd numbers fast and even numbers easy + R5s',
    distance: 300,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: 'set 1: 100m easy f/s + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m with pull buoy - focus on catch + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m f/s as odd# fast and even# easy + R5s<br>'
      + 'set 2: f/s fins breathing each 5 strokes + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m torpedo kick, alternating front and back + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m, where breath each 1) 3 strokes 2) 5 strokes 3) 7 strokes 4) 3 strokes + R5',
    distance: 600,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: 'set 1: 100m easy f/s + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m with pull buoy - focus on catch + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m f/s as odd# fast and even# easy + R5s<br>'
      + 'set 2: f/s fins breathing each 5 strokes + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m torpedo kick, alternating front and back + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m, where breath each 1) 3 strokes 2) 5 strokes 3) 7 strokes 4) 3 strokes + R5<br>'
      + 'set 3: 100m f/s, nice and smooth + R10s<br>'
      + '&nbsp;&nbsp; 2 x 50m with fins, as 25m shoulder tap, 25m f/s + R10s<br>'
      + '&nbsp;&nbsp; 4 x 25m f/s swim progressively faster + R5',
    distance: 900,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '2 x 200m + R20s<br>'
      + '&nbsp;&nbsp; 1e set: f/s breathing 25m left + 25m right + 50m normal<br>'
      + '&nbsp;&nbsp; 2e set: f/s with fins &uarr; 6/1/6 &darr; f/s',
    distance: 400,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '3 x 200m + R20s<br>'
      + '&nbsp;&nbsp; 1e set: f/s breathing 25m left + 25m right + 50m normal<br>'
      + '&nbsp;&nbsp; 2e set: fins &uarr; 6/1/6 &darr f/s<br>'
      + '&nbsp;&nbsp; 3e set: f/s breathing 25m left + 25m right + 50m normal',
    distance: 600,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '5 x 200m + R20s<br>'
      + '&nbsp;&nbsp; 1e set: f/s breathing 25m left + 25m right + 50m normal<br>'
      + '&nbsp;&nbsp; 2e set: fins &uarr; 6/1/6 &darr; f/s'
      + '&nbsp;&nbsp; 3e set: f/s breathing 25m left + 25m right + 50m normal<br>'
      + '&nbsp;&nbsp; 4e set: with pull buoy as 15m scull#1 + 85m f/s<br>'
      + '&nbsp;&nbsp; 5e set: f/s easy - nice and relaxed',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '300m f/s, focus on exhalation and a fluid stroke. Try to hold a reasonable consistend pace',
    distance: 300,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '500m f/s, focus on exhalation and a fluid stroke. Try to hold a reasonable consistend pace',
    distance: 500,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '2 x 500m f/s + R30s<br>'
      + '&nbsp;&nbsp; 1e set: focus on exhalation and a fluid stroke. Try to hold a reasonable consistend pace<br>'
      + '&nbsp;&nbsp; 2e set: 200m with pull buoy and band, 100m only band, 200m with pull bouy and band',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '200m f/s easy - breathing bilateral + R15s<br>'
      +'200m with pull buoy, alternate breathing side each 25m + R15s',
    distance: 400,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '200m f/s easy - breathing bilateral + R15s<br>'
      + '200m with pull buoy, alternate breathing side each 25m + R15s<br>'
      + '200m with fins, as 25m left Unco, 25m f/s, 25m right Unco, 25m f/s + R15s',
    distance: 600,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '200m f/s easy - breathing bilateral + R15s<br>'
      + '200m with pull buoy, alternate breathing side per 25m + R15s<br>'
      + '200m with fins, as  25m left Unco, 25m f/s, 25m right Unco, 25m f/s<br>'
      + '200m with pull buoy, alternate breathing sides each 25m<br>'
      + '200m f/s easy - breathing bilateral',
    distance: 1000,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 50m f/s easy',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '200m f/s easy',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '200m f/s easy',
    distance: 200,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 50m, as 25m breast easy, 25m f/s easy',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '100m f/s, 100m backstroke',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '100m f/s, 100m backstroke',
    distance: 200,
  },

  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4 x 50m f/s easy, sing down before every 50m',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '200m f/s easy, sing down before every 50m',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '200m f/s easy, sing down before every 50m',
    distance: 200,
  },

  /* All build training schedules */
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4x50m freestyle + R15s - 25m fast holding good form + 25m easy.',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '6x50m freestyle + R15s - 25m fast holding good form + 25m easy.',
    distance: 300,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '8x50m freestyle + R15s - 25m fast holding good form + 25m easy.',
    distance: 400,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4x25m freestyle fast + R15s.',
    distance: 100,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '6x25m freestyle fast + R15s.',
    distance: 150,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '8x25m freestyle fast + R15s.',
    distance: 200,
  },

  /* All main training schedules */
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '60',
    training_text: '4x200m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 100m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 100m fins: 50m 6/1/6 50m f/s',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '6x200m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 100m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 100m fins: 50m 6/1/6 50m f/s',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '8x200m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 100m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 100m fins: 50m 6/1/6 50m f/s',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '4x100m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 50m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 50m fins: 50m 6/1/6 50m f/s',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '6x100m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 50m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 50m fins: 50m 6/1/6 50m f/s',
    distance: 600,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '8x100m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 50m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 50m fins: 50m 6/1/6 50m f/s',
    distance: 800,
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
    training_text: '15x50m freestyle + R30s: 25m fast + 25m easy',
    distance: 750,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '60',
    training_text: '20x50m freestyle + R30s: 25m fast + 25m easy',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '60',
    training_text: '25x50m freestyle + R30s: 25m fast + 25m easy',
    distance: 1250,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    swim_time: '30',
    training_text: '8x50m freestyle + R30s: 25m fast + 25m easy',
    distance: 400,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    swim_time: '30',
    training_text: '10x50m freestyle + R30s: 25m fast + 25m easy',
    distance: 500,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    swim_time: '30',
    training_text: '12x50m freestyle + R30s: 25m fast + 25m easy',
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

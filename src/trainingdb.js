const trainingdb = TAFFY([ // eslint-disable-line no-unused-vars,no-undef
  /* All warming-up training schedules. */
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    training_text: '200m freestyle',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    training_text: '400m freestyle',
    distance: 400,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    training_text: '2 x 400m freestyle',
    distance: 800,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'novice',
    training_text: '50m breaststroke, 50m freestyle, 50m backstroke, 50m freestyle',
    distance: 200,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'intermediate',
    training_text: '100m breaststroke, 100m freestyle, 100m backstroke, 100m freestyle',
    distance: 400,
  },
  {
    training_part: 'warming_up',
    training_type: null,
    swim_speed: 'advanced',
    training_text: '2 x (100m breaststroke, 100m freestyle, 100m backstroke, 100m freestyle)',
    distance: 800,
  },

  /* All build training schedules */
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'novice',
    training_text: '4x50m freestyle + R15s - 25m fast holding good form + 25m easy.',
    distance: 200,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'intermediate',
    training_text: '6x50m freestyle + R15s - 25m fast holding good form + 25m easy.',
    distance: 300,
  },
  {
    training_part: 'build',
    training_type: null,
    swim_speed: 'advanced',
    training_text: '8x50m freestyle + R15s - 25m fast holding good form + 25m easy.',
    distance: 400,
  },

  /* All main training schedules */
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'novice',
    training_text: '4x200m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 100m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 100m fins: 50m 6/1/6 50m f/s',
    distance: 800,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'intermediate',
    training_text: '6x200m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 100m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 100m fins: 50m 6/1/6 50m f/s',
    distance: 1200,
  },
  {
    training_part: 'main',
    training_type: 'technique',
    swim_speed: 'advanced',
    training_text: '8x200m freestyle with fins + R15s where:</br>'
            + '&nbsp;&nbsp; 100m fins: 25m left kick 25m right kick 50m f/s</br>'
            + '&nbsp;&nbsp; 100m fins: 50m 6/1/6 50m f/s',
    distance: 1600,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'novice',
    training_text: '100-200-300-300-200-100 freestyle at CSS + R30s',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'intermediate',
    training_text: '100-200-300-400-300-200-100 freestyle at CSS + R30s',
    distance: 1400,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    training_text: '100-200-300-400-400-300-200-100 freestyle at CSS + R30s',
    distance: 1800,
  },
  {
    training_part: 'main',
    training_type: 'threshold',
    swim_speed: 'advanced',
    training_text: '100-200-300-400-400-300-200-100 freestyle at CSS + R30s',
    distance: 1800,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'novice',
    training_text: '15x50m freestyle + R30s: 25m fast + 25m easy',
    distance: 750,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'intermediate',
    training_text: '20x50m freestyle + R30s: 25m fast + 25m easy',
    distance: 1000,
  },
  {
    training_part: 'main',
    training_type: 'sprint',
    swim_speed: 'advanced',
    training_text: '25x50m freestyle + R30s: 25m fast + 25m easy',
    distance: 1250,
  },
  {
    training_part: 'main',
    training_type: 'openwater',
    swim_speed: 'novice',
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
    training_text: '2x4x300m freestyle + R30s if possible drafting steadily with a partner where:<br>'
            + '&nbsp;&nbsp; 1e with fins, long and smooth<br>'
            + '&nbsp;&nbsp; 2e with fins and head-up sighting ever 9 strokes<br>'
            + '&nbsp;&nbsp; 3e with pull buoy, breathing to least favorite side<br>'
            + '&nbsp;&nbsp; 4e normale freestyle',
    distance: 2400,
  },
  {
    training_part: 'main',
    training_type: 'endurance',
    swim_speed: 'novice',
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
    training_text: 'Freestyle, all at CSS+5s + R20s</br>'
            + '&nbsp;&nbsp; 20x50m</br>'
            + '&nbsp;&nbsp; 10x100m</br>'
            + '&nbsp;&nbsp; 5x200m</br>'
            + '&nbsp;&nbsp; 2x500m</br>',
    distance: 4000,
  },

  /* All cooling down schedules */
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'novice',
    training_text: '200m freestyle',
    distance: 200,
  },
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'intermediate',
    training_text: '300m freestyle',
    distance: 300,
  },
  {
    training_part: 'cooling_down',
    training_type: null,
    swim_speed: 'advanced',
    training_text: '400m freestyle',
    distance: 400,
  },
]);

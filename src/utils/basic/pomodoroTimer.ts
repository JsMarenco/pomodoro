interface TimerSettings {
  defaultDuration: number;
  durationRange: {
    min: number;
    max: number;
  };
}

const focusTimer: TimerSettings = {
  defaultDuration: 25,
  durationRange: {
    min: 5,
    max: 60,
  },
}

const shortBreakTimer: TimerSettings = {
  defaultDuration: 5,
  durationRange: {
    min: 2,
    max: 15,
  },
}

const longBreakTimer: TimerSettings = {
  defaultDuration: 30,
  durationRange: {
    min: 15,
    max: 40,
  },
}

const intervalTimer: TimerSettings = {
  defaultDuration: 4,
  durationRange: {
    min: 2,
    max: 8,
  },
}

export const pomodoroTimer = {
  focusTimer,
  shortBreakTimer,
  longBreakTimer,
  intervalTimer,
}

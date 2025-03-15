export const DATE_CONSTANTS = {
  TIME_IN_MILLISECONDS: {
    SECOND: 1000,
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000,
    WEEK: 7 * 24 * 60 * 60 * 1000,
    MONTH: 30 * 24 * 60 * 60 * 1000,
  },
  TIME_IN_SECONDS: {
    SECOND: 1,
    MINUTE: 60,
    HOUR: 60 * 60,
    HALF_DAY: 60 * 60 * 12,
    DAY: 24 * 60 * 60,
    WEEK: 7 * 24 * 60 * 60,
  },
  TIME_IN_MINUTES: {
    HOUR: 60,
    DAY: 24 * 60,
    WEEK: 7 * 24 * 60,
    MONTH: 60 * 24 * 30,
  },
  TIME_IN_HOURS: {
    DAY: 24,
    WEEK: 24 * 7,
    MONTH: 24 * 30,
    YEAR: 24 * 365,
  },
  TIME_IN_DAYS: {
    DAY: 1,
    WEEK: 7,
    MONTH: 30,
    YEAR: 365,
  },
}

export const secondsToMinutes = (seconds: number) => seconds / 60
export const secondsToHours = (seconds: number) => secondsToMinutes(seconds) / 60

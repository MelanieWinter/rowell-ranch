import { format, utcToZonedTime } from 'date-fns-tz';

const TIMEZONE_FORMATTER = (date, timeZone, dateFormat) => {
    const zonedDate = utcToZonedTime(new Date(date), timeZone);
    return format(zonedDate, dateFormat, { timeZone });
};

export default function formatInTimeZone(date, timeZone, dateFormat) {
    return TIMEZONE_FORMATTER(date, timeZone, dateFormat);
}

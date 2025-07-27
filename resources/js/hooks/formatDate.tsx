import {
    format,
    formatDistanceToNowStrict,
    isBefore,
    isThisYear,
    parseISO,
    subDays,
} from "date-fns";
import { enUS } from "date-fns/locale";

export function formatDate(dateString: string): string {
    const targetDate = parseISO(dateString);

    if (Number.isNaN(targetDate.getTime())) {
        console.error(
            "Failed to parse date string with date-fns. Input:",
            dateString,
        );
        return "Invalid Date";
    }

    const now = new Date();
    const sevenDaysAgo = subDays(now, 7);

    if (isBefore(targetDate, now) && targetDate >= sevenDaysAgo) {
        return formatDistanceToNowStrict(targetDate, { addSuffix: true, locale: enUS });
    }

    if (isThisYear(targetDate)) {
        return format(targetDate, "MMM d");
    }

    return format(targetDate, "MMM d, yyyy");
}

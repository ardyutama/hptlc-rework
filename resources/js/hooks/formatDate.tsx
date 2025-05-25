import {
	format,
	formatDistanceToNow,
	isPast,
	isToday,
	isYesterday,
	parseISO,
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

	if (isToday(targetDate)) {
		return format(targetDate, "HH:mm");
	}

	if (isYesterday(targetDate)) {
		return "Yesterday";
	}

	if (isPast(targetDate) && !isToday(targetDate) && !isYesterday(targetDate)) {
		return formatDistanceToNow(targetDate, { addSuffix: true, locale: enUS });
	}

	return format(targetDate, "yyyy-MM-dd");
}

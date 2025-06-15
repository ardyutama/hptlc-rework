import {
	format,
	formatDistanceToNow,
	isPast,
	isThisYear, // New import: Check if it's within the current year
	isToday,
	isTomorrow, // New import: Check if it's tomorrow
	isYesterday,
	parseISO,
} from "date-fns";
import { enUS } from "date-fns/locale"; // Or your preferred locale

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

	if (isTomorrow(targetDate)) {
		return "Tomorrow";
	}
	if (targetDate > now && !isTomorrow(targetDate)) {
		return format(targetDate, "MMM d, yyyy");
	}

	if (isToday(targetDate)) {
		return format(targetDate, "HH:mm");
	}

	if (isYesterday(targetDate)) {
		return "Yesterday"; //
	}

	const sevenDaysAgo = new Date();
	sevenDaysAgo.setDate(now.getDate() - 7);
	if (targetDate >= sevenDaysAgo) {
		return formatDistanceToNow(targetDate, { addSuffix: true, locale: enUS });
	}

	if (isThisYear(targetDate)) {
		return format(targetDate, "MMM d");
	}

	return format(targetDate, "MMM d, yyyy");
}

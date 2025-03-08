import { DateTime } from "luxon";

export function formatDate(dateString: string) {
    const date = DateTime.fromFormat(dateString, "yyyy-MM-dd HH:mm:ss", { zone: "utc" });
    const now = DateTime.now().setZone("utc");

    if (date >= now.minus({ days: 1 }) && date < now) {
        return date.toRelative();
    } else {
        return date.toFormat("yyyy-MM-dd");
    }
}

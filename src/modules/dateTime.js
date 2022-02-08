import { interval } from "date-fns";
import { format, parse } from "date-fns";

function dateFormatter(day) {
	let reFormatDateArray = day.split("-");
	let storageYear = reFormatDateArray[0];
	let storageMonth = reFormatDateArray[1].replace(/^0+/, "") - 1; //month is zero indexed;
	let storageDay = reFormatDateArray[2].replace(/^0+/, "");
	day = format(new Date(storageYear, storageMonth, storageDay), "M/d/yyyy");
	return day;
}

function timeFormatter(time) {
	return format(parse(time, "HH:mm", new Date()), "h:mm a");
}

export { dateFormatter, timeFormatter };

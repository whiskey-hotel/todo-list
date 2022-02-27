import { format, parse, isAfter, parseISO, isDate } from "date-fns";

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

function timeCheck(date, time) {
	let taskTime;
	taskTime = time ? date + "T" + time : date;
	let currentTime = format(new Date(), "yyyy-MM-dd'T'HH:mm");
	return isAfter(parseISO(currentTime), parseISO(taskTime));
}

export { dateFormatter, timeFormatter, timeCheck };

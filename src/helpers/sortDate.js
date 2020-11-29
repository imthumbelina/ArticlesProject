const monthToNumber = (month) => {
    switch (month) {
      case "januar":
        return "Jan"
      case "februar":
        return "Feb"
      case "mai":
        return "May"
      case "september":
        return "Sep"
      case "oktober":
        return "Oct"
      case "november":
        return "Nov"
      case "desember":
        return "Dec"
    }
  }
  
  const toUnixTimestamp = (date) => {
    const splitted = date.split(" ")
    const day = splitted[0].slice(0, -1);
    const month = monthToNumber(splitted[1]);
    const year = splitted[2];
    const dateStr = `${day} ${month} ${year}`;
  
    return Date.parse(dateStr) / 1000;
  }
  
  export const sort = (list) => {
    list.sort(
      (a, b) => {
        const aDate = toUnixTimestamp(a.date);
        const bDate = toUnixTimestamp(b.date);
        return aDate - bDate
      }
    );
    return [...list];
  }
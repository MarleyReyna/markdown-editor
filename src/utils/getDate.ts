export const getDate = (c: string) => {
    let date = c.split("-");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return date[1] + " " + months[parseInt(date[0]) - 1] + " " + date[2];
};
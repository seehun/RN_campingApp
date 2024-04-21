export const convertDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const formattedDate = `${year}년 ${month}월 ${day}일 ${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  return formattedDate;
};

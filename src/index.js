// JS Challenge 1
console.log(new Date().toLocaleDateString());

// JS Challenge 2
console.log(new Date().getTime());

// JS Challenge 3
console.log(new Date().toLocaleString("en-US", { weekday: "long" }));

// JS Challenge 4
console.log(new Date().getFullYear());

// JS Challenge 5
console.log(new Date().toLocaleString("en-US", { month: "long" }));

// JS Challenge 6
const currentDate = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
};
console.log("Today is " + currentDate.toLocaleDateString("en-US", options));

// JS Challenge 7
function formatDate(date) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  return date.toLocaleDateString("en-US", options);
}
console.log(formatDate(new Date()));

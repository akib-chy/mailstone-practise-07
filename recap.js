// TAST 01
// SHOW OUTPUT AFTER 3.5 SECONDS

// setInterval(() => {
//   console.log("hello");
// }, 3500);

// TAST 02
// TAKE A NUMBET USING PROMP , ADD 200 THEN ALERT THE RESULT
const confirm = () => {
  const promt = prompt("plece Type Your Budget");
  if (!isNaN(promt)) {
    const total = parseFloat(promt) + 200;
    return alert(total);
  } else {
    return alert("Plese Type A number");
  }
};

function greeter(person: string, callback?: () => void) {
  // if (callback) callback();
  return "Hello, " + person;
}
// let user = "Jane Smith";
let users = ["Jane Smith", "John Doe"];

document.body.textContent = greeter(users[1], () => {
  console.log(users[1]);
});

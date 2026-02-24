function generateRandomName() {
  const names = ["Jude", "Jelly", "Lina", "Ariana", "David", "Michael"];
  return names[Math.floor(Math.random() * names.length)];
}

function generateRandomEmail() {
  return `user${Date.now()}@test.com`;
}

module.exports = {
  generateRandomName,
  generateRandomEmail
};
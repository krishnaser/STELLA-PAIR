function makeid(num = 2) {
  let result = "";
  let characters = "KEISHNA963389";
  var characters4 = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters4));
  }
  return result;
}
module.exports = { makeid };

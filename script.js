
var obg_keys = {
  name: "Rostik",
  surname: "Yuriev",
  age: 16
}

function findKey(any_obg) {
  if (any_obg != undefined && any_obg != "" && any_obg != null && any_obg != 0) {
    if (any_obg.name && any_obg.surname && any_obg.age) {
      return true;
    }
  }
  return false;
}
alert(findKey(obg_keys));

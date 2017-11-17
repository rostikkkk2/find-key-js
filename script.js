function findKey() {
  var obg_keys = {
    name: "Rostik",
    surname: "Yuriev",
    age: 16
  }
  if (obg_keys.name && obg_keys.surname && obg_keys.age) {
    return true;
  }else {
    return false;
  }

}
alert(findKey());

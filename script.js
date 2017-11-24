var obg_keys = {
  name: "Rostik",
  surname: "Yuriev",
  age: 16,
}

function findKey(any_obg) {
  var arr_keys = Object.keys(any_obg);
  var res = [];
    for (var i = 0; i < arr_keys.length; i++) {
      if (arr_keys[i] == "name" || arr_keys[i] == "surname" || arr_keys[i] == "age") {
        res.push(arr_keys[i]);
    }
  }
    return arr_keys.length == res.length;
}

alert(findKey(obg_keys));

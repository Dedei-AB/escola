function triangulo(l1, l2, l3) {
  let existe;
  if (l1 == l2 && l2 == l3) {
    existe = true;
  } else if (l1 + l2 >= l3 && l2 + l3 >= l1 && l3 + l1 >= l2) {
    existe = true;
  } else {
    existe = false;
  }
  if (existe == true) {
    console.log("Este triângulo existe.");
  } else {
    console.log("Este triângulo não existe.");
  }
}
triangulo(3, 4, 5);

const palabra = prompt("Ingrese una palabra o frase de hasta 5 caracteres");

if (palabra.length > 6) {
  document.write(
    "por favor refresque la pagina e ingrese una palabra o frase de hasta 5 caracteres"
  );
} else {
  if (
    palabra.charAt(0) == "a" ||
    palabra.charAt(0) == "e" ||
    palabra.charAt(0) == "i" ||
    palabra.charAt(0) == "o" ||
    palabra.charAt(0) == "u"
  ) {
    document.write(palabra.charAt(0));
  }
  if (
    palabra.charAt(1) == "a" ||
    palabra.charAt(1) == "e" ||
    palabra.charAt(1) == "i" ||
    palabra.charAt(1) == "o" ||
    palabra.charAt(1) == "u"
  ) {
    document.write(palabra.charAt(1));
  }
  if (
    palabra.charAt(2) == "a" ||
    palabra.charAt(2) == "e" ||
    palabra.charAt(2) == "i" ||
    palabra.charAt(2) == "o" ||
    palabra.charAt(2) == "u"
  ) {
    document.write(palabra.charAt(2));
  }
  if (
    palabra.charAt(3) == "a" ||
    palabra.charAt(3) == "e" ||
    palabra.charAt(3) == "i" ||
    palabra.charAt(3) == "o" ||
    palabra.charAt(3) == "u"
  ) {
    document.write(palabra.charAt(3));
  }
  if (
    palabra.charAt(4) == "a" ||
    palabra.charAt(4) == "e" ||
    palabra.charAt(4) == "i" ||
    palabra.charAt(4) == "o" ||
    palabra.charAt(4) == "u"
  ) {
    document.write(palabra.charAt(4));
  }
}

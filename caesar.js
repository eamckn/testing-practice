export default function caesar(string, shiftVal) {
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let shiftedString = "";

  for (let i = 0; i < string.length; i++) {
    const currentChar = string.charAt(i);
    if (LOWERCASE.includes(currentChar)) {
      shiftedString += getShiftedChar(LOWERCASE, currentChar, shiftVal);
    } else if (UPPERCASE.includes(currentChar)) {
      shiftedString += getShiftedChar(UPPERCASE, currentChar, shiftVal);
    } else {
      shiftedString += currentChar;
    }
  }

  return shiftedString;
}

function getShiftedChar(caseString, currentChar, shiftVal) {
  const charIndex = caseString.indexOf(currentChar);
  const shiftedChar = caseString.charAt((charIndex + shiftVal) % 26);
  return shiftedChar;
}

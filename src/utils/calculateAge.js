export default function calculateAge(birthYear, birthMonth, birthDay) {
  var targetYear = 2023;
  var targetMonth = 4;
  var targetDay = 1;
  var calculatedAge = targetYear - birthYear;

  if (targetMonth < birthMonth) {
    calculatedAge--;
  }
  if (birthMonth === targetMonth && targetDay < birthDay) {
    calculatedAge--;
  }
  return calculatedAge;
}

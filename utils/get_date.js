var currentDate = new Date();
var today = currentDate.getDay();

var victoryBrideTime;

switch (today) {
  // Sunday
  case 0:
    victoryBrideTime = "22.00-00.00";
    break;
  // Monday
  case 1:
    victoryBrideTime = "21.00-22.00";
    break;
  // Tuesday
  case 2:
    victoryBrideTime = "22.00-23.00";
    break;
  // Wednesday
  case 3:
    victoryBrideTime = "21.00-22.00";
    break;
  // Thursday
  case 4:
    victoryBrideTime = "22.00-23.00";
    break;
  // Friday
  case 5:
    victoryBrideTime = "21.00-22.00";
    break;
  // Saturday
  case 6:
    victoryBrideTime = "21.00-23.00";
    break;

  default:
    victoryBrideTime = "Something went wrong!";
    break;
}

module.exports = { victoryBrideTime };

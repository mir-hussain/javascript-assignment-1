// Kilometer To Meter Function starts from here.

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Invalid input, distance can't be a negative number.";
  } else {
    let meter = kilometer / 1000;
    return meter;
  }
}

// Budget Calculator Function starts from here.

function budgetCalculator(clock = 0, phone = 0, laptop = 0) {
  if (clock < 0 || phone < 0 || laptop < 0) {
    return "Invalid input, the value of an item can't be negative.";
  } else {
    let totalAmount = clock * 50 + phone * 100 + laptop * 500;
    return totalAmount;
  }
}

// Hotel Cost Function starts from here.

function hotelCost(days) {
  let totalBill = 0;

  if (days < 0) {
    return "Invalid input, the value of days can't be negative.";
  } else if (days <= 10) {
    return (totalBill = days * 100);
  } else if (days >= 11 && days <= 20) {
    return (totalBill = days * 80 + 200);
    // First 10 days =  1000 taka
    // First 10 days if each day's value is 80 taka = 800
    // Difference =  200 taka
  } else {
    return (totalBill = days * 50 + 800);
    // First 10 days = 1000 taka
    // Second 10 days = 800 taka
    // First 20 days value = 1800 taka
    // First 20 days if each day's value is 50 taka = 1000
    // Difference = 800 taka
  }
}

// Mega Friend Function starts from here.

function megaFriend(names) {
  let temp = [""];
  let longestName;

  if (names.length == 0) {
    return "Your array is empty. Please enter at least 2 names. If you are an introvert and don't have any friends, I am deeply sorry to say that you won't find anything useful from this function. Go ahead and make some friends and then come back here. Good luck. ";
  } else {
    for (let i = 0; i < names.length; i++) {
      let element = names[i].replace(/\s/g, "");
      /*.replace(/\s/g, "") is used to remove all white space.
      no one can trick the program by using something like "M   i  r".
      If anyone wants to put both of their first name and last name, 
      they can do it as well because this program will count only the alphabets. */
      let nameLength = element.length;
      if (temp[0].length < nameLength) {
        temp.shift();
        temp.push(element);
      }
    }
  }
  longestName = temp[0].replace(/([A-Z])/g, " $1").trim();
  return longestName;
}

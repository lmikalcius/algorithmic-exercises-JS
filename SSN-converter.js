function hasSSN(inputSNN) {
  if (/\d{3}-\d{2}-\d{4}\b/.test(inputSNN)) {
    return true;
  } else {
    return false;
  }
}

function grabSSN(inputString) {
  if (hasSSN(inputString)) {
    return inputString.match(/\d{3}-\d{2}-\d{4}\b/)[0];
  } else {
    return "No SSN to grab";
  }
}

function grabAllSSNs(inputString) {
  if (hasSSN(inputString)) {
    return inputString.match(/\d{3}-\d{2}-\d{4}\b/g);
  } else {
    return "No SSNs to grab";
  }
}

function hideAllSSNs(inputString) {
  if (hasSSN(inputString)) {
    return inputString.replace(/\d{3}-\d{2}-(\d{4})\b/g, "XXX-XX-$1");
  } else {
    return "No SSNs to hide";
  }
}

function formatSSNs(inputString) {
  if (hasSSN(inputString)) {
    return inputString.replace(/\b(\d{3})\W*(\d{2})\W*(\d{4})\b/g, "$1-$2-$3");
  } else {
    return "Nothing to reformat";
  }
}

console.log(hasSSN("123-45-6789"));
console.log(hasSSN("123-445-6789"));
console.log(hasSSN("123-445-62789"));
console.log(grabSSN("The SSN is 123-45-6789"));
console.log(grabSSN("The SSN is 123-4245-6789"));
console.log(grabAllSSNs("The SSN is 123-45-6789 and 123-44-6089"));
console.log(grabAllSSNs("The SSN is 123-4245-6789"));
console.log(hideAllSSNs("The SSN is 123-45-6789 and 123-44-6089 and 123-4245-6789 and 123-42-9001"));
console.log(hideAllSSNs("The SSN is 13201"));
console.log(formatSSNs("The SSN is 123 -45.-6789 and 123.-44-6089 and 123.42.6789 and 123-42-9001"));
console.log(formatSSNs("The SSN is 122313"));
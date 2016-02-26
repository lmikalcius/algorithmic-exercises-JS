// STARTING FROM ONE, TRY TO FIND A PATH TO A TARGET NUMBER BY EITHER MULTIPLYING BY THREE OR ADDING 5
// TOP SOLUTION IS MY INITIAL TRY, BOTTOM SOLUTION IS REFACTORED COURTESY OF ELOQUENT JAVASCRIPT


function findSolution(target, initial, solution) {

  var solution = solution || "";
  var initial = initial || 1;
  // console.log(initial);
  // console.log(solution);
  if (initial === target) {
    return solution;
  } else if (initial >= target) {
    return false;
  } else {
    return findSolution(target, (initial * 3), (solution + " Multiply by 3")) ||
           findSolution(target, (initial + 5), (solution + " Add 5"));
  }

}

function giveSolution(target) {
  return findSolution(target) || "No possible solution";
}

console.log(giveSolution(7));
console.log(giveSolution(8));
console.log(giveSolution(11));
console.log(giveSolution(19));



function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

print(findSequence(24));
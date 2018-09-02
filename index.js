function distanceFromHqInBlocks(distance){
  if (distance > 42){
    return distance - 42;
  }
  else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(street) {
   distance = distanceFromHqInBlocks(street);
   result = distance * 264;
   return result;
 }

 function distanceTravelledInFeet(start, end) {
   result = Math.abs((start - end) * 264);
   return result;
 }

function calorieObject(inputFoods) {
  let foods = {};

  for (let i = 0; i < inputFoods.length; i += 2) {
      let name = inputFoods[i];
      let calories = Number(inputFoods[i + 1]);
      foods[name] = calories;
  }

  return foods;
}
class Sausage {
  getNutrition() {}
  getColor() {}
  getExpiration() {}
}

const sausage = new Sausage();

// BEFORE
export class CatBefore {
  constructor(private energy: number) {}
  eat(sausage: any) {
    // concrete to sausage
  }
}

const catBefore = new CatBefore(40);

catBefore.eat(sausage);

// AFTER
interface Food {
  getNutrition: () => void;
  getColor: () => void;
  getExpiration: () => void;
}

export class CatAfter {
  constructor(private energy: number) {}
  eat(food: Food) {
    food.getNutrition();
  }
}

const catAfter = new CatAfter(30);
catAfter.eat(sausage);

/*
    The code on the right(after) is more flexible than the code on the left, but its also more complicated
*/

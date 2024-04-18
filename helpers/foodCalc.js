import { Subscriptions } from "@material-ui/icons";

function roundToNearestFifty(num) {
  return Math.ceil(num / 50) * 50;
}

export function calcFoodWeight(obj) {
  const { fatLevel, weight, active, treat } = obj;
  console.log(
    "fatLevel, weight, active, treat",
    fatLevel,
    weight,
    active,
    treat
  );
  let kcal = 95 * Math.pow(weight, 0.75);
  if (fatLevel === "high") {
    kcal *= 0.95;
  } else if (fatLevel === "low") {
    kcal *= 1.05;
  }

  if (active === "low") {
    kcal *= 0.9;
  } else if (active === "high") {
    kcal *= 1.1;
  }

  if (treat === "high") {
    kcal *= 0.8;
  } else if (treat === "normal") {
    kcal *= 0.9;
  }
  //amt of food according to calories/100g
  obj.beef = roundToNearestFifty((kcal / 130) * 100);
  obj.horse = roundToNearestFifty((kcal / 110) * 100);
  obj.chicken = roundToNearestFifty((kcal / 123) * 100);
  obj.veg = roundToNearestFifty((kcal / 126) * 100);

  //round to nearest 50 gm (ceiling)
  return obj;
}

export const initialValue = {
  age: "",
  ageDuration: "",
  ownerName: "",
  email: "",
  dogName: "",
  gender: "",
  breed: "",
  weight: "",
  fatLevel: "",
  active: "",
  treat: "",
  allergies: "",
  illness: "",
  phoneNumber: "",
  alternatePhone: "",
  portion: "",
  product: "",
  prodCost: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipcode: "",
  // cardNumber: "",
  // cardMonth: "",
  // cardYear: "",
  beef: "",
  horse: "",
  chicken: "",
  veg: "",
  subscription: "",
  subscriptionTitle: "",
  productId: "",
};
//   password: "",
//   confirmPassword: "",
//   phoneNo: "",
//   street: "",
//   addressLine1: "",
//   addressLine2: "",
//   city: "",
//   state: "",
//   zipcode: "",

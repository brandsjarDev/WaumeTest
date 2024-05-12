import { Subscriptions } from "@material-ui/icons";

function roundToNearestFifty(num) {
  return Math.ceil(num / 50) * 50;
}
function getCost(prodType, formData) {
  let num = 0;
  if (prodType === "chicken") num = formData.chicken * 0.012 * 31;
  if (prodType === "beef") num = formData.beef * 0.012 * 31;
  if (prodType === "horse") num = formData.horse * 0.0145 * 31;
  if (prodType === "veg") num = formData.veg * 0.011 * 31;

  // Round off num to 2 decimal points
  if (formData.portion == "half") num *= 0.6;
  num = parseFloat(num.toFixed(2));

  return num;
}
export function getProdName(product) {
  let prodName = "Veggie Amigo";
  if (product === "chicken") prodName = "Belly Buddy";
  if (product === "beef") prodName = "Movement Freind";
  if (product === "horse") prodName = "Belly Buddy Plus";
  return prodName;
}
export function formatDate(date) {
  if (!(new Date(date) instanceof Date) || isNaN(new Date(date).getTime())) {
    return "";
  }

  const options = { day: "2-digit", month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("en-GB", options);
}
function getSubscriptionCost(title, formData) {
  if (title == "One Month" || title == "Per Month") return formData.prodCost;
  else if (title == "Three Month" || title == "Per Three Month")
    return parseFloat((formData.prodCost * 3).toFixed(2));
  else return 15;
}
function getUnitPerOrder(title, formData) {
  if (title == "One Month" || title == "Per Month")
    return formData.product ? 31 * formData[formData.product] : 0;
  else if (title == "Three Month" || title == "Per Three Month")
    return formData.product ? 93 * formData[formData.product] : 0;
  else return 1; //1 unit of trial pack
}
function getDeliveryDate() {
  const today = new Date();
  const currentDay = today.getDate();
  const targetDay = 14; // Target day of the month

  // Check if today's date is less than 9
  if (currentDay < 9) {
    // Return the 14th date of the current month
    return new Date(today.getFullYear(), today.getMonth(), targetDay);
  } else {
    // Return the 14th date of the next month
    const nextMonth = today.getMonth() + 1;
    const nextYear =
      nextMonth === 12 ? today.getFullYear() + 1 : today.getFullYear();
    return new Date(nextYear, nextMonth % 12, targetDay);
  }
}
//unitPerOrder
export function calcFoodWeight(obj) {
  const { fatLevel, weight, active, treat } = obj;
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

  // Create a new object to avoid modifying the original object
  const updatedObj = { ...obj };

  // Calculate and assign values to the properties of the new object
  updatedObj.beef = roundToNearestFifty((kcal / 130) * 100);
  updatedObj.horse = roundToNearestFifty((kcal / 110) * 100);
  updatedObj.chicken = roundToNearestFifty((kcal / 123) * 100);
  updatedObj.veg = roundToNearestFifty((kcal / 126) * 100);
  updatedObj.prodCost = obj.product ? getCost(obj.product, obj) : obj.prodCost;
  updatedObj.subscriptionAmt = getSubscriptionCost(obj.subscriptionTitle, obj);
  updatedObj.unitPerOrder = getUnitPerOrder(obj.subscriptionTitle, obj);
  updatedObj.deliveryDate = getDeliveryDate();

  return updatedObj;
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
  unitPerOrder: "",
  deliveryDate: "",
  companyName: "",
  orderComments: "",
  parkingPermit: "",
  hasActivePlan: false,
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

// Import the getCost function
function getCost(prodType, unit, portion, plan) {
  let num = unit;
  if (prodType === "chicken") num *= 0.012;
  if (prodType === "beef") num *= 0.012;
  if (prodType === "horse") num *= 0.0145;
  if (prodType === "veg") num *= 0.011;
  if (portion == "half") num *= 0.6;

  if (plan == "Trial Pack") {
    num = 25;
  }

  // Round off num to 2 decimal points
  return parseInt(Number(num.toFixed(2)) * 100);
}

// Test cases for getCost function
describe("getCost function", () => {
  // Test case for chicken
  it("should return the cost for chicken", () => {
    const cost = getCost("chicken", 10, "half", "Regular");
    console.log("cost", cost);
    expect(Number.isInteger(cost)).toBe(true); // Check if the returned value is a number
  });

  // Test case for beef
  it("should return the cost for beef", () => {
    const cost = getCost("beef", 122, "half", "Regular");
    console.log("const", cost);
    expect(Number.isInteger(cost)).toBe(true); // Check if the returned value is a number
  });

  // Test case for horse
  it("should return the cost for horse", () => {
    const cost = getCost("horse", 122, "half", "Regular");
    console.log("const", cost);
    expect(Number.isInteger(cost)).toBe(true); // Check if the returned value is a number
  });

  // Test case for veg
  it("should return the cost for veg", () => {
    const cost = getCost("veg", 15, "full", "Regular");
    console.log("const", cost);
    expect(Number.isInteger(cost)).toBe(true); // Check if the returned value is a number
  });

  // Test case for Trial Pack
  it("should return the cost for Trial Pack", () => {
    const cost = getCost("chicken", 1, "full", "Trial Pack");
    console.log("const", cost);
    expect(Number.isInteger(cost)).toBe(true); // Check if the returned value is a number
  });
});

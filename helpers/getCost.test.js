// Import the getCost function
function getCost(prodType, formData) {
  let num = 0;
  if (prodType === "chicken") num = formData.chicken * 0.012 * 31;
  if (prodType === "beef") num = formData.beef * 0.012 * 31;
  if (prodType === "horse") num = formData.horse * 0.0145 * 31;
  if (prodType === "veg") num = formData.veg * 0.011 * 31;

  // Round off num to 2 decimal points
  if (formData.portion == "half") num *= 0.6;
  num = parseFloat(num.toFixed(2));
  if (formData.country == "Switzerland") num *= 0.87; //13% tax reduced
  num = parseFloat(num.toFixed(2));

  return num;
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

  // Test case for Tarial Pack
  it("should return the cost for Trial Pack", () => {
    const cost = getCost("chicken", 1, "full", "Testpaket");
    console.log("const", cost);
    expect(Number.isInteger(cost)).toBe(true); // Check if the returned value is a number
  });
});

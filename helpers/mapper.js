const mapToSchemas = (value) => {
  // User schema mapping
  const user = {
    stripeId: value.stripeId || "",
    ownerName: value.ownerName,
    email: value.email,
    password: value.password,
    phoneNumber: value.phoneNumber || "",
    addressLine1: value.addressLine1,
    addressLine2: value.addressLine2 || "",
    country: value.country || "", // Assuming country exists
    zipcode: value.zipcode,
    city: value.city,
    companyName: value.companyName || "",
    orderComments: value.orderComments || "",
    parkingPermit: value.parkingPermit || "",
    forgotPasswordToken: "",
    forgotPasswordTokenExpiry: null,
    createdAt: new Date(),
    updatedAt: null,
  };

  // Pet schema mapping
  const pet = {
    ownerId: null, // This should be set after the User document is created and its ID is available
    dogName: value.dogName,
    age: value.age || "",
    ageDuration: value.ageDuration || "",
    gender: value.gender || "",
    birthDay: "", // This field is not available in value, set appropriately
    breed: value.breed || "",
    weight: value.weight || "",
    fatLevel: value.fatLevel || "",
    active: value.active || "",
    treat: value.treat || "",
    allergies: value.allergies, // Assuming allergies is a comma-separated string
    illness: value.illness, // Assuming illness is a comma-separated string
    createdAt: new Date(),
    updatedAt: null,
  };

  // Subscription schema mapping
  const subscription = {
    userId: null, // This should be set after the User document is created and its ID is available
    product: value.product || "",
    prodCost: value.prodCost || 0,
    productId: "", // This field is not available in value, set appropriately
    subscriptionId: "", // This field is not available in value, set appropriately
    subscriptionTitle: value.subscriptionTitle,
    subscriptionAmt: 0, // This field is not available in value, set appropriately
    unitPerOrder: value.unitPerOrder || 0,
    deliveryDate: new Date(value.deliveryDate),
    createdAt: new Date(),
    updatedAt: null,
  };

  return { user, pet, subscription };
};
export default mapToSchemas;

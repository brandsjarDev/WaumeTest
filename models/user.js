import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  stripeId: {
    type: String,
    default: "",
  },

  ownerName: {
    type: String,
    required: [true, "Please provide a name"],
  },
  firstName: {
    type: String,
    required: [true, "Please provide firstName"],
    default: "",
  },
  lastName: {
    type: String,
    required: [true, "Please provide lastName"],
    default: "",
  },

  dogName: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },

  birthDay: {
    type: Number,
    default: "",
  },
  birthMonth: {
    type: Number,
    default: "",
  },
  birthYear: {
    type: Number,
    default: "",
  },
  ageDuration: {
    type: String,
    default: "",
  },

  gender: {
    type: String,
    default: "",
  },
  birthDay: {
    type: String,
    default: "",
  },
  breed: {
    type: String,
    default: "",
  },
  weight: {
    type: String,
    required: [true, "Please provide weight"],
    default: "",
  },
  fatLevel: {
    type: String,
    required: [true, "Please provide fatLevel"],
    default: "",
  },
  active: {
    type: String,
    required: [true, "Please provide activeness level"],
    default: "",
  },
  treat: {
    type: String,
    required: [true, "Please provide a treat frequency"],
    default: "",
  },
  allergies: {
    type: [String],
    required: [true, "Please provide allergies"],
    default: [],
  },
  illness: {
    type: [String],
    required: [true, "Please provide illness"],
    default: [],
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  portion: {
    type: String,
    default: "",
  },
  product: {
    type: String,
    default: "",
  },
  prodCost: {
    type: Number,
    default: 0,
  },
  shippingCost: {
    type: Number,
    default: 0,
  },
  couponCode: {
    type: String,
    default: "",
  },
  discount: {
    type: Number,
    default: 0,
  },

  addressLine1: {
    type: String,
    required: [true, "Please provide addressLine1"],
    default: "",
  },
  addressLine2: {
    type: String,
    required: [true, "Please provide addressLine2"],
    default: "",
  },
  country: {
    type: String,
    required: [true, "Please provide country"],
    default: "",
  },
  subscriptionId: {
    type: String,
    required: false,
    default: "",
  },

  subscriptionTitle: {
    type: String,
    required: [true, "Please choose a subscription"],
  },
  subscriptionAmt: {
    type: Number,
    required: [true, "Please provide an amount"],
  },
  unitPerOrder: {
    type: Number,
    required: [true, "Please provide an unitPerOrder"],
  },
  zipcode: {
    type: String,
    required: [true, "Please provide zipcode"],
  },

  city: {
    type: String,
    required: [true, "Please provide city"],
  },
  companyName: {
    type: String,
    default: "",
  },
  orderComments: {
    type: String,
    default: "",
  },
  parkingPermit: {
    type: String,
    default: "",
  },

  deliveryDate: {
    type: Date,
    required: true,
  },
  forgotPasswordToken: {
    type: String,
    default: "",
  },
  forgotPasswordTokenExpiry: {
    type: Date,
    default: null,
  },
  // verifyToken: {
  //   type: String,
  //   default: "",
  // },
  // verifyTokenExpiry: {
  //   type: Date,
  //   default: null,
  // },
  // isVerified: {
  //   type: Boolean,
  //   default: false,
  // },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: null,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;

import React from "react";
const Navbar = dynamic(() => import("@components/Nav"), {
  ssr: false,
});
const Accordions = dynamic(() => import("@components/howItWorks/accordions"), {
  ssr: false,
});

const accordianData1 = [
  {
    title: "HOW DO I KNOW WHEN MY NEXT DELIVERY WILL ARRIVE?",
    content:
      "When you place your first order, we will let you know when the first delivery will arrive, after which you will receive WAUME every 4 weeks. You can change the order at any time in the login area .",
  },
  {
    title: "CAN I SEND THE FOOD BACK TO YOU?",
    content:
      "If your dog doesn't tolerate the food or your pet doesn't like it, you can contact us and we will find a solution    ",
  },
  {
    title: "WHEN WILL I RECEIVE THE DELIVERY?",
    content:
      "When you place your first order, we will let you know when the next delivery will be sent. After that, you will receive a new delivery approximately every 28 days, usually between Tuesday and Friday. If you are not at home, your package will be left in front of the door (with a drop-off permit from Austrian Post) or delivered to an Austrian Post collection point near you.",
  },
  {
    title: "WHERE AND HOW CAN I BUY YOUR FOOD?",
    content:
      "You can order WAUME on our website – either as a subscription or as a one-off trial package.",
  },
];
const accordianData2 = [
  {
    title: "DOES THE SUBSCRIPTION RENEW AUTOMATICALLY?",
    content:
      "Yes, subscriptions renew automatically. You can cancel/change/pause subscriptions at any time in the login area .",
  },
  {
    title: "WHAT HAPPENS IF I GO ON VACATION?",
    content:
      "You can pause your subscription at any time. Please let us know in good time. You can take WAUME with you on vacation without any problems. Make sure not to expose the food to direct sun and store it in a cool, dark place.",
  },
  {
    title: "HOW DO I EDIT, CHANGE, PAUSE OR CANCEL MY SUBSCRIPTION?",
    content:
      "You can edit, change and pause subscriptions at any time in the login area .You can also cancel your subscription in the login area . Please make your changes on time, at least 10 days before the next delivery.",
  },
];
const accordianData3 = [
  {
    title: "HOW DO YOU KNOW HOW MUCH FOOD MY DOG ​​NEEDS PER DAY?",
    content:
      "Our food generator ensures that your dog gets the right portion of food because we calculate the exact number of calories based on your information about weight, breed, age, activity level and body constitution.We also take into account any intolerances your dog may have and recommend our appropriate recipes.If your dog is underweight or overweight, you can easily indicate this in the configurator and we will adjust the portions so that he reaches his ideal weight!",
  },
  {
    title: "HOW DOES THE FEED CHANGE WORK?",
    content:
      "We would be happy to guide you through our conversion guide, which is included in our starter box. For most dogs, the transition means gradually getting used to the new food so that their gastrointestinal tract doesn't get upset. If this habituation occurs too quickly, your dog's digestive tract will not have the opportunity to adjust to the new food, which can lead to unwanted diarrhea. Slow adaptation can be particularly useful for sensitive dogs. The background to this is that a new food influences the bacterial flora in your dog's intestines. The adaptation takes about 7 days.With your first order you will receive a detailed feeding guide and a guide on changing your dog's food.Day 1 & 2	25% WAUME	75% previous feed Day 3 & 4	50% WOW	50% previous feed Day 5 & 6	75% WOW	25% previous feed From day 7	100% WOW	0% previous feed. With your first order you will receive a detailed feeding guide and a guide on changing your dog's food.",
  },
];
const accordianData4 = [
  {
    title:
      "WHAT HAPPENS IF THE SAUSAGE IS OPENED ONCE AND IS NOT FED STRAIGHT AWAY?",
    content:
      "After opening the sausage, the food must be consumed within 24 hours. After opening, the food must be stored in the refrigerator. Ideally covered or in a lockable box.",
  },
  {
    title: "HOW SHOULD I STORE THE FOOD?",
    content:
      "It is best to store your WAUME in a cool, dark place and protected from direct sunlight. WAUME does not need to be stored in the refrigerator or freezer.",
  },
  {
    title: "IS WAUME ALSO SUITABLE FOR PUPPIES?",
    content:
      "WAUME is a complete food for fully grown adult dogs. We therefore only recommend WAUME after height growth has been completed. Your dog will have completed this between 12 and 15 months. Your dog can then enjoy WAUME to the fullest. Are you unsure whether your dog has finished growing in height yet? It's best to contact your veterinarian.",
  },
  {
    title: "HOW IS YOUR FOOD PREPARED?",
    content:
      "In short, with a lot of love. Longer answer: Our ingredients are locally sourced, high quality and are cooked in small batches in our own production at Pro Village and packaged by hand. Our dogs can attest to how delicious it is. You can find more information on our homepage under “About Us” and on the Pro Village homepage www.pro-village.eu .",
  },
  {
    title: "MY DOG ​​IS OVERWEIGHT, IS WAUME A SUITABLE FOOD?",
    content:
      "The health of dogs is particularly important to us. Our recipes and feeding plans are based on the latest science and high quality standards. The food generator is used to determine the optimal amount of energy per day by specifying the breed, age, activity level and ideal weight. In this way, we create individually packaged daily rations that are truly tailored to your dog's needs. Our team will be with you from the start to monitor your dog's progress and make adjustments to your plan.",
  },
  {
    title: "WHY FRESH FOOD, WHY WAUME?",
    content:
      "Dog food comes in a wide variety of shapes and variants. With WAUME we have developed a fresh food that is fresh, healthy and optimally meets your needs. Because our goal is not just to provide your dog with food that fills him up - but to provide him with well-being for his entire dog's life. In order to ensure optimal nutrition and coverage of all important minerals and vitamins, our WAUME varieties are subjected to a full analysis. This means that a laboratory analyzes the food for all essential nutrients. This means you can be sure that your dog is optimally supplied with all nutrients.For us, fresh food means using fresh, high-quality ingredients that are processed and packaged directly. Through an optimized heating process we can retain a large proportion of the nutrients. Whether your dog is a picky eater struggling with a specific health issue or he is completely healthy and will eat just about anything, we have seen the positive effects of feeding fresh food to our own dogs and our dogs Customers experience first-hand. There is nothing magical about our food: WAUME is fresh food that is practical. Dog food, the way it should be. Great Food for Great Dogs",
  },
  {
    title: "HOW IS WAUME BEST SERVED?",
    content:
      "WAUME is individually pre-portioned for your dog. Simply cut the sausage open in a bowl at room temperature and add a little more water as needed. Tip: If your dog prefers warm meals or has a sensitive stomach, you can mix in some warm water.",
  },
];

export const Faq = () => {
  return (
    <>
      <Navbar />
      <Accordions title="Order and delivery" data={accordianData1} />
      <Accordions title="Subscription" data={accordianData2} />{" "}
      <Accordions title="Feed configurator" data={accordianData3} />
      <Accordions title="The food" data={accordianData4} />
    </>
  );
};
export default Faq;

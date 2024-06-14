import beefImage from "@public/assets/images/beef.webp";
import milletAndQuinoa from "@public/assets/images/milletAndQuinoa.webp";
import peas from "@public/assets/images/peas.webp";
import pumpkinSeeds from "@public/assets/images/pumpkinSeeds.webp";
import Chicken from "@public/assets/images/chicken.webp";
import Oat from "@public/assets/images/oats.webp";
import carrots from "@public/assets/images/carrots.webp";
import berries from "@public/assets/images/berries.webp";
import horse from "@public/assets/images/horse.webp";
import eggs from "@public/assets/images/eggs.webp";
import pumpkinProtein from "@public/assets/images/pumpkinProtein.webp";
import millet from "@public/assets/images/millet.webp";
import halfBoard from "@public/assets/images/halfBoard.png";
import fullBoard from "@public/assets/images/fullBoard.png";
import bellyBuddy from "@public/assets/images/belly-buddy.png";
import bellyBuddyPlus from "@public/assets/images/belly-buddy-plus.png";
import movementFreind from "@public/assets/images/movement-friend.png";
import veggieAmigo from "@public/assets/images/veggie-amigo.png";
import bellyBuddyProd from "@public/assets/images/BellyBuddy.jpg";
import bellyBuddyMoblieProd from "@public/assets/images/bellyBuddyMobile.jpg";
import bellyBuddyPlusProd from "@public/assets/images/bellyBuddyPlus.jpg";
import bellyBuddyPlusMoblieProd from "@public/assets/images/bellyBuddyPlusMobile.jpg";
import movementFriendProd from "@public/assets/images/movementFriend.png";
import movementFriendMobile from "@public/assets/images/movementFriendMobile.jpg";
import veggieAmigoProd from "@public/assets/images/veggieAmigo.jpg";
import veggieAmigoMobile from "@public/assets/images/veggieAmigoMobile.jpg";
import movementFreindProd from "@public/assets/images/movement-friend.png";

export default function getContent(prodName) {
  let obj = {};
  obj.title = "Movement Friend";
  obj.img = movementFriendProd;
  obj.mobileImg = movementFriendMobile;
  obj.ingredients = "Beef with quinoa, carrots and peas";
  obj.description =
    "WAUME Movement Friend with beef provides your four-legged friend with all the important nutrients to lead a long, active dog life. Because running and jumping are just fun. Movement Friend is a complete food for adult dogs.";
  if (prodName == "Belly-Buddy") {
    obj.title = "Belly Buddy";
    obj.img = bellyBuddyProd;
    obj.mobileImg = bellyBuddyMoblieProd;

    obj.ingredients = "Oat with oat flakes, carrots and berries";
    obj.description =
      "Waume Belly Buddy with chicken is an easily digestible and well-tolerated dog food. This means that even sensitive four-legged friends are prepared for all adventures. Belly Buddy is a complete food for adult dogs.";
  }
  if (prodName == "Belly-Buddy-Plus") {
    obj.title = "Belly Buddy Plus";
    obj.ingredients = "Horse meat with oat flakes, carrots and berries";
    obj.description =
      "WAUME Belly Buddy Plus with horse muscle meat is particularly easy to digest and digestible. This means that even picky furry friends will get their taste for something. Belly Buddy Plus is a delicious complete food for adult dogs.";
    obj.img = bellyBuddyPlusProd;
    obj.mobileImg = bellyBuddyPlusMoblieProd;
  }
  if (prodName == "Veggies-Amigo") {
    obj.title = "Veggies Amigo";
    obj.ingredients = "Vegetarian menu with egg and pumpkin seed protein";
    obj.description =
      "Go Veggie, go Veggie Amigo - the meatless alternative for your furry friend. An easily digestible, low-purine and wholesome meal to provide your four-legged friend with all the important nutrients. The Veggie Amigo is a complete vegetarian food for adult dogs.";
    obj.img = veggieAmigoProd;
    obj.mobileImg = veggieAmigoMobile;
  }

  return obj;
}

export function getIngredients(prodName) {
  let ingredients = [
    {
      title: "Beef",
      content: "High quality protein source",
      imageUrl: beefImage,
    },
    {
      title: "Millet and quinoa",
      content: "Rich in iron, magnesium and zinc",
      imageUrl: milletAndQuinoa,
    },
    {
      title: "Peas",
      content: "Green blobs and rich in phytochemicals",
      imageUrl: peas,
    },
    {
      title: "Pumpkin seeds",
      content: "contain essential omega-3 fatty acids",
      imageUrl: pumpkinSeeds,
    },
  ];
  if (prodName == "Belly-Buddy") {
    ingredients = [
      {
        title: "Chicken meat",
        content: "Particularly easy to digest protein",
        imageUrl: Chicken,
      },
      {
        title: "Oatmeal",
        content: "fiber for a relaxed stomach feeling",
        imageUrl: Oat,
      },
      {
        title: "Carrots",
        content: "Boiled and chopped carrots soothe the tummy",
        imageUrl: carrots,
      },
      {
        title: "Pumpkin seeds",
        content: "contain essential omega-3 fatty acids",
        imageUrl: berries,
      },
    ];
  }
  if (prodName == "Belly-Buddy-Plus") {
    ingredients = [
      {
        title: "Horse meat",
        content: "Easily digestible source of protein",
        imageUrl: horse,
      },
      {
        title: "Oatmeal",
        content: "fiber for a relaxed stomach feeling",
        imageUrl: Oat,
      },
      {
        title: "Carrots",
        content: "rich in vitamins",
        imageUrl: carrots,
      },
      {
        title: "Berries",
        content: "A local superfood",
        imageUrl: berries,
      },
    ];
  }
  if (prodName == "Veggies-Amigo") {
    ingredients = [
      {
        title: "Eggs",
        content: "contain all essential amino acids",
        imageUrl: eggs,
      },
      {
        title: "Pumpkin seed protein",
        content:
          "A true masterpiece of nature, very rich in protein and fiber.",
        imageUrl: pumpkinProtein,
      },
      {
        title: "Millet",
        content: "provides lots of iron and magnesium",
        imageUrl: millet,
      },
    ];
  }
  return ingredients;
}

export function getAccordianData(prodName) {
  let accordianData = [
    {
      title: "Composition",
      content:
        "Beef 50% (muscle meat 30%, heart 15% and liver 5% from beef), millet 15%, carrot 14%, quinoa 9%, apple 5%, peas 4%, vitamins and minerals, pumpkin seeds and hemp oil",
    },
    {
      title: "Analytical Component",
      content:
        "Crude protein 10.4%, crude fat 7%, crude ash 1.8%, crude fiber 0.7%, moisture 71.9%",
    },
    {
      title: "Additives/Kg",
      content:
        "Additives per kg (nutritional additives): 4.5 mg copper (3b405), 23 mg zinc (3b603), 3.8 mg manganese (3b503), 600 µg iodine (3b202), 83 µ selenium (3b821), 11,250 IU vitamin A (3a672a), 555 IU vitamin D3 (3a671), 50 mg vitamin E (3a700)",
    },
  ];
  if (prodName == "Belly-Buddy")
    accordianData = [
      {
        title: "Composition",
        content:
          "Chicken 50% (muscle meat 29%, heart 16% and liver 5% from chicken) oat flakes 15%, millet 10%, carrots 10%, celery 5%, apple 4%, berry mix (raspberries, blueberries, blackberries) 3%, vitamins and minerals, linseed and hemp oil",
      },
      {
        title: "Analytical Component",
        content:
          "Crude protein 10.9%, crude fat 4.6%, crude ash 0.6%, crude fiber 0.8%, moisture 73.8%",
      },
      {
        title: "Additives/Kg",
        content:
          "Additives per kg (nutritional additives): 4.5 mg copper (3b405), 23 mg zinc (3b603), 3.8 mg manganese (3b503), 600 µg iodine (3b202), 83 µ selenium (3b821), 11,250 IU vitamin A (3a672a), 555 IU vitamin D3 (3a671), 50 mg vitamin E (3a700)",
      },
    ];
  if (prodName == "Belly-Buddy-Plus")
    accordianData = [
      {
        title: "Composition",
        content:
          "Horse 50% (horse muscle meat) oat flakes 15%, millet 10%, carrots 10%, celery 5%, apple 4%, berry mix (raspberries, blueberries, blackberries) 3%, vitamins and minerals, linseed and hemp oil",
      },
      {
        title: "Analytical Component",
        content:
          "Crude protein 10.7%, crude fat 7.6%, crude ash 1.6%, crude fiber 0.7%, moisture 73.8%",
      },
      {
        title: "Additives/Kg",
        content:
          "Additives per kg (nutritional additives): 4.5 mg copper (3b405), 23 mg zinc (3b603), 3.8 mg manganese (3b503), 600 µg iodine (3b202), 83 µ selenium (3b821), 11,250 IU vitamin A (3a672a), 555 IU vitamin D3 (3a671), 50 mg vitamin E (3a700)",
      },
    ];
  if (prodName == "Veggies-Amigo")
    accordianData = [
      {
        title: "Composition",
        content:
          "Millet 40%, quinoa 12%, egg white 10%, pumpkin seed protein 10%, carrot 10%, pumpkin 10%, egg yolk 4.5%, vitamins and minerals 2%, sunflower oil, brewer's yeast, eggshell ",
      },
      {
        title: "Analytical Component",
        content:
          "Crude protein 9.9%, crude fat 4.7%, crude ash 2.7%, crude fiber 0.8%, moisture 71.5%",
      },
      {
        title: "Additives/Kg",
        content:
          "Additives per kg (nutritional additives): 4.5 mg copper (3b405), 23 mg zinc (3b603), 3.8 mg manganese (3b503), 600 µg iodine (3b202), 83 µ selenium (3b821), 11,250 IU vitamin A (3a672a), 555 IU vitamin D3 (3a671), 50 mg vitamin E (3a700)",
      },
    ];
  return accordianData;
}

export function getProdData() {
  const products = [
    {
      title: "Movement Friend",
      content: "Beef. Quinoa. Carrot.",
      imageUrl: movementFreind,
      url: "products/Movement-Friend",
    },
    {
      title: "Belly Buddy",
      content: "Chicken. Oatmeal. Berry.",
      imageUrl: bellyBuddy,
      url: "products/Belly-Buddy",
    },
    {
      title: "Belly Buddy Plus",
      content: "Horse. Oatmeal. Berry.",
      imageUrl: bellyBuddyPlus,
      url: "products/Belly-Buddy-Plus",
    },
    {
      title: "Veggie Amigo",
      content: "Egg. Pumpkin Seed Protein. Pumpkin.",
      imageUrl: veggieAmigo,
      url: "products/Veggie-Amigo",
    },
  ];
  return products;
}

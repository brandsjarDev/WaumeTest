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
  obj.ingredients = "Rindfleisch mit Quinoa, Karotten und Erbsen";
  obj.description =
    "WAUME Movement Friend mit Rindfleisch versorgt deinen Vierbeiner mit allen wichtigen Nährstoffen, um ein langes aktives Hundeleben zu führen. Weil Laufen und Springen einfach Spaß machen. Movement Friend ist ein Alleinfuttermittel für adulte Hunde.";
  if (prodName == "Belly-Buddy") {
    obj.title = "Belly Buddy";
    obj.img = bellyBuddyProd;
    obj.mobileImg = bellyBuddyMoblieProd;

    obj.ingredients = "Hühnerfleisch mit Haferflocken, Karotten und Beeren";
    obj.description =
      "Waume Belly Buddy mit Hühnerfleisch ist ein leicht verdauliches und gut verträgliches Hundefutter. So sind auch sensible Vierbeiner für alle Abenteuer gewappnet. Belly Buddy ist ein Alleinfuttermittel für adulte Hunde.";
  }
  if (prodName == "Belly-Buddy-Plus") {
    obj.title = "Belly Buddy Plus";
    obj.ingredients = "Pferdefleisch mit Haferflocken, Karotten und Beeren";
    obj.description =
      "WAUME Belly Buddy Plus mit Muskelfleisch vom Pferd ist besonders leicht verdaulich und bekömmlich. Damit kommen auch wählerische Fellnasen auf den Waume Geschmack. Belly Buddy Plus ist ein köstliches Alleinfuttermittel für adulte Hunde.";
    obj.img = bellyBuddyPlusProd;
    obj.mobileImg = bellyBuddyPlusMoblieProd;
  }
  if (prodName == "Veggies-Amigo") {
    obj.title = "Veggies Amigo";
    obj.ingredients = "Vegetarisches Menü mit Ei und Kürbiskernprotein";
    obj.description =
      "Go Veggie, go Veggie Amigo- die fleischlose Alternative für deine Fellnase. Eine leicht verdauliche, purinarme und vollwertige Mahlzeit, um deinen Vierbeiner mit allen wichtigen Nährstoffen zu versorgen. Der Veggie Amigo ist ein vegetarisches Alleinfuttermittel für adulte Hunde.";
    obj.img = veggieAmigoProd;
    obj.mobileImg = veggieAmigoMobile;
  }

  return obj;
}

export function getIngredients(prodName) {
  let ingredients = [
    {
      title: "Rindfleisch",
      content: "Hochwertige Proteinquelle",
      imageUrl: beefImage,
    },
    {
      title: "Hirse und Quinoa",
      content: "Reich an Eisen, Magnesium und Zink",
      imageUrl: milletAndQuinoa,
    },
    {
      title: "Erbsen",
      content: "Grüne Kleckse und reich an sekundären Pflanzenstoffen",
      imageUrl: peas,
    },
    {
      title: "Kürbiskerne",
      content: "Enthalten essentielle Omega-3 Fettsäuren",
      imageUrl: pumpkinSeeds,
    },
  ];
  if (prodName == "Belly-Buddy") {
    ingredients = [
      {
        title: "Hühnerfleisch",
        content: "Besonders leicht verdauliches Protein",
        imageUrl: Chicken,
      },
      {
        title: "Haferflocken",
        content: "Ballaststoffe für ein entspanntes Bauchgefühl",
        imageUrl: Oat,
      },
      {
        title: "Karotten",
        content: "Gekochte und zerkleinerte Karotten beruhigen den Bauch",
        imageUrl: carrots,
      },
      {
        title: "Beeren",
        content: "Reich an wertvollne Antioxidantien",
        imageUrl: berries,
      },
    ];
  }
  if (prodName == "Belly-Buddy-Plus") {
    ingredients = [
      {
        title: "Pferdefleisch",
        content: "Leicht verdauliche Proteinquelle",
        imageUrl: horse,
      },
      {
        title: "Haferflocken",
        content: "Ballaststoffe für ein entspanntes Bauchgefühl",
        imageUrl: Oat,
      },
      {
        title: "Karotten",
        content: "Reich an Vitaminen",
        imageUrl: carrots,
      },
      {
        title: "Beeren",
        content: "Ein heimisches Superfood",
        imageUrl: berries,
      },
    ];
  }
  if (prodName == "Veggies-Amigo") {
    ingredients = [
      {
        title: "Eier",
        content: "Enthält alle essentiellen Aminosäuren",
        imageUrl: eggs,
      },
      {
        title: "Kürbiskernprotein",
        content:
          "Ein wahres Meisterwerk der Natur, sehr protein- und ballaststoffreich.",
        imageUrl: pumpkinProtein,
      },
      {
        title: "Hirse",
        content: "Liefert viel Eisen und Magnesium",
        imageUrl: millet,
      },
    ];
  }
  return ingredients;
}

export function getAccordianData(prodName) {
  let accordianData = [
    {
      title: "Zusammensetzung",
      content:
        "Rind 50% (Muskelfleisch 30%, Herz 15% und Leber 5% vom Rind), Hirse 15%, Karotte 14%, Quinoa 9%, Apfel 5%, Erbsen 4%, Vitamine und Mineralstoffe, Kürbiskerne und Hanföl",
    },
    {
      title: "Analytische Bestandteile",
      content:
        "Rohprotein 10,4%, Rohfett 7%, Rohasche 1,8%, Rohfaser 0,7%, Feuchtigkeit 71,9%",
    },
    {
      title: "Zusatzstoffe/Kg",
      content:
        "Zusatzstoffe je kg (ernährungsphysiologische Zusatzstoffe): 4,5 mg Kupfer (3b405), 23 mg Zink (3b603), 3,8 mg Mangan (3b503), 600µg Jod (3b202), 83 µ Selen (3b821), 11.250 I.E. Vitamin A (3a672a), 555 I.E. Vitamin D3 (3a671), 50 mg Vitamin E (3a700)",
    },
  ];
  if (prodName == "Belly-Buddy")
    accordianData = [
      {
        title: "Zusammensetzung",
        content:
          "Huhn 50% (Muskelfleisch 29%, Herz 16% und Leber 5% vom Huhn) Haferflocken 15%, Hirse 10%, Karotten 10%, Sellerie 5%, Apfel 4%, Beerenmix (Himbeeren, Blaubeeren, Brombeeren) 3%, Vitamine und Mineralstoffe, Leinsamen und Hanföl",
      },
      {
        title: "Analytische Bestandteile",
        content:
          "Rohprotein 10,9%, Rohfett 4,6%, Rohasche 0,6%, Rohfaser 0,8%, Feuchtigkeit 73,8%",
      },
      {
        title: "Zusatzstoffe/Kg",
        content:
          "Zusatzstoffe je kg (ernährungsphysiologische Zusatzstoffe): 4,5 mg Kupfer (3b405), 23 mg Zink (3b603), 3,8 mg Mangan (3b503), 600µg Jod (3b202), 83 µ Selen (3b821), 11.250 I.E. Vitamin A (3a672a), 555 I.E. Vitamin D3 (3a671), 50 mg Vitamin E (3a700)",
      },
    ];
  if (prodName == "Belly-Buddy-Plus")
    accordianData = [
      {
        title: "Zusammensetzung",
        content:
          "Huhn 50% (Muskelfleisch 29%, Herz 16% und Leber 5% vom Huhn) Haferflocken 15%, Hirse 10%, Karotten 10%, Sellerie 5%, Apfel 4%, Beerenmix (Himbeeren, Blaubeeren, Brombeeren) 3%, Vitamine und Mineralstoffe, Leinsamen und Hanföl",
      },
      {
        title: "Analytische Bestandteile",
        content:
          "Rohprotein 10,9%, Rohfett 4,6%, Rohasche 0,6%, Rohfaser 0,8%, Feuchtigkeit 73,8%",
      },
      {
        title: "Zusatzstoffe/Kg",
        content:
          "Zusatzstoffe je kg (ernährungsphysiologische Zusatzstoffe): 4,5 mg Kupfer (3b405), 23 mg Zink (3b603), 3,8 mg Mangan (3b503), 600µg Jod (3b202), 83 µ Selen (3b821), 11.250 I.E. Vitamin A (3a672a), 555 I.E. Vitamin D3 (3a671), 50 mg Vitamin E (3a700)",
      },
    ];
  if (prodName == "Veggies-Amigo")
    accordianData = [
      {
        title: "Zusammensetzung",
        content:
          "Hirse 40%, Quinoa 12%, Eiklar 10%, Kürbiskerprotein 10%, Karotte 10%, Kürbis 10%, Eigelb 4,5%, Vitamine und Mineralstoffe 2%, Sonnenblumenöl, Bierhefe, Eierschale",
      },
      {
        title: "Analytische Bestandteile",
        content:
          "Rohprotein 9,9%, Rohfett 4,7%, Rohasche 2,7%, Rohfaser 0,8%, Feuchtigkeit 71,5%",
      },
      {
        title: "Zusatzstoffe/Kg",
        content:
          "Zusatzstoffe je kg (ernährungsphysiologische Zusatzstoffe): 4,5 mg Kupfer (3b405), 23 mg Zink (3b603), 3,8 mg Mangan (3b503), 600µg Jod (3b202), 83 µ Selen (3b821), 11.250 I.E. Vitamin A (3a672a), 555 I.E. Vitamin D3 (3a671), 50 mg Vitamin E (3a700)",
      },
    ];
  return accordianData;
}

export function getProdData() {
  const products = [
    {
      title: "Movement Friend",
      content: "Rind. Quinoa. Karotte.",
      imageUrl: movementFreind,
      url: "products/Movement-Friend",
    },
    {
      title: "Belly Buddy",
      content: "Huhn. Oatmeal. Berry.",
      imageUrl: bellyBuddy,
      url: "products/Belly-Buddy",
    },
    {
      title: "Belly Buddy Plus",
      content: "Pferd. Haferflocken. Beeren",
      imageUrl: bellyBuddyPlus,
      url: "products/Belly-Buddy-Plus",
    },
    {
      title: "Veggie Amigo",
      content: "Ei. Kürbiskernprotein. Kürbis",
      imageUrl: veggieAmigo,
      url: "products/Veggie-Amigo",
    },
  ];
  return products;
}

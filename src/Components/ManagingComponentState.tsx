import { useState } from "react";

const ManagingComponentState = () => {
  const [drink, setDrink] = useState({
    name: "Sprite",
    price: 20,
    packagedAt: {
      City: "Chandigarh",
      Pincode: 140001,
    },
    toppings: ["Mushroom"],
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 2 },
    ],
  });
  //   const [array, setArray] = useState(["happy", "caring", "independent"]);
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "toggle Button not working", isFixed: false },
  //   { id: 2, title: "toggle nav bar not working", isFixed: false },
  // ]);

  const handleClick = () => {
    setDrink({
      ...drink,
      items: drink.items.map((key) =>
        key.id === 1 ? { ...key, quantity: 2 } : key
      ),
    });
    // setDrink({
    //   ...drink,
    //   packagedAt: { ...drink.packagedAt, City: "New Delhi" },
    // });
    // setDrink({ ...drink, toppings: [...drink.toppings, "Cheeseburst"] });
    // setBugs(
    //   bugs.map((bug) => (bug.id === 1 ? { ...bug, isFixed: true } : bug))
    // );
    // setArray([...array, "exciting"]);
    // setArray(array.filter((item) => item !== "happy"));
    // setArray(array.map((item) => (item === "happy" ? "happiness" : item)));
    // setDrink({
    //   ...drink,
    //   packagedAt: { ...drink.packagedAt, Pincode: 140002 },
    // });
  };

  return (
    <>
      <button color="warning" onClick={handleClick}>
        Click Me
      </button>
      {console.log(drink)}
    </>
  );
};

export default ManagingComponentState;

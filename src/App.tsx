import Like from "./Components/Like";
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Buttons from "./Components/Buttons/Buttons";
import { useState, useRef, useEffect } from "react";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";
import "./index.css";
import ProductList from "./Components/ProductList";
import axios from "axios";
function App() {
  let items = [
    "Mumbai",
    "New Delhi",
    "Bangalore",
    "Gujarat",
    "Hyderabad",
    "Chandigarh",
  ];

  interface User {
    id: number;
    name: string;
  }
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [cartItems, setcartItems] = useState(["Product1", "Product2"]); // sharing states b/w components (NavBar and Cart)
  const handleSelectItem = (item: string) => console.log(item);
  const [alertVisible, setAlertVisibility] = useState(false);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <label htmlFor="Choose Name" className="for-label">
        Choose Name
      </label>
      <select
        id="Choose Name"
        className="form-select"
        onChange={(event) => setName(event.target.value)}
      >
        <option value=""></option>
        <option value="French Montana">French montana</option>
        <option value="Posty's Universe">Posty's universe</option>
        <option value="Cardi B">Cardi B</option>
      </select>
      <ProductList effectHookDemo={name} />
      <Form></Form>
      <p></p>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </Alert>
        )}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setAlertVisibility(true)}
        >
          My Button
        </button>
      </div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Buttons onClick={() => console.log("clicked")}>
        Button using CSSModule
      </Buttons>
      <Like onclick={() => console.log("clicked")} />
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} OnClear={() => setcartItems([])} />
      <ExpandableText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque error
        quidem deserunt modi voluptatibus soluta ipsum ab sapiente! Eum officia
        consectetur repellendus laborum incidunt voluptatem dicta recusandae
        magni laudantium, ratione illum reprehenderit impedit delectus ullam
        suscipit expedita perspiciatis. Iusto officiis doloremque sint possimus
        ipsum accusamus magni cum necessitatibus quia illum accusantium harum
        cumque beatae repellat, asperiores voluptatem aperiam nesciunt voluptate
        minima consectetur fugiat dolore, deserunt, ducimus rerum. Similique
        saepe, modi laudantium est libero odio maiores dolorem ratione suscipit,
        optio quis aut debitis! Vel repudiandae reiciendis expedita in eius.
        Consectetur nisi, placeat repellat eaque rerum quisquam libero aperiam
        deserunt ratione minus?
      </ExpandableText>
    </div>
  );
}

export default App;

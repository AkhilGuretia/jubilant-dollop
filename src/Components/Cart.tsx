interface props {
  cartItems: string[];
  OnClear: () => void;
}

const Cart = ({ cartItems, OnClear }: props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button color="primary" onClick={OnClear}>
        Clear Cart
      </button>
    </>
  );
};

export default Cart;

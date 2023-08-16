import "./App.css";
import products from "./data/products";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import { ComponentContext } from "./context";

import { Aside } from "./components/Aside";

function App() {
  return (
    <>
      <ComponentContext>
        <Header />
        <div className="mainContainer">
          <main>
            {products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </main>
          <Aside />
        </div>
      </ComponentContext>
    </>
  );
}

export default App;

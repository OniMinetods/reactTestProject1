import "./App.css";
import MyComponent from "./components/MyComponent";

const username = "Artyom";
const isLoggedIn = true;

const App = () => {
  const tasks = ["Buy a cat", "Make coffee", "Watch demo"];
  return (
    <>
      <div>
        <h1>Название</h1>
        <MyComponent />
        {isLoggedIn && <p>Hi, {username}!</p>}
        <p>{isLoggedIn ? `Hi, ${username}` : "Please, log in"}</p>
        <p>{new Date().toLocaleDateString()}</p>
        <hr />
        <input type="text" />
      </div>
      <div>
        <ul className="inputElements">
          {tasks.map((item) => (
            <input className="inputElement" value={item} disabled></input>
          ))}
        </ul>
      </div>
    </>
  );
};

// Возвращается только один элемент (можно обернуть в <></>)

// {Сюда можно передавать разные переменные и инструкции}

export default App;

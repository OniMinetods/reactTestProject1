import "./App.css";
import Button from "./components/Button";
import Field from "./components/Field";
import Greeting from "./components/Greeting";
import MyComponent from "./components/MyComponent";

const username = "Artyom";
const isLoggedIn = true;

const App = () => {
  const tasks = ["Buy a cat", "Make coffee", "Watch demo"];

  const getArray = () => {
    console.log(tasks);
  };

  return (
    <>
      <div>
        <h1>Название</h1>
        <MyComponent />
        {isLoggedIn && <p>Hi, {username}!</p>}
        <p>{isLoggedIn ? `Hi, ${username}!` : "Please, log in!"}</p>
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
      <Greeting id="g-1" name={"Саша"} />
      <Greeting id="g-2" name={"Петя"} />
      <Greeting id="g-3" name={"Маша"} />
      <Field id="input-field" placeholder="Введите что-то" />
      <Field id="input-field" placeholder="Не вводите" />
      <Button
        className="simple-button"
        name="Нажми меня"
        onClickTask={getArray}
      />
    </>
  );
};

// Возвращается только один элемент (можно обернуть в <></>)

// {Сюда можно передавать разные переменные и инструкции}

export default App;

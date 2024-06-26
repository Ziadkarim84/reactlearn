const generateRandomWord = ()=>{
  const words = ["Awesome", "Fundamental", "Osthir"];
  const randomIndex = Math.floor((Math.random()*100)%(words.length)); 
  return words[randomIndex];
}

function Header() {
  const randomWord = generateRandomWord();
  return(
  <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {randomWord} React concepts you will need for almost any app you are going
      to build!
    </p>
  </header>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

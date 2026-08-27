import PastryCard from "./components/PastryCard.tsx";

function App() {
  const menuItems = [
    { id: 1, title: 'Галета', fruit: 'Персик', hasStevia: true },
    { id: 2, title: 'Тарт', fruit: 'Слива', hasStevia: false },
    { id: 3, title: 'Кекс', fruit: 'Нектарин', hasStevia: true },
  ];

  return (
      <div>
        <h1>Каталог домашньої випічки</h1>
        {menuItems.map((item) => (
            <PastryCard
                key={item.id}
                title={item.title}
                fruit={item.fruit}
                hasStevia={item.hasStevia}
            />
        ))}
      </div>
  )
}

export default App;
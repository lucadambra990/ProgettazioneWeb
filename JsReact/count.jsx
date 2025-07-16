useState

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="1">
          <h1 className="2">Contatore: {count}</h1>
          <div className="3">
            <Button onClick={() => setCount(count - 1)} variant="outline">
              Decrementa
            </Button>
            <Button onClick={() => setCount(count + 1)}>
              Incrementa
            </Button>
          </div>
    </div>
  );
}

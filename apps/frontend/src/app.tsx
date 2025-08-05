import { Card } from "shared/components";

export default function App() {
  return (
    <div className="p-4 space-y-2.5">
      <p>Hello Zainar Monolith</p>

      <Card className="inline-block max-w-[480px]">
        <p>This is a card component from the shared directory</p>
      </Card>
    </div>
  );
}

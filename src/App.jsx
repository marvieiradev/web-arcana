import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="flex flex-col items-center bg-foreground text-background min-h-screen h-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;

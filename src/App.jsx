import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <main className="flex flex-col items-center bg-foreground text-background min-h-screen h-full">
        <Header/>
        <Outlet className="flex-1 w-full"/>
        <Footer/>
      </main>
    </>
  );
}

export default App;

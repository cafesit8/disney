import HomePage from "./(pages)/HomePage/page";
import { ThemeProvider } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePage />
    </main>
  );
}

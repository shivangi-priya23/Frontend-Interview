import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <h1 className="text-xl font-bold">CA MONK</h1>

      <nav className="hidden md:flex gap-6 text-sm text-gray-600">
        <a href="#">Tools</a>
        <a href="#">Practice</a>
        <a href="#">Events</a>
        <a href="#">Job Board</a>
        <a href="#">Points</a>
      </nav>

      <div className="flex gap-3">
        <Link to="/create">
          <Button variant="outline">Create Blog</Button>
        </Link>
        <Button>Profile</Button>
      </div>
    </header>
  );
}

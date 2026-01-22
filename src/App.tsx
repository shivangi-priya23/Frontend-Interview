import { Routes, Route } from "react-router-dom";
import HomePage from "@/components/HomePage";
import CreateBlogForm from "@/components/CreateBlogForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:id" element={<HomePage />} />
      <Route path="/create" element={<CreateBlogForm />} />
    </Routes>
  );
}

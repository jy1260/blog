import { Tag, List, Wifi } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 flex px-8 py-4 items-center bg-white/50 backdrop-blur">
      <div className="text-2xl font-bold underline">My Blog!</div>
      <div className="ml-auto flex space-x-4">
        <Tag className="hover:text-blue-300" />
        <List className="hover:text-blue-300" />
        <Wifi className="hover:text-blue-300" />
      </div>
    </div>
  );
}

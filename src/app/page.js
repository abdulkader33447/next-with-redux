import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";

export default function Home() {
  return (
    <div className="w-6/12 mx-auto mt-10 space-y-5">
      <AddUsers />
      <DisplayUsers />
    </div>
  );
}

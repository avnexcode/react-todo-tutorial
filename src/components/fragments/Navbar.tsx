import NavLink from "@/components/fragments/NavLink";
import NavTitle from "@/components/fragments/NavTitle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5">
      <div>
        <NavTitle />
      </div>
      <div>
        <NavLink />
      </div>
    </nav>
  )
}

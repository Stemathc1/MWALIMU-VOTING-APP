import VotingForm from "../components/VotingForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold">VOTE FOR BETTER</div>
          <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div>
            <Link href="/admin">
              <div className="text-white hover:underline">Go to admin</div>
            </Link>
          </div>
        </div>
      </nav>
      <VotingForm />
      </div>
  )
}

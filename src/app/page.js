
// import {useStore} from "../store/storeFile"; // Ensure this path is correct
import Dashboard from "./dashboard/Dashboard";

export default function Home() {
  // const { loading,error } = useStore();

  // if (loading) return <div>Loading....</div>;
  // if (error) return <div>error....</div>;

  return (
    <div>
      <Dashboard />
    </div>
  );
}

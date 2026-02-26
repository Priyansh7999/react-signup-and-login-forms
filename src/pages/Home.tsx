import Navbar from "../components/Navbar";
import { useUser } from "../context/UserContext";

const Home = () => {
    const context = useUser();
    const username = context?.userData?.name;

    return (
        <>
            <Navbar username={username} />
        </>
    )
}

export default Home;
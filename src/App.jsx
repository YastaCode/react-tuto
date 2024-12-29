import "./App.css";
import TwitterCard from "./components/TwitterCard";

function App() {
    const formattedUserName = (userName) => `@${userName}`;

    return(
        <main>
            <section className="twitter-card">
                <h2>Twitter Cards</h2>
                <TwitterCard
                    formattedUserName={formattedUserName('petroscode')}
                    srcImg="512/236/236831"
                    initialFollowing
                >petros córdova lizano</TwitterCard>
                <TwitterCard
                    formattedUserName={formattedUserName('raquelcode')}
                    srcImg="512/2922/2922565"
                    isFollowing={false}
                >raquel fernández lizano</TwitterCard>
                <TwitterCard
                    formattedUserName={formattedUserName('danycode')}
                    srcImg="512/180/180655"
                    isFollowing={false}
                >dany fernández lizano</TwitterCard>
                <TwitterCard
                    formattedUserName={formattedUserName('mélaniecode')}
                    srcImg="512/6833/6833605"
                    isFollowing={false}
                >mélanie córdova obando</TwitterCard>
                <TwitterCard
                    formattedUserName={formattedUserName('ivancode')}
                    srcImg="512/4042/4042356"
                    isFollowing={false}
                >ivan córdova lizano</TwitterCard>
            </section>
        </main>
    )
}
export default App;
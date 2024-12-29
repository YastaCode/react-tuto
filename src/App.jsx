import "./App.css";
import CardObj from "./components/CardObj";

const users = [
    {
        srcImg: "512/236/236831",
        name: "petros córdova lizano",
        userName: "petroscode",
        isFollowing: true
    },
    {
        srcImg: "512/2922/2922565",
        name: "raquel fernández lizano",
        userName: "raquelcode",
        isFollowing: false
    },
    {
        srcImg: "512/180/180655",
        name: "dany fernández lizano",
        userName: "danycode",
        isFollowing: false
    },
    {
        srcImg: "512/6833/6833605",
        name: "mélanie córdova obando",
        userName: "mélaniecode",
        isFollowing: false
    },
    {
        srcImg: "512/4042/4042356",
        name: "ivan córdova lizano",
        userName: "ivancode",
        isFollowing: false
    }
]
function App(){
    return(
        <main>
            <section className="card-obj">
                <h2>Object Cards</h2>
                {
                    users.map(({srcImg,name,userName,isFollowing}) => {
                        const formattedUserName = (userName) => `@${userName}`;
                        return(
                            <CardObj
                                key={userName}
                                formattedUserName={formattedUserName(userName)}
                                srcImg={srcImg}
                                initialFollowing={isFollowing}
                            >{name}</CardObj>
                        )
                    })
                }
            </section>
        </main>
    )
}
export default App;
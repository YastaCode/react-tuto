import { useState } from "react";
import "./App.css";
import TwitterCard from "./components/TwitterCard";

function App() {
  const format = (userName) => `@${userName}`; // pase une fonction
  // const format = <span>@yastacode</span> // pase un element

  return (
    <main>
      <section className="twitter-card">
        <TwitterCard
          userImg="512/236/236831"
          alt="236831-image"
          userName="yastacode"
          initialFollowing ={true}
          formatUserName= {format}
        >Petros Córdova</TwitterCard>
        <TwitterCard
          userImg="512/4139/4139967"
          alt="4139967-image"
          userName="melaniecode"
          isFollowing={false}
          formatUserName= {format}
        >Mélanie Córdova</TwitterCard>
        <TwitterCard
          userImg="256/4042/4042298"
          userName="jesuscode"
          formatUserName= {format}
        >Jesús Córdova</TwitterCard>
      </section>
    </main>
  )
}
export default App;
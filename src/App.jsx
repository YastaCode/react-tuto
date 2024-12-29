import { useState,useEffect } from "react";
import UserCard from "./components/UserCard";
import "./App.css";



function App(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true); //Add a loading state
    const [error,setError] = useState(null);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            if(!response.ok){
                throw new Error(`Error HTTP! status : ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            // Tri des utilisateurs par nom (ordre alphabétique)
            const sortedUsers = [...data].sort((a, b) => {
                const nameA = a.name.toUpperCase(); // Ignore la casse
                const nameB = b.name.toUpperCase();
                if(nameA < nameB){
                    return -1;
                }
                if(nameA > nameB){
                    return 1;
                }
                return 0; // Les noms sont égaux
            });
            // Limite à 5 utilisateurs
            const limitedUsers = sortedUsers.slice(0, 5);
            setUsers(limitedUsers);
        })
        .catch(err => {
            console.log("Error retrieving users :", err);
            setError(err);
        })
        .finally(() => setLoading(false)); // Indique que le chargement est terminé, même en cas d'erreur
    }, []);

    {
        loading
        ? (<div>Loading users...</div>)
        : error 
            ? (<div>Error : {error.message}</div>)
            : (
                // Seulement si ni le chargement ni l'erreur ne sont présents, afficher les utilisateurs
                users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))
            )
    }

    return(
        <main>
            <section className="user-card">
                <h2>{users.length} Users (sorted by name)</h2>
                {
                    loading
                    ? (
                        // Rendu conditionnel correct
                        <div>Loading users...</div>
                    )
                    : error 
                          ? (<div>Error : {error.message}</div>)
                          : users.length > 0 
                            ? (
                                // Vérifier si users contient des éléments avant de mapper
                                users.map(user => (
                                    <UserCard key={user.id} user={user} />
                                ))
                            )
                            : (
                                <div>No users found.</div> // Message si aucun utilisateur n'est chargé
                            )
                }
            </section>
        </main>
    )
}
export default App;
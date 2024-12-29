import { FaUser, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa'; // Importation des icônes
function UserCard({user}){
    return (
        <div className="user-card-item">
            <div className="user-avatar">
                <FaUser  />
            </div>
            <div className="user-details">
                <h3>{user.name}</h3>
                <p><FaEnvelope /> {user.email}</p>
                <p><FaPhone /> {user.phone}</p>
                <p><FaGlobe /> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">www.{user.website}</a></p>
            </div>
        </div>
    )
}
export default UserCard;
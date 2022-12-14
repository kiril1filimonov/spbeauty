import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
function General() {
    return (
        <div className='d-flex flex-column ms-5 col'>
            <Profile/> {/* Фото компании, название, тип и адрес */}
            <Preferences/> {/* Инпуты, где можно поменять название, тип и адрес */}
        </div>
    );
}

export default General;
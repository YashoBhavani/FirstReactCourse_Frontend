import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);
    
    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <h3>You got no favorites yet. Start adding some!!</h3>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }
    return (
    <section>
        <h1>My Favorites </h1>
        {content}
    </section>
    );
}


export default FavoritesPage;
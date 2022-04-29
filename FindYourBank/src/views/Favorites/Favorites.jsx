import { useContext } from "react";
import AppContext from "../../components/AppContext";
import TableView from "../AllBanks/components/TableView";

const Favorites = () => {
    const myContext = useContext(AppContext);
    return (
        <div>
            <h4>Favorites</h4>
            <TableView data={myContext.favoritesData} loader={false}/>
        </div>
    )
}

export default Favorites
import Participation from './Participation';
import EventInfo from './EventInfo';

import './Contents.scss';

function Body() {
    return (
        <div className="contents__body">
            <div className="container">
                <EventInfo></EventInfo>
                <Participation></Participation>
            </div>
        </div>
    );
}

export default Body;

import React from "react";
import Event from "./Event";

const Calendar = () => {
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Breakfast 🥞' color ='green' location='Hotel'/>
                        <Event event='Breakfast 🥞' color ='green' location='Hotel'/>
                        <Event event='Breakfast 🥞' color ='green' location='Hotel'/>
                        <Event event='Breakfast 🥞' color ='green' location='Hotel'/>
                        <Event event='Breakfast 🥞' color ='green' location='Hotel'/>
                        <Event event='Breakfast 🥞' color ='green' location='Hotel'/>
                        <Event event='Breakfast 🥞' color ='green' location='Hotel'/>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <Event event='The Getty 🏙️' color ='blue' location='1200 Getty Center'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Dodger Stadium 🏟️' color ='blue' location='1000 Vin Scully Ave'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Griffith' color ='pink' location='2800 E Observatory Rd'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='The Grove 🌴' color ='pink' location='189 The Grove Dr'/>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Bowl 🥣' color ='blue'/>
                        <td></td>
                        <Event event='Chinese Theater ⛩️' color ='blue' location='6925 Hollywood Blvd'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event='Fancy Dinner 🎩' color='green' location='Bestia'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Museum 🏢' color ='blue' location='5905 Wilshire Blvd'/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;
import "./App.css";
import Circle from "./specialBullet.jpg"
const App = ({title, dates, description}) => {
    return (
        <div>
        <div style= {{flexDirection: "row", display:"flex"}}>
            <img src={Circle} style={{width:30,height:30, paddingLeft:30, paddingTop:30}}/>
            <div>
            <h2 style={{paddingLeft: 10, paddingTop: 10}}>{title}</h2>  
            <p style={{paddingLeft: 10, lineHeight:0.1, color:"grey"}}>{dates}</p>
            <p style={{paddingLeft: 10, paddingRight: 40}}>{description}</p>
            </div>
             
    </div>
    
    </div>
    );
}
 
export default App;
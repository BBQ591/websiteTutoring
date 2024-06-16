import "./App.css";
import Activities from "./listItem"
function App() {
    return (
        <div style={{marginLeft: "20%", marginRight:"20%", backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', marginBottom: 30, marginTop:30}}>
            <div style={{textAlign:'center', paddingTop: 30}}>
                        <a style={{color:"black", fontSize: 35, fontWeight:"bold"}} href="https://docs.google.com/forms/d/e/1FAIpQLScteVdopxIUawS0Okvru_lvLSR8zGqt-jh6E9-_HbzfoAXOMg/viewform?usp=sf_link">Classes Offered (Click Here to Sign Up!)</a>
                        </div>
{/* <h1 style={{textAlign:"center", paddingTop:30}}>Classes Offered</h1> */}
            <div style= {{display:"flex", flexDirection:"row", paddingBottom: 40}}>
                <div style={{flex: 1, paddingLeft: 40}}>
                    <Activities title="Q001: SAT Math, Reading, Writing"/>
                    <Activities title="Q002: AP Calculus AB/BC"/>
                    <Activities title="Q003: AP Physics 1"/>
                    <Activities title="Q004: AP Physics 2"/>
                    <Activities title="Q005: AP Physics C Mechanics"/>
                </div>
                <div style={{flex:1, paddingRight: 40}}>
                <Activities title="Q006: AP Computer Science A"/>
                <Activities title="Q007: Python/Machine Learning"/>
                <Activities title="Q008: Mobile App Development; React-Native"/>
                <Activities title="Q009: Web Development; React"/>
                <Activities title="Q010: English for International Students"/>
                </div>

            </div>
    </div>
    );
}
 
export default App;
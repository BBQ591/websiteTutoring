import "./App.css";
 
function App() {
    return (
        <div style={{marginLeft: "20%", marginRight:"20%", backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', marginBottom: 30}}>
            <h1 style={{textAlign:"center", paddingTop:20}}>Accolades</h1>
            <div style = {{display:"flex", flexDirection:"row", textAlign:"center", paddingBottom:30}}>
                <div style={{flex:1, boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', borderRadius:20, marginLeft:20, marginRight:20}}>
                    <h2>2022</h2>
                    <p style={{fontSize:18}}>{'\u2022 AIME Qualification'}</p>
                    <p style={{fontSize:18}}>{'\u2022 TN03 Congressional App Challenge Winner'}</p>
                    <p style={{fontSize:18}}>{'\u2022 AP Computer Science A: 5'}</p>
                </div>
                <div style={{flex: 1, boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', borderRadius:20, marginLeft:20, marginRight:20}}>
                <h2>2023</h2>
                <p style={{fontSize:18}}>{'\u2022 AIME Qualification'}</p>
                <p style={{fontSize:18}}>{'\u2022 AP Physics 1/2: 5'}</p>
                <p style={{fontSize:18}}>{'\u2022 AP Calculus AB/BC: 5'}</p>
                <p style={{fontSize:18}}>{'\u2022 SAT: 1580'} </p>
                </div>
                
                <div style={{flex:1, boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', borderRadius:20, marginLeft:20, marginRight:20}}>
                    <h2>2024</h2>
                    <p style={{fontSize:18}}>{'\u2022 AIME Qualification'}</p>
                    <p style={{fontSize:18}}>{'\u2022 Validictorian'}</p>
                    <p style={{fontSize:18}}>{'\u2022 Admittance to UPenn, Georgia Tech, and University of Texas Turing'}</p>
                </div>
            </div>
            
    </div>
    );
}
 
export default App;
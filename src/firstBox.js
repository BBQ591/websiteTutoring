import profilePic from "./profilePic.jpg"
import austin from "./austin.jpg"
const FirstBox = () => {
    return(
        <div style={{backgroundImage: `url(${austin})`, backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat",marginLeft:"20%", marginRight:"20%",height: 500, marginTop: 50, boxShadow: '0 4px 8px rgba(0, 0, 0, 1)'}}>
        <div style={{flexDirection:"row", display:"flex", justifyContent:"center",paddingTop:50, alignContent:"center" }}>
            <div style={{flex:1, }}>
            <div style={{backgroundColor:"grey", width:215, height: 395, borderRadius: 20, alignContent:"center", justifyContent:'center',display: "flex", margin: "auto",boxShadow: '0 4px 8px rgba(0, 0, 0, 1)'}}>
            <img src={profilePic} style={{width:200, borderRadius: 30, height: 380, marginTop: 7.5, }}/>
            </div>
            </div>
<div style={{flex:1, textAlign:'center', alignContent:"center"}}>
    <div style={{marginRight:30, marginLeft:30, backgroundColor:"grey", paddingTop:10, paddingBottom:10, borderRadius: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 1)'}}>
    <h1 style = {{color:"white"}}>Brian Q.</h1>
            <h2 style = {{color:"white"}}>University of Texas</h2>
            <h2 style = {{color:"white"}}>Computer Science</h2>
            <h2 style = {{color:"white"}}>Turing Scholar</h2>
    </div>

            </div>
</div>

        </div>


    )
}
  
  export default FirstBox;
  
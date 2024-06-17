import "./App.css";
import Progressbar from "./Progress_bar";
 
function App() {
    return (
        <div >
            <h1 style={{textAlign:"center", paddingTop:30}}>Experience</h1>
            <h2 style={{ paddingLeft: 50, color:"black"}}>Python</h2>
            <p style = {{paddingLeft: 50, paddingRight: 50}}>I started learning Python during the summer of my 8th grade year. This skill has been useful in the internship opportunities that I've had, including the 2 summers I spent with the University of Tennessee's EECS department and Oak Ridge National Laboratory.</p>
            <Progressbar
                bgcolor="#1389f5"
                progress="5"
                height={30}
            />
            <h2 style={{ paddingLeft:50, color:"black", paddingRight:20}}>Machine Learning Intern at Oak Ridge National Lab and <br/>
                Software Engineer at the University of Tennessee, Knoxville EECS</h2>
            <p style = {{paddingLeft: 50, paddingRight: 50}}>At Oak Ridge National Laboratory, I've used Convolutional Neural Networks and Convolutional/Variational Autoencoders and Multi-layer Perceptrons to extract physical paramters from Neutron Reflectivity Graphs of Polyzwitterions and time-depedent Ionic Diblocks. Furthermore, I have worked with proteins and their entanglements to understand how individual chain structures change with respect to time. I have submitted a paper to the Soft Matter journal and is currently under review.</p>
            <p style = {{paddingLeft: 50, paddingRight: 50}}>At UTK, I created a 3D video rendering cloud service on Amazon Web Services using Python & JavaScript and prepared documentation for installation & setup on GitHub.</p>
            <Progressbar
                bgcolor="#1389f5"
                progress="4"
                height={30}
            />

            <h2 style={{ paddingLeft:50, color:"black"}}>Mobile App Development (React-Native)</h2>
            <p style = {{paddingLeft: 50, paddingRight: 50}}>During Freshman year, I decided to create a mobile app called "ORHS Scheduling" after struggling to choose my high school classes. This is a one-stop app that streamlines the process for students at Oak Ridge High School to create their 4-year high school schedule while calculating their credits for graduation. This hobby has led to the creation of the app, TSSAA Bowling, which allows for bowling coaches under TSSAA regulations to effortlessly calculate team scores and help strategize games in real-time.</p>
            <p style = {{paddingLeft: 50, paddingRight: 50}}>ORHS Scheduling was nominated as the winner for the 2022 TN03 Congressional App Challenge Winner.</p>
            <Progressbar
                bgcolor="#1389f5"
                progress="5"
                height={30}
            />
            <h2 style={{ paddingLeft:50, color:"black"}}>Web Development (React)</h2>
            <p style = {{paddingLeft: 50, paddingRight: 50}}>During Sophomore year, I decided to start up the computer science club again after it had disbanded from COVID. As the re-founder, I chose to tutor React, a web development language similar to React-Native, to the members of the club. We worked worked with the Tennessee Mu Alpha Theta to create a info page for the 2024 convention and with the Secret City Wildbots to make a web page that automated score tracking in real time at competitions.</p>
            <Progressbar
                bgcolor="#1389f5"
                progress="4"
                height={30}
            />
            <h2 style={{paddingBottom: 15}}></h2>
        </div>
    );
}
 
export default App;
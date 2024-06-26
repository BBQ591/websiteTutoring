import "./App.css";
import Activities from "./listItem"
function App() {
    return (
        <div style={{marginLeft: "20%", marginRight:"20%", backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)', marginBottom: 30}}>
            <h1 style={{paddingTop: 30, paddingLeft: 30}}>Clubs and Activities</h1>
            <div style={{paddingBottom: 30}}>
<Activities
title="Tennessee Mu Alpha Theta President"
dates="2023-2024"
description="I started math club in middle school and joined my high school's Mu Alpha Theta program freshman year. I was elected as state president at the end of Junior Year" />
<Activities
title="Computer Science Club"
dates="2022-2024"
description="During Sophomore year, I re-founded the computer science club after it was disbanded during COVID. I tutored React, a web developing language." />
<Activities
title="Science Bowl President"
dates="2023-2024"
description="I led weekly meetings to practice for the Tennessee Science Bowl Competition and Farragut Invitational." />
<Activities
title="Students of Undergraduate Physics President"
dates="2023-2024"
description="I led weekly meetings in the spring semester of Senior year to help students in AP Physics to review for the AP test in May." />
<Activities
title="Oak Ridge Youth Advisory Board"
dates="2022-2024"
description="I worked with the city board and other students to help improve the local community from the youth's prospective" />
<Activities
title="Soccer (Varsity, Club, and Olympic Development Program)"
dates="2010-Current"
description="I played soccer for varsity senior year, club since I was 4, and the Tennessee Olympic Development Program team 1 since freshman year." />
</div>
    </div>
    );
}
 
export default App;
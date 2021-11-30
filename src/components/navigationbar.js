


const inner = {
  width:"80%",
  height:"100%",
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:"60px",
  textAlign:"center",
  fontWeight:"bold",
  color:"white",
} 

const item = {
    textDecoration:"none",
    color:"white",
}


function NavigationBar(props){

    return(
        <div style={{height:props.height}} className="bg-black flex w-full justify-center sticky top-0 z-20 shadow-2xl">
            <div style={inner}>
                <a className="link-white hidden sm:block" style={{display: props.display}} href="#CurrentProjects" >Current</a>
                <a className="link-white hidden sm:block" style={{display: props.display}}  href="#FinishedProjects">Finished</a>
                <a className="text-xl text-white w-60 " style={{display: props.displayName}} href="#HomePage" >Daniel McCann-Sayles</a>
                <a className="link-white hidden sm:block" style={{display: props.display}} href="#AboutMe">About</a>
                <a className="link-white hidden sm:block" style={{display: props.display}} href="#Contact">Contact</a>
            </div>
        </div>
    );
}

export default NavigationBar;



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
        <div style={{height:props.height}} className="bg-black flex w-full justify-center sticky top-0 z-50">
            <div style={inner}>
                <a className="link-white hidden sm:block" style={{display: props.display}} href="#statistics" >Statistics</a>
                <a className="link-white hidden sm:block" style={{display: props.display}}  href="#purpose">Our Purpose</a>
                <a className="text-xl text-white w-60 " style={{display: props.displayName}} href="#home" >Daniel McCann-Sayles</a>
                <a className="link-white hidden sm:block" style={{display: props.display}} href="#about-us">About Us</a>
                <a className="link-white hidden sm:block" style={{display: props.display}} href="#partners">Partners</a>
            </div>
        </div>
    );
}

export default NavigationBar;
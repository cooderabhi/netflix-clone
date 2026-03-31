function Navbar() {
  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px", 
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
        zIndex: 100,
        display: "flex",               
        justifyContent: "space-between", 
        alignItems: "center",         
        boxSizing: "border-box"        
      }}
    >
      <h2 style={{ color: "red", margin: 0 }}>NETFLIX</h2>
      
      <button 
        style={{
          backgroundColor: "#e50914", 
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
        onClick={() => {
          localStorage.removeItem("user");
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
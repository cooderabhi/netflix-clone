const API = "http://localhost:5001/api";

export const fetchMovies = async () => {
  try {
    const res = await fetch(`${API}/movies`);
    
    console.log("RAW RESPONSE:", res);
    
   
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const text = await res.text();    
    console.log("RAW TEXT:", text);   
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}; 
export const registerUser = async (data) => {
  try {
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const loginUser = async (data) => {
  try {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
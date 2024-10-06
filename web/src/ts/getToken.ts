
export default async function getToken(){
    const res = await fetch("http://localhost:5000/auth/getToken");
    if (!res.ok) {
        throw new Error("Failed to fetch token");
      }
    const token = await res.json()
    // console.log(token);
    return token.token;
}

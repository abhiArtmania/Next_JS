import Script from "next/script";
import Location from "./location";

async function getUsers(){
    let data = await fetch('http://api.escuelajs.co/api/v1/users')
    .then((res)=>res.json())
    .then(data=>data)
    return data;
}

const UserDetails = async () => {
    const users = await getUsers();
    console.log(users,"=========users")
  return (
    <div>
      <h1>User Details</h1>
      {
        users.map((user, index) => {
            return (
              <div key={index}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            );
        })
      }
      <Location/>
    </div>
  );
};

export default UserDetails;
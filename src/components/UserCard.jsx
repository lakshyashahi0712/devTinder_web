import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { removeUserFromFeed } from "../utils/feedSlice"

const UserCard = ({user}) => {
    const {firstName , lastName , photoUrl , age , gender , about , _id } = user
    const dispatch = useDispatch();


    const handleSendRequest = async(status , userId)=>{
        try{
            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId , {} , {withCredentials:true})
            dispatch(removeUserFromFeed(userId))
        }catch(err){
          console.log(err.message)
        }
    }
    console.log(user)
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="user" />
  </figure>
  <div className="card-body justify-center">
    <h2 className="card-title justify-center">{firstName + " " + lastName}</h2>
    {age && gender && <p>{age + " , " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions my-4 justify-center ">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored", _id)}>Ignore</button>
      <button className="btn bg-pink-600" onClick={()=>handleSendRequest("interested", _id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard

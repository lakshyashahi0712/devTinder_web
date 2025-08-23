
const UserCard = ({user}) => {
    const {firstName , lastName , photoUrl , age , gender , about} = user

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
      <button className="btn btn-primary">Ignore</button>
      <button className="btn bg-pink-600">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard


const UserCard = ({ user,deleteUserById,setUpdateInfo,handleOpenForm}) => {
 
  const handleDelete = () =>{
    deleteUserById('/users',user.id)
  }
  const handleUpdate = () =>{
    setUpdateInfo(user)
    handleOpenForm()
  }
  return (
    
    <article className="container">
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <hr />
      <ul>
        <li>
          <span>Email: </span>
          <span>{user.email}</span>
        </li>
        <li>
        <span>Birthday: </span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <hr />

      <footer className="icon__footer">
        <button className="icon__trash" onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className="icon__pencil" onClick={handleUpdate}><i className='bx bx-pencil'></i></button>
      </footer>
    </article>
  );
};

export default UserCard
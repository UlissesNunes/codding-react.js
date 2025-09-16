function UserDetails({ userWork }) {
  return (
    <div>
      <h1>Usuários:</h1>
      <div className="users-container">
        {userWork.map((user) => (
          <div key={user.id} className="user-card">
            <h3>Nome: {user.name}</h3>
            <p>Idade: {user.age}</p>
            <p>Profissão: {user.job}</p>
            {user.age >= 18 ? (
              <p className="maior-idade">Usuário é maior de idade ✅</p>
            ) : (
              <p className="menor-idade">Usuário é menor de idade ⚠️</p>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
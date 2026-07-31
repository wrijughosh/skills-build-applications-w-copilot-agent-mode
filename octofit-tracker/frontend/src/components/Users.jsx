import ResourceView from './ResourceView.jsx'

function Users() {
  return (
    <ResourceView
      resource="users"
      title="Users"
      description="Athletes, goals, and account details tracked by the OctoFit API."
      columns={2}
      renderCard={(user) => (
        <>
          <h2>{user.firstName} {user.lastName}</h2>
          <p className="muted">@{user.username}</p>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div>
              <dt>Goal</dt>
              <dd>{user.fitnessGoal}</dd>
            </div>
            <div>
              <dt>Age</dt>
              <dd>{user.age}</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Users
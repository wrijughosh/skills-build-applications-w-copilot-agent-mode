import ResourceView from './ResourceView.jsx'

function Teams() {
  return (
    <ResourceView
      resource="teams"
      title="Teams"
      description="Team rosters, home cities, and OctoFit mascots."
      columns={2}
      renderCard={(team) => (
        <>
          <h2>{team.name}</h2>
          <p className="muted">{team.city}</p>
          <dl>
            <div>
              <dt>Mascot</dt>
              <dd>{team.mascot}</dd>
            </div>
            <div>
              <dt>Members</dt>
              <dd>{team.members?.length ?? 0}</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Teams
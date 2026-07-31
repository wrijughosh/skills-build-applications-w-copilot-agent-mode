import ResourceView from './ResourceView.jsx'

function Leaderboard() {
  return (
    <ResourceView
      resource="leaderboard"
      title="Leaderboard"
      description="Current standings across teams and athletes."
      columns={3}
      renderCard={(entry) => (
        <>
          <p className="rank">#{entry.rank}</p>
          <h2>{entry.user?.firstName} {entry.user?.lastName}</h2>
          <p className="muted">{entry.team?.name}</p>
          <dl>
            <div>
              <dt>Points</dt>
              <dd>{entry.points}</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Leaderboard
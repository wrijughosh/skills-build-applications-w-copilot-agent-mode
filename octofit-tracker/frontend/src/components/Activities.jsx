import ResourceView from './ResourceView.jsx'

function Activities() {
  return (
    <ResourceView
      resource="activities"
      codespaceEndpoint="-8000.app.github.dev/api/activities"
      title="Activities"
      description="Completed workouts with duration, calories, distance, and team context."
      columns={2}
      renderCard={(activity) => (
        <>
          <h2>{activity.type}</h2>
          <p className="muted">{activity.user?.firstName} {activity.user?.lastName}</p>
          <dl>
            <div>
              <dt>Team</dt>
              <dd>{activity.team?.name ?? 'Independent'}</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>{activity.durationMinutes} min</dd>
            </div>
            <div>
              <dt>Calories</dt>
              <dd>{activity.caloriesBurned}</dd>
            </div>
            {activity.distanceMiles && (
              <div>
                <dt>Distance</dt>
                <dd>{activity.distanceMiles} mi</dd>
              </div>
            )}
          </dl>
        </>
      )}
    />
  )
}

export default Activities
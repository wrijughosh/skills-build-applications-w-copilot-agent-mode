import ResourceView from './ResourceView.jsx'

function Workouts() {
  return (
    <ResourceView
      resource="workouts"
      title="Workouts"
      description="Suggested training sessions matched to common fitness goals."
      columns={2}
      renderCard={(workout) => (
        <>
          <h2>{workout.title}</h2>
          <p>{workout.description}</p>
          <dl>
            <div>
              <dt>Difficulty</dt>
              <dd>{workout.difficulty}</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>{workout.durationMinutes} min</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{workout.focusArea}</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Workouts
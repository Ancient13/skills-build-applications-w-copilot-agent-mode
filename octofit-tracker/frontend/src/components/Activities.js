import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://turbo-disco-4gpxvgp7j4p2jq59-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.activity_type} - {activity.duration} minutes</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;

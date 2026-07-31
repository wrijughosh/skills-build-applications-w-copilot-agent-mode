import { Router } from 'express';

import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const router = Router();

router.get('/users/', async (_request, response) => {
  const users = await User.find().sort({ lastName: 1, firstName: 1 });

  response.json(users);
});

router.get('/teams/', async (_request, response) => {
  const teams = await Team.find().populate('members').sort({ name: 1 });

  response.json(teams);
});

router.get('/activities/', async (_request, response) => {
  const activities = await Activity.find()
    .populate('user')
    .populate('team')
    .sort({ completedAt: -1 });

  response.json(activities);
});

router.get('/leaderboard/', async (_request, response) => {
  const leaderboard = await Leaderboard.find()
    .populate('user')
    .populate('team')
    .sort({ rank: 1 });

  response.json(leaderboard);
});

router.get('/workouts/', async (_request, response) => {
  const workouts = await Workout.find().sort({ title: 1 });

  response.json(workouts);
});

export default router;
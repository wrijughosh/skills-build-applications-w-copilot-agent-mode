import mongoose from 'mongoose';

import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [maya, jordan, priya, theo] = await User.insertMany([
      {
        username: 'maya.moves',
        email: 'maya@example.com',
        firstName: 'Maya',
        lastName: 'Chen',
        age: 29,
        fitnessGoal: 'Build endurance',
        joinedAt: new Date('2026-01-08T10:00:00.000Z'),
      },
      {
        username: 'jordan.lifts',
        email: 'jordan@example.com',
        firstName: 'Jordan',
        lastName: 'Reed',
        age: 34,
        fitnessGoal: 'Increase strength',
        joinedAt: new Date('2026-02-14T09:30:00.000Z'),
      },
      {
        username: 'priya.pace',
        email: 'priya@example.com',
        firstName: 'Priya',
        lastName: 'Nair',
        age: 27,
        fitnessGoal: 'Train for a 10K',
        joinedAt: new Date('2026-03-04T12:15:00.000Z'),
      },
      {
        username: 'theo.trails',
        email: 'theo@example.com',
        firstName: 'Theo',
        lastName: 'Bennett',
        age: 41,
        fitnessGoal: 'Improve mobility',
        joinedAt: new Date('2026-04-18T16:45:00.000Z'),
      },
    ]);

    const [summitSprinters, coreCrew] = await Team.insertMany([
      {
        name: 'Summit Sprinters',
        mascot: 'Peak',
        city: 'Seattle',
        members: [maya._id, priya._id],
      },
      {
        name: 'Core Crew',
        mascot: 'Flex',
        city: 'Austin',
        members: [jordan._id, theo._id],
      },
    ]);

    await Activity.insertMany([
      {
        user: maya._id,
        team: summitSprinters._id,
        type: 'Trail run',
        durationMinutes: 48,
        caloriesBurned: 430,
        distanceMiles: 4.8,
        completedAt: new Date('2026-07-24T13:00:00.000Z'),
      },
      {
        user: jordan._id,
        team: coreCrew._id,
        type: 'Strength training',
        durationMinutes: 55,
        caloriesBurned: 390,
        completedAt: new Date('2026-07-25T11:30:00.000Z'),
      },
      {
        user: priya._id,
        team: summitSprinters._id,
        type: 'Tempo run',
        durationMinutes: 42,
        caloriesBurned: 360,
        distanceMiles: 4.2,
        completedAt: new Date('2026-07-26T14:20:00.000Z'),
      },
      {
        user: theo._id,
        team: coreCrew._id,
        type: 'Yoga flow',
        durationMinutes: 35,
        caloriesBurned: 180,
        completedAt: new Date('2026-07-27T10:10:00.000Z'),
      },
    ]);

    await Leaderboard.insertMany([
      {
        user: maya._id,
        team: summitSprinters._id,
        rank: 1,
        points: 1280,
        weeklyMinutes: 215,
      },
      {
        user: jordan._id,
        team: coreCrew._id,
        rank: 2,
        points: 1195,
        weeklyMinutes: 205,
      },
      {
        user: priya._id,
        team: summitSprinters._id,
        rank: 3,
        points: 1110,
        weeklyMinutes: 190,
      },
      {
        user: theo._id,
        team: coreCrew._id,
        rank: 4,
        points: 930,
        weeklyMinutes: 165,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Endurance Builder',
        focus: 'Cardio',
        difficulty: 'Intermediate',
        durationMinutes: 45,
        exercises: ['Easy run warmup', 'Four tempo intervals', 'Cooldown walk'],
        recommendedForGoal: 'Build endurance',
      },
      {
        title: 'Foundational Strength',
        focus: 'Strength',
        difficulty: 'Beginner',
        durationMinutes: 40,
        exercises: ['Goblet squats', 'Pushups', 'Dumbbell rows', 'Plank holds'],
        recommendedForGoal: 'Increase strength',
      },
      {
        title: 'Race Pace Tune-Up',
        focus: 'Running',
        difficulty: 'Advanced',
        durationMinutes: 50,
        exercises: ['Dynamic warmup', 'Race pace repeats', 'Stride outs'],
        recommendedForGoal: 'Train for a 10K',
      },
      {
        title: 'Mobility Reset',
        focus: 'Mobility',
        difficulty: 'Beginner',
        durationMinutes: 30,
        exercises: ['Hip openers', 'Thoracic rotations', 'Hamstring flossing'],
        recommendedForGoal: 'Improve mobility',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

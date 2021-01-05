import { writable } from 'svelte/store';

export const players = writable([
  {
    name: 'Player 1',
    playerID: 1,
    score: 0,
    cp: 0,
    faction: '',
    primary: [
      { name: 'Primary Turn 2', score: 0 },
      { name: 'Primary Turn 3', score: 0 },
      { name: 'Primary Turn 4', score: 0 },
      { name: 'Primary Turn 5', score: 0 },
    ],
    secondaries: [0, 0, 0],
    secondariesCatagories: ['', '', ''],
  },
  {
    name: 'Player 2',
    playerID: 2,
    score: 0,
    cp: 0,
    faction: '',
    primary: [
      { name: 'Primary Turn 2', score: 0 },
      { name: 'Primary Turn 3', score: 0 },
      { name: 'Primary Turn 4', score: 0 },
      { name: 'Primary Turn 5', score: 0 },
    ],
    secondaries: [0, 0, 0],
    secondariesCatagories: ['', '', ''],
  },
]);

export const activePlayer = writable(0);

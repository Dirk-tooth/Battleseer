import { writable } from 'svelte/store';

export const players = writable([
  {
    name: '',
    playerID: 1,
    score: 0,
    cp: 0,
    faction: '',
    primary: [0, 0, 0, 0],
    primaryTotal: 0,
    // primary: [
    //   { name: 'Primary Turn 2', score: 0 },
    //   { name: 'Primary Turn 3', score: 0 },
    //   { name: 'Primary Turn 4', score: 0 },
    //   { name: 'Primary Turn 5', score: 0 },
    // ],
    secondaries: [0, 0, 0],
    secondariesCatagories: ['', '', ''],
    secondaryTotal: 0,
  },
  {
    name: '',
    playerID: 2,
    score: 0,
    cp: 0,
    faction: '',
    primary: [0, 0, 0, 0],
    primaryTotal: 0,
    // primary: [
    //   { name: 'Primary Turn 2', score: 0 },
    //   { name: 'Primary Turn 3', score: 0 },
    //   { name: 'Primary Turn 4', score: 0 },
    //   { name: 'Primary Turn 5', score: 0 },
    // ],
    secondaries: [0, 0, 0],
    secondariesCatagories: ['', '', ''],
    secondaryTotal: 0,
  },
]);

export const activePlayer = writable(0);

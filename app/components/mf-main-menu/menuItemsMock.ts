import { MenuItem } from './menuItem';

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, label: 'MOVIES', subItems: [
      {id: 11, label: "Pirati dei Caraibi - La vendetta di Salazar", subItems: []},
      {id: 12, label: "Miss Peregrine - La casa dei ragazzi speciali", subItems: []}] },
  { id: 2, label: 'PERSONAGGI', subItems: [
      {id: 21, label: "Jack Sparrow", subItems: []},
      {id: 22, label: "Miss Peregrine", subItems: []}
  ] },
  { id: 3, label: 'PRODOTTI', subItems: [
      {id: 31, label: "T-Shirts", subItems: []},
      {id: 32, label: "Mugs", subItems: []}
  ] },
  { id: 4, label: 'NOVITA\'', subItems: [] },
  { id: 5, label: 'OFFERTE SPECIALI', subItems: [] }
];
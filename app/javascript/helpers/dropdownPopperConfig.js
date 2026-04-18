// Shared Popper v2 options for react-bootstrap Dropdown.Menu.
// Fixes misaligned menus when ancestors use position:fixed, backdrop-filter,
// or other stacking contexts that break default absolute positioning.

export const fixedDropdownPopperConfig = {
  strategy: 'fixed',
  modifiers: [
    /* Extra vertical gap so the fixed navbar’s 1px border does not sit on the menu */
    { name: 'offset', options: { offset: [0, 14] } },
  ],
};

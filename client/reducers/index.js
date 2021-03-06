export function visibilityFilter(state = 'SHOW_OFTEN', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export function rhyme(state = '', action) {
  switch (action.type) {
    case 'SET_RHYME':
      return action.text;
    default:
      return state;
  }
}

export function recentRhymes(state = [], action) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return action.recentRhymes;
    default:
      return state;
  }
}

export function isLoading(state = false, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return true;
    case 'SET_RHYME':
      return true;
    case 'SET_CHARACTERS':
      return false;
    default:
      return state;
  }
}

export function characters(state = [], action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return [];
    case 'SET_RHYME':
      return [];
    case 'SET_CHARACTERS':
      return action.characters;
    default:
      return state;
  }
}

const createLinks = (teams) => {

  // 1. STATE
  let state = teams;

  // Cleanup - replace if exists
  const currentList = document.querySelector('#team-list-nav');
  if (currentList) currentList.remove();

  // 2. CREATE DOM (once) - In this case the root element
  const list = document.createElement('ul');
  list.id = 'team-list-nav';
  list.classList.add('team-links');

  // 3. RENDER (update DOM from state)
  const render = () => {
    for (let team of teams) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const span = document.createElement('span');

      // Styles from data
      li.style.backgroundColor = team.primary;
      a.style.color = team.secondary;

      // Content from data
      a.href = team.url;
      a.textContent = team.name;
      span.textContent = '[copy]'

      // 4. EVENTS (mutate state or trigger side effects)
      span.addEventListener('click', () => {
        navigator.clipboard.writeText(team.url);
      });

      li.append(a, span);
      list.append(li);
    }
  };

  // 5. INIT
  render();
  document.body.append(list);
}

const sportTeams = [
  {
    "name": "Brazil",
    "url": "https://en.wikipedia.org/wiki/Brazil_national_football_team",
    "primary": "#ffdf00",
    "secondary": "#009c3b"
  },
  {
    "name": "Netherlands",
    "url": "https://en.wikipedia.org/wiki/Netherlands_national_football_team",
    "primary": "#f36c21",
    "secondary": "#ffffff"
  }
]

createLinks(sportTeams);
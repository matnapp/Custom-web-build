const events = [
  {
    title: 'DIY Indie Night',
    copy:
      "An intimate lineup for the people who want their coffee shops to feel like record stores and their venues to feel like home.",
    points: [
      'Three local acts + one touring guest',
      'Doors at 6:30 PM, set starts at 7 PM',
      'Special drink drop inspired by the lineup',
    ],
  },
  {
    title: 'Writers & Open Mic',
    copy:
      'A slower midweek reset with notebooks, spoken word, stripped-back songs, and a room that actually listens.',
    points: [
      'Signups open 30 minutes before start time',
      'Featured reader plus community slots',
      'Tea-forward specials and pastry pairings',
    ],
  },
  {
    title: 'After Hours DJ Set',
    copy:
      'For the late crowd: a café floor transformed with deep cuts, colored light, and a little extra volume.',
    points: [
      'Rotating selectors from Dalton and Chattanooga',
      'Mocktail and cold brew specials all night',
      'Designed for a laid-back social crowd',
    ],
  },
];

const title = document.getElementById('event-title');
const copy = document.getElementById('event-copy');
const points = document.getElementById('event-points');
const items = document.querySelectorAll('.event-item');

function renderEvent(index) {
  const event = events[index];
  if (!event) return;

  title.textContent = event.title;
  copy.textContent = event.copy;
  points.innerHTML = event.points.map((point) => `<li>${point}</li>`).join('');

  items.forEach((item, itemIndex) => {
    item.classList.toggle('active', itemIndex === index);
  });
}

items.forEach((item) => {
  item.addEventListener('click', () => {
    renderEvent(Number(item.dataset.event));
  });
});

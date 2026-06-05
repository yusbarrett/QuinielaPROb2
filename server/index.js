const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let db;
function loadDB() {
  const raw = fs.readFileSync(path.join(__dirname, '..', 'data', 'db.json'), 'utf-8');
  db = JSON.parse(raw);
}
function saveDB() {
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'db.json'), JSON.stringify(db, null, 2));
}
loadDB();

app.get('/api/teams', (req, res) => {
  const { group } = req.query;
  let teams = db.teams;
  if (group) teams = teams.filter(t => t.group === group);
  res.json(teams);
});

app.get('/api/teams/:id', (req, res) => {
  const team = db.teams.find(t => t.id === req.params.id);
  if (!team) return res.status(404).json({ error: 'Team not found' });
  res.json(team);
});

app.get('/api/games', (req, res) => {
  const { group, matchday, date } = req.query;
  let games = db.games;
  if (group) games = games.filter(g => g.group === group);
  if (matchday) games = games.filter(g => g.matchday === parseInt(matchday));
  if (date) games = games.filter(g => g.date.startsWith(date));
  const enriched = games.map(g => ({
    ...g,
    homeTeam: db.teams.find(t => t.id === g.homeTeam),
    awayTeam: db.teams.find(t => t.id === g.awayTeam),
  }));
  res.json(enriched);
});

app.get('/api/games/:id', (req, res) => {
  const game = db.games.find(g => g.id === req.params.id);
  if (!game) return res.status(404).json({ error: 'Game not found' });
  res.json({ ...game, homeTeam: db.teams.find(t => t.id === game.homeTeam), awayTeam: db.teams.find(t => t.id === game.awayTeam) });
});

app.put('/api/games/:id', (req, res) => {
  const idx = db.games.findIndex(g => g.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Game not found' });
  db.games[idx] = { ...db.games[idx], ...req.body };
  saveDB();
  res.json(db.games[idx]);
});

app.get('/api/predictions', (req, res) => {
  const { userId, gameId } = req.query;
  let predictions = db.predictions;
  if (userId) predictions = predictions.filter(p => p.userId === userId);
  if (gameId) predictions = predictions.filter(p => p.gameId === gameId);
  const enriched = predictions.map(p => ({
    ...p,
    user: db.users.find(u => u.id === p.userId),
    game: db.games.find(g => g.id === p.gameId),
  }));
  res.json(enriched);
});

app.post('/api/predictions', (req, res) => {
  const { userId, gameId, homeScore, awayScore } = req.body;
  const existing = db.predictions.find(p => p.userId === userId && p.gameId === gameId);
  if (existing) {
    existing.homeScore = homeScore;
    existing.awayScore = awayScore;
    saveDB();
    return res.json(existing);
  }
  const prediction = { id: `p${Date.now()}`, userId, gameId, homeScore, awayScore, points: 0 };
  db.predictions.push(prediction);
  saveDB();
  res.status(201).json(prediction);
});

app.get('/api/rankings', (req, res) => {
  const rankings = db.users.map(user => {
    const userPredictions = db.predictions.filter(p => p.userId === user.id);
    const totalPoints = userPredictions.reduce((sum, p) => sum + p.points, 0);
    return { ...user, totalPoints, predictionsCount: userPredictions.length };
  }).sort((a, b) => b.totalPoints - a.totalPoints);
  res.json(rankings);
});

app.get('/api/users', (req, res) => {
  res.json(db.users);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

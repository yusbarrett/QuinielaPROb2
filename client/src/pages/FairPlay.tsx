import React from 'react';

const FairPlay: React.FC = () => {
  return (
    <div className="page">
      <h1 className="page-title">Fair Play</h1>
      <p className="page-subtitle">FIFA Fair Play Rules &amp; Regulations for the World Cup 2026</p>

      <div className="fair-play-section">
        <div className="fp-card">
          <h2>⚽ FIFA Fair Play Code</h2>
          <div className="fp-principles">
            <div className="fp-principle">
              <h3>1. Play Fair</h3>
              <p>Winning is without value if victory has been achieved unfairly or dishonestly. Cheating is easy but brings no pleasure. Playing fair requires courage and character, and gives more satisfaction.</p>
            </div>
            <div className="fp-principle">
              <h3>2. Play to Win but Accept Defeat with Dignity</h3>
              <p>Winning is the object of playing any game. Never set out to lose. If you do not play to win, you are cheating your opponents, deceiving those who are watching, and also fooling yourself. Never give up against stronger opponents, never relent against weaker ones.</p>
            </div>
            <div className="fp-principle">
              <h3>3. Observe the Laws of the Game</h3>
              <p>All games need rules to direct and control them. The rules of football are simple and easy to learn. Make an effort to understand them so you have a better understanding of the game. This makes you a better player and a better person.</p>
            </div>
            <div className="fp-principle">
              <h3>4. Respect Opponents, Teammates, Referees, Officials, and Spectators</h3>
              <p>Fair Play means respect. Without opponents there can be no game. They have the same rights as you, including the right to be respected. Teammates are your colleagues — you form a team and must be united. Referees are there to maintain discipline and fair play; always accept their decisions without arguing.</p>
            </div>
            <div className="fp-principle">
              <h3>5. Promote the Interests of Football</h3>
              <p>Think of football's interests before your own. Think of how your actions may affect the image of the game. Discuss with others and organize events that promote the beautiful game and its values.</p>
            </div>
            <div className="fp-principle">
              <h3>6. Honor Those Who Defend Football's Good Reputation</h3>
              <p>The good name of football has survived because the vast majority of people who love the game are honest and fair. The reputation of football must be honored and protected by all who practice it.</p>
            </div>
            <div className="fp-principle">
              <h3>7. Reject Corruption, Drugs, Racism, Violence, and All Dangers to the Game</h3>
              <p>Football's huge popularity makes it vulnerable to negative forces. Reject any attempt to corrupt the game through match-fixing, doping, racism, or violence. Report any suspicious activity.</p>
            </div>
            <div className="fp-principle">
              <h3>8. Help Others to Resist Corrupting Pressures</h3>
              <p>You may hear that teammates or other people you know are being tempted to cheat in some way. They need your help. Offer them your strength and support. Remind them of their commitment to their teammates and to the game itself.</p>
            </div>
          </div>
        </div>

        <div className="fp-card">
          <h2>📋 Fair Play Ranking (Tiebreaker)</h2>
          <p>In the World Cup group stage, if two or more teams are equal on points after all group matches, the following criteria are applied in order:</p>
          <ol className="fp-tiebreaker-list">
            <li>Superior goal difference in all group matches</li>
            <li>Greatest number of goals scored in all group matches</li>
            <li>Greatest number of points obtained in matches played between teams concerned</li>
            <li>Superior goal difference in matches played between teams concerned</li>
            <li>Greatest number of goals scored in matches played between teams concerned</li>
            <li><strong>Fair Play points:</strong> The team with the fewest negative points advances. Yellow card = -1 point, Indirect red card (two yellows) = -3 points, Direct red card = -4 points, Yellow + direct red card = -5 points</li>
            <li>Drawing of lots by FIFA</li>
          </ol>
        </div>

        <div className="fp-card">
          <h2>🟨 Discipline Rules</h2>
          <div className="discipline-rules">
            <div className="discipline-item">
              <span className="discipline-icon yellow">🟨</span>
              <div>
                <h4>Yellow Card</h4>
                <p>Caution for unsporting behavior, dissent, persistent fouling, delaying restart, or failing to respect distance on set pieces. Accumulation of 2 yellow cards in different matches = 1-match suspension.</p>
              </div>
            </div>
            <div className="discipline-item">
              <span className="discipline-icon red">🟥</span>
              <div>
                <h4>Red Card</h4>
                <p>Sending off for serious foul play, violent conduct, spitting, denying obvious goal-scoring opportunity, offensive language, or receiving a second yellow in the same match. Results in automatic 1-match minimum suspension.</p>
              </div>
            </div>
            <div className="discipline-item">
              <span className="discipline-icon var">📺</span>
              <div>
                <h4>VAR (Video Assistant Referee)</h4>
                <p>Used for goals, penalties, direct red cards, and mistaken identity. The on-field referee makes the final decision after reviewing the footage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairPlay;

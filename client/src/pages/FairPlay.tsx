import React from 'react';
import { useI18n } from '../i18n';

const FairPlay: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="page">
      <h1 className="page-title">{t.fairPlay.title}</h1>
      <p className="page-subtitle">{t.fairPlay.subtitle}</p>

      <div className="fair-play-section">
        <div className="fp-card">
          <h2>{t.fairPlay.codeTitle}</h2>
          <div className="fp-principles">
            {t.fairPlay.principles.map((principle, idx) => (
              <div key={idx} className="fp-principle">
                <h3>{principle.title}</h3>
                <p>{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fp-card">
          <h2>{t.fairPlay.tiebreakerTitle}</h2>
          <p>{t.fairPlay.tiebreakerIntro}</p>
          <ol className="fp-tiebreaker-list">
            {t.fairPlay.tiebreakerList.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ol>
        </div>

        <div className="fp-card">
          <h2>{t.fairPlay.disciplineTitle}</h2>
          <div className="discipline-rules">
            <div className="discipline-item">
              <span className="discipline-icon yellow">🟨</span>
              <div>
                <h4>{t.fairPlay.yellowCard}</h4>
                <p>{t.fairPlay.yellowCardDesc}</p>
              </div>
            </div>
            <div className="discipline-item">
              <span className="discipline-icon red">🟥</span>
              <div>
                <h4>{t.fairPlay.redCard}</h4>
                <p>{t.fairPlay.redCardDesc}</p>
              </div>
            </div>
            <div className="discipline-item">
              <span className="discipline-icon var">📺</span>
              <div>
                <h4>{t.fairPlay.var}</h4>
                <p>{t.fairPlay.varDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairPlay;

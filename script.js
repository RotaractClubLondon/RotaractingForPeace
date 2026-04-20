const pathwayForm = document.getElementById('pathwayForm');
const toolResult = document.getElementById('toolResult');

const sectorData = {
  'Health and care': {
    pathway: 'Target a structured route with clear role titles and clear evidence of qualification and registration status.',
    titles: 'Common titles may include care worker, support worker, registered nurse, allied health role or service coordinator.',
    barriers: 'Registration, right-to-work requirements, English confidence and role-specific compliance checks.',
    firstSteps: ['Check whether your role is regulated.', 'Prepare clear evidence of training and work history.', 'Look at employers who already recruit internationally.'],
    london: 'London has large demand but also a high cost of living. NHS trusts and major care providers can be key entry points.'
  },
  'Digital and tech': {
    pathway: 'Focus on skill proof, portfolio strength and role matching rather than title alone.',
    titles: 'Possible UK-facing titles include software developer, data analyst, product analyst, IT support specialist or project coordinator.',
    barriers: 'Weak CV wording, unclear project evidence and uncertainty about sponsorship.',
    firstSteps: ['Translate your experience into outcomes.', 'Prepare a short portfolio or project list.', 'Target roles that match your real level, not only your past title.'],
    london: 'London is one of the UK’s strongest tech markets, but competition is high.'
  },
  'Finance and professional services': {
    pathway: 'Aim for role families that match your technical and client-facing strengths.',
    titles: 'Possible matches include analyst, operations officer, finance assistant, risk analyst, compliance support or PMO role.',
    barriers: 'Title mismatch, local terminology and employer preference for UK market knowledge.',
    firstSteps: ['Use UK-friendly role names.', 'Show systems, reporting and stakeholder experience.', 'Be realistic about level on first entry.'],
    london: 'London is the strongest UK market for this sector.'
  },
  'Education': {
    pathway: 'Check early whether your target role needs formal recognition or local safeguarding checks.',
    titles: 'Possible routes include teaching assistant, tutor, learning support, school admin or qualified teacher pathway.',
    barriers: 'Regulation, local standards, safeguarding checks and employer confidence in overseas experience.',
    firstSteps: ['Check role regulation first.', 'Prepare clear examples of classroom or training experience.', 'Consider support roles if direct entry is difficult.'],
    london: 'London has strong education demand, but schools may vary widely in what they expect.'
  },
  'Hospitality': {
    pathway: 'Focus on practical experience, reliability and customer-facing strengths.',
    titles: 'Common titles include front-of-house, supervisor, chef, kitchen assistant, operations assistant or venue coordinator.',
    barriers: 'Lower sponsorship likelihood, shift expectations and high living costs in London.',
    firstSteps: ['Target employers by location and travel time.', 'Show fast-paced service experience.', 'Be realistic about pay versus living costs.'],
    london: 'London has many hospitality roles, but costs can reduce the benefit of low-paid entry routes.'
  },
  'Construction and infrastructure': {
    pathway: 'Map your technical experience carefully and check whether site or safety certificates are needed.',
    titles: 'Possible matches include site coordinator, technician, estimator, CAD support, project support or trade route.',
    barriers: 'Certificate needs, site access rules, title mismatch and experience translation.',
    firstSteps: ['Check what certificates are expected.', 'Translate tools, methods and project scale clearly.', 'Target employers based on your exact function, not only sector name.'],
    london: 'London has strong infrastructure and building activity, but role fit depends on your exact background.'
  }
};

function buildAdvice(values) {
  const sectorInfo = sectorData[values.sector] || {
    pathway: 'Use a broad route focused on skill translation and role matching.',
    titles: 'Focus on UK-facing titles that describe what you actually do.',
    barriers: 'Title mismatch, unclear experience and role fit questions.',
    firstSteps: ['Clarify your target role family.', 'Translate your CV into plain UK language.', 'Use realistic entry points.'],
    london: 'London may offer more openings, but it also brings more competition and cost.'
  };

  const expMap = {
    '0-2': 'You may need an entry or support route first.',
    '3-5': 'You have enough experience to target solid mid-level openings if your CV is clear.',
    '6-10': 'You may be experienced, but direct entry at the same seniority is not always immediate.',
    '10+': 'Strong experience can still require level adjustment if UK context is a key employer concern.'
  };

  let sponsorshipNote = values.sponsorship === 'Yes'
    ? 'You should prioritise employers and sectors where sponsorship is more common.'
    : values.sponsorship === 'No'
    ? 'You can focus more on role fit and employer demand than sponsorship filters.'
    : 'Check your route carefully so you understand whether sponsorship will matter.';

  let regulationNote = values.regulated === 'Yes'
    ? 'A regulated route may require registration, recognition or formal checks before full entry.'
    : values.regulated === 'Not sure'
    ? 'Check early whether your target role is regulated. This can save time.'
    : 'A non-regulated route may offer a faster starting point.';

  let englishNote = values.english === 'Needs support'
    ? 'Language confidence may be a barrier, especially for client-facing or regulated roles.'
    : values.english === 'Medium'
    ? 'Keep building work-focused English and interview confidence.'
    : 'Strong English confidence can help reduce one major barrier.';

  let locationNote = values.location === 'Outside the UK'
    ? 'As you are outside the UK, it helps to target roles with clear entry steps and simple evidence requirements.'
    : 'As you are already in the UK, use local networking, short courses and employer contact more actively.';

  const origin = values.origin ? `You entered <strong>${values.origin}</strong> as your qualification context. Later versions can provide more country-specific notes.` : 'Later versions can add stronger country-specific guidance.';

  return `
    <h2>Likely pathway</h2>
    <p>${sectorInfo.pathway}</p>
    <div class="result-grid">
      <div class="result-item"><strong>Experience level</strong><br>${expMap[values.experience] || ''}</div>
      <div class="result-item"><strong>London view</strong><br>${sectorInfo.london}</div>
      <div class="result-item"><strong>Sponsorship</strong><br>${sponsorshipNote}</div>
      <div class="result-item"><strong>Regulation</strong><br>${regulationNote}</div>
    </div>
    <section style="margin-top:16px;">
      <h3>How your experience may translate</h3>
      <p>${sectorInfo.titles}</p>
    </section>
    <section>
      <h3>Main barriers to watch</h3>
      <p>${sectorInfo.barriers} ${englishNote}</p>
    </section>
    <section>
      <h3>First steps</h3>
      <ul class="quick-list">
        ${sectorInfo.firstSteps.map(step => `<li>${step}</li>`).join('')}
        <li>${locationNote}</li>
      </ul>
    </section>
    <section>
      <h3>Qualification context</h3>
      <p>${origin}</p>
    </section>
    <section class="callout">
      <strong>Next pages to read:</strong><br>
      <a href="working-in-uk.html">Working in the UK</a> ·
      <a href="sectors.html">Sectors in demand</a> ·
      <a href="disclaimer.html">Disclaimer</a>
    </section>
  `;
}

if (pathwayForm && toolResult) {
  pathwayForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = {
      sector: document.getElementById('sector').value,
      origin: document.getElementById('origin').value.trim(),
      experience: document.getElementById('experience').value,
      level: document.getElementById('level').value,
      sponsorship: document.getElementById('sponsorship').value,
      regulated: document.getElementById('regulated').value,
      location: document.getElementById('location').value,
      english: document.getElementById('english').value,
    };

    if (!values.sector) {
      toolResult.innerHTML = '<h2>Please choose a sector</h2><p class="small">The prototype needs a sector to show a pathway suggestion.</p>';
      return;
    }

    toolResult.innerHTML = buildAdvice(values);
  });
}

// Argentina World Cup 2026 - Dynamic Pitch View

const ratingSources = {
    goal: 'Goal.com'
};

const matchData = {
    1: { opponent: 'Argelia', code: 'ALG', score: '3-0', date: '17 Jun', stage: 'Grupo J', venue: 'Arrowhead Stadium, Kansas City', goals: 'Messi 17\', 60\', 76\'', formation: '4-4-2' },
    2: { opponent: 'Austria', code: 'AUT', score: '2-0', date: '22 Jun', stage: 'Grupo J', venue: 'Dallas Stadium, Dallas', goals: 'Messi 38\', 90+5\'', formation: '4-4-2' },
    3: { opponent: 'Jordania', code: 'JOR', score: '3-1', date: '27 Jun', stage: 'Grupo J', venue: 'AT&T Stadium, Dallas', goals: 'Lo Celso 19\', L. Martínez 33\' (pen), Messi 83\'', formation: '4-4-2' },
    4: { opponent: 'Cabo Verde', code: 'CPV', score: '3-2 (prórroga)', date: '3 Jul', stage: 'Dieciseisavos', venue: 'Hard Rock Stadium, Miami', goals: 'Messi 29\', L. Martínez 92\', Borges 111\' (og)', formation: '4-4-2' },
    5: { opponent: 'Egipto', code: 'EGY', score: '3-2', date: '7 Jul', stage: 'Octavos', venue: 'Mercedes-Benz Stadium, Atlanta', goals: 'Romero 79\', Messi 84\', Enzo 93\'', formation: '4-4-2' }
};

const lineups = {
    1: [
        [1,  'GK',  50, 89],
        [9,  'RD',  82, 74],
        [5,  'CD',  62, 77],
        [6,  'CD',  38, 77],
        [7,  'LD',  18, 74],
        [12, 'MC',  60, 54],
        [13, 'MC',  40, 54],
        [15, 'MD',  78, 42],
        [14, 'MI',  22, 42],
        [19, 'DC',  58, 26],
        [20, 'DC',  42, 26]
    ],
    2: [
        [1,  'GK',  50, 89],
        [4,  'RD',  82, 74],
        [5,  'CD',  62, 77],
        [6,  'CD',  38, 77],
        [7,  'LD',  18, 74],
        [12, 'MC',  60, 54],
        [13, 'MC',  40, 54],
        [15, 'MD',  78, 42],
        [14, 'MI',  22, 42],
        [19, 'DC',  58, 26],
        [20, 'DC',  42, 26]
    ],
    3: [
        [1,  'GK',  50, 89],
        [18, 'RD',  82, 74],
        [8,  'CD',  62, 77],
        [11, 'CD',  38, 77],
        [10, 'LD',  18, 74],
        [23, 'MC',  60, 54],
        [16, 'MC',  40, 54],
        [25, 'MD',  78, 42],
        [17, 'MI',  22, 42],
        [21, 'DC',  58, 26],
        [20, 'DC',  42, 26]
    ],
    4: [
        [1,  'GK',  50, 89],
        [4,  'RD',  82, 74],
        [5,  'CD',  62, 77],
        [6,  'CD',  38, 77],
        [7,  'LD',  18, 74],
        [12, 'MC',  60, 54],
        [13, 'MC',  40, 54],
        [15, 'MD',  78, 42],
        [14, 'MI',  22, 42],
        [19, 'DC',  58, 26],
        [20, 'DC',  42, 26]
    ],
    5: [
        [1,  'GK',  50, 89],
        [4,  'RD',  82, 74],
        [5,  'CD',  62, 77],
        [6,  'CD',  38, 77],
        [10, 'LD',  18, 74],
        [16, 'MC',  60, 54],
        [12, 'MC',  40, 54],
        [14, 'MD',  78, 42],
        [13, 'MI',  22, 42],
        [19, 'DC',  58, 26],
        [21, 'DC',  42, 26]
    ]
};

const substitutions = {
    1: [[4, 9, 46], [22, 20, 55], [8, 5, 80], [23, 19, 80]],
    2: [[22, 20, 60], [8, 5, 57], [10, 7, 82], [16, 12, 82]],
    3: [[14, 23, 60], [15, 17, 60], [19, 20, 60], [24, 25, 71], [20, 21, 82]],
    4: [[22, 20, 63], [16, 12, 84], [10, 7, 85], [9, 4, 104]],
    5: [[22, 10, 66], [20, 12, 66], [9, 4, 73], [8, 21, 90], [7, 10, 90]]
};

const players = {
    1: { name: 'Emiliano Martínez', short: 'Dibu', num: 23, pos: 'GK', club: 'Aston Villa', ratings: {
        1: { goal: 7 },
        2: { goal: 6 },
        3: { goal: 6 },
        4: { goal: 7 },
        5: { goal: 5 }
    }, stats: { 1: {paradas:2}, 2: {paradas:1}, 3: {paradas:1}, 4: {paradas:4}, 5: {paradas:0} } },
    2: { name: 'Juan Musso', short: 'Musso', num: 1, pos: 'GK', club: 'Atlético Madrid', ratings: {}, stats: {} },
    3: { name: 'Gerónimo Rulli', short: 'Rulli', num: 12, pos: 'GK', club: 'Marseille', ratings: {}, stats: {} },
    4: { name: 'Nahuel Molina', short: 'Molina', num: 26, pos: 'DF', club: 'Atlético Madrid', ratings: {
        1: { goal: 7 },
        2: { goal: 6 },
        4: { goal: 6 },
        5: { goal: 5 }
    }, stats: { 1: {entradas:3}, 2: {entradas:4}, 4: {entradas:2}, 5: {entradas:3} } },
    5: { name: 'Cristian Romero', short: 'Cuti', num: 13, pos: 'DF', club: 'Tottenham', ratings: {
        1: { goal: 7 },
        2: { goal: 6 },
        4: { goal: 8 },
        5: { goal: 6 }
    }, stats: { 1: {entradas:5}, 2: {entradas:4}, 4: {entradas:6, goles:1}, 5: {entradas:5, goles:1} } },
    6: { name: 'Lisandro Martínez', short: 'Licha', num: 25, pos: 'DF', club: 'Man United', ratings: {
        1: { goal: 8 },
        2: { goal: 7 },
        4: { goal: 7 },
        5: { goal: 4 }
    }, stats: { 1: {entradas:4}, 2: {entradas:5}, 4: {goles:1, asist:1, entradas:3}, 5: {entradas:4} } },
    7: { name: 'Facundo Medina', short: 'Medina', num: 19, pos: 'DF', club: 'Marseille', ratings: {
        1: { goal: 7 },
        2: { goal: 7 },
        4: { goal: 6 }
    }, stats: { 1: {entradas:3}, 2: {asist:1, entradas:4}, 4: {entradas:3} } },
    8: { name: 'Nicolás Otamendi', short: 'Otamendi', num: 17, pos: 'DF', club: 'Benfica', ratings: {
        1: { goal: 6 },
        2: { goal: 6 },
        3: { goal: 6 }
    }, stats: { 1: {entradas:2}, 2: {entradas:3}, 3: {entradas:3} } },
    9: { name: 'Gonzalo Montiel', short: 'Montiel', num: 4, pos: 'DF', club: 'River Plate', ratings: {
        1: { goal: 6 },
        5: { goal: 6 }
    }, stats: { 1: {entradas:2}, 5: {asist:1, entradas:2} } },
    10: { name: 'Nicolás Tagliafico', short: 'Tagliafico', num: 3, pos: 'DF', club: 'Lyon', ratings: {
        3: { goal: 6 },
        5: { goal: 6 }
    }, stats: { 3: {entradas:2}, 5: {entradas:2} } },
    11: { name: 'Marcos Senesi', short: 'Senesi', num: 6, pos: 'DF', club: 'Tottenham', ratings: {
        3: { goal: 7 }
    }, stats: { 3: {entradas:3} } },
    12: { name: 'Rodrigo De Paul', short: 'De Paul', num: 7, pos: 'MF', club: 'Atlético Madrid', ratings: {
        1: { goal: 8 },
        2: { goal: 7 },
        4: { goal: 6 },
        5: { goal: 2 }
    }, stats: { 1: {asist:1, entradas:4}, 2: {entradas:5}, 4: {entradas:3}, 5: {entradas:2} } },
    13: { name: 'Enzo Fernández', short: 'Enzo', num: 24, pos: 'MF', club: 'Chelsea', ratings: {
        1: { goal: 7 },
        2: { goal: 6 },
        4: { goal: 4 },
        5: { goal: 6 }
    }, stats: { 1: {pases:62}, 2: {pases:58}, 4: {tiros:4, pases:68}, 5: {goles:1, pases:55} } },
    14: { name: 'Alexis Mac Allister', short: 'Mac Allister', num: 20, pos: 'MF', club: 'Liverpool', ratings: {
        1: { goal: 7 },
        2: { goal: 7 },
        4: { goal: 5 },
        5: { goal: 4 }
    }, stats: { 1: {pases:55}, 2: {pases:52}, 4: {asist:1, pases:62}, 5: {pases:48} } },
    15: { name: 'Thiago Almada', short: 'Almada', num: 16, pos: 'MF', club: 'Atlético Madrid', ratings: {
        1: { goal: 6 },
        2: { goal: 7 },
        4: { goal: 5 }
    }, stats: { 1: {pases:32}, 2: {pases:28}, 4: {pases:35} } },
    16: { name: 'Leandro Paredes', short: 'Paredes', num: 5, pos: 'MF', club: 'Roma', ratings: {
        3: { goal: 6 },
        4: { goal: 5 },
        5: { goal: 5 }
    }, stats: { 3: {pases:25}, 4: {}, 5: {pases:40} } },
    17: { name: 'Giovani Lo Celso', short: 'Lo Celso', num: 11, pos: 'MF', club: 'Real Betis', ratings: {
        3: { goal: 8 }
    }, stats: { 3: {goles:1, pases:35} } },
    18: { name: 'Exequiel Palacios', short: 'Palacios', num: 14, pos: 'MF', club: 'Bayer Leverkusen', ratings: {
        3: { goal: 8 }
    }, stats: { 3: {pases:42} } },
    19: { name: 'Lionel Messi', short: 'Messi', num: 10, pos: 'FW', club: 'Inter Miami', ratings: {
        1: { goal: 10 },
        2: { goal: 8 },
        3: { goal: 9 },
        4: { goal: 8 },
        5: { goal: 8 }
    }, stats: { 1: {goles:3, tiros:5}, 2: {goles:2, tiros:4}, 3: {goles:1, tiros:3}, 4: {goles:1, tiros:6}, 5: {goles:1, tiros:5} } },
    20: { name: 'Lautaro Martínez', short: 'Lautaro', num: 9, pos: 'FW', club: 'Inter Milan', ratings: {
        1: { goal: 5 },
        2: { goal: 6 },
        3: { goal: 8 },
        4: { goal: 5 },
        5: { goal: 7 }
    }, stats: { 1: {tiros:2}, 2: {tiros:1}, 3: {goles:1, tiros:2}, 4: {tiros:2}, 5: {asist:1, tiros:2} } },
    21: { name: 'Julián Álvarez', short: 'Julián', num: 22, pos: 'FW', club: 'Man City', ratings: {
        1: { goal: 5 },
        2: { goal: 5 },
        3: { goal: 5 },
        4: { goal: 6 },
        5: { goal: 5 }
    }, stats: { 1: {tiros:1}, 2: {}, 3: {tiros:2}, 4: {}, 5: {tiros:3} } },
    22: { name: 'Nicolás González', short: 'Nico G.', num: 15, pos: 'FW', club: 'Juventus', ratings: {
        1: { goal: 7 },
        2: { goal: 6 },
        4: { goal: 7 },
        5: { goal: 6 }
    }, stats: { 1: {asist:1}, 2: {tiros:2}, 4: {tiros:1}, 5: {} } },
    23: { name: 'Nico Paz', short: 'Nico Paz', num: 18, pos: 'MF', club: 'Como', ratings: {
        1: { goal: 6 },
        3: { goal: 7 }
    }, stats: { 1: {pases:12}, 3: {pases:28} } },
    24: { name: 'Valentín Barco', short: 'Barco', num: 8, pos: 'MF', club: 'Strasbourg', ratings: {
        3: { goal: 6 }
    }, stats: { 3: {pases:15} } },
    25: { name: 'Giuliano Simeone', short: 'G. Simeone', num: 21, pos: 'MF', club: 'Atlético Madrid', ratings: {
        3: { goal: 6 }
    }, stats: { 3: {pases:20} } }
};

let currentMatch = 1;
let currentFilter = 'all';

function getRatingClass(r) {
    if (r === null || r === undefined) return 'rating-na';
    if (r >= 8.0) return 'rating-excellent';
    if (r >= 7.0) return 'rating-good';
    if (r >= 6.0) return 'rating-average';
    return 'rating-poor';
}

function getAverageRating(ratings, matchId) {
    if (!ratings || !ratings[matchId]) return null;
    const matchRatings = ratings[matchId];
    if (matchRatings.goal !== undefined) return matchRatings.goal;
    return null;
}

function getRatingSources(ratings, matchId) {
    if (!ratings || !ratings[matchId]) return [];
    const matchRatings = ratings[matchId];
    const sources = [];
    Object.keys(matchRatings).forEach(key => {
        if (key !== 'average' && matchRatings[key] !== null && matchRatings[key] !== undefined) {
            sources.push({
                source: ratingSources[key] || key,
                rating: matchRatings[key]
            });
        }
    });
    return sources;
}

function getShirtClass(pos) {
    if (pos === 'GK') return 'shirt-gk';
    if (pos === 'DF') return 'shirt-def';
    if (pos === 'MF') return 'shirt-mid';
    return 'shirt-fwd';
}

function getPlayersInMatch(matchId) {
    const lineup = lineups[matchId] || [];
    const lineupPlayerIds = lineup.map(l => l[0]);
    const subbedIn = (substitutions[matchId] || []).map(s => s[1]);

    const titulares = lineup.map(([id, posLabel, left, top]) => ({
        ...players[id],
        id,
        posLabel,
        left,
        top,
        isStarter: true,
        rating: getAverageRating(players[id].ratings, matchId),
        matchStats: players[id].stats[matchId] || {}
    }));

    const benchIds = Object.keys(players).map(Number).filter(id =>
        !lineupPlayerIds.includes(id) && players[id].ratings[matchId] !== undefined
    );

    const suplentes = benchIds.map(id => {
        const isSubIn = subbedIn.includes(id);
        return {
            ...players[id],
            id,
            isStarter: false,
            isSubIn,
            rating: getAverageRating(players[id].ratings, matchId),
            matchStats: players[id].stats[matchId] || {}
        };
    });

    return { titulares, suplentes };
}

function init() {
    renderAll();
    setupEvents();
}

function renderAll() {
    renderPitch();
    renderBench();
    renderTopPlayers();
    updateSummary();
    renderChart();
}

function renderPitch() {
    const container = document.getElementById('playersOnPitch');
    const { titulares } = getPlayersInMatch(currentMatch);

    const visible = currentFilter === 'all' ? titulares :
        currentFilter === 'titular' ? titulares.filter(t => t.isStarter) : [];

    container.innerHTML = visible.map(p => {
        const rc = getRatingClass(p.rating);
        const sc = getShirtClass(p.pos);
        const sources = getRatingSources(players[p.id].ratings, currentMatch);
        const sourcesText = sources.map(s => `${s.source}: ${s.rating}`).join(', ');
        return `
            <div class="player-on-pitch" style="left:${p.left}%;top:${p.top}%;" data-id="${p.id}" title="${sourcesText}">
                <div class="player-marker">
                    <div class="player-shirt ${sc}">
                        ${p.num}
                        <span class="player-rating-badge ${rc}">${p.rating !== null ? p.rating.toFixed(1) : '-'}</span>
                    </div>
                    <span class="player-name-label">${p.short}</span>
                    <span class="player-position-label">${p.posLabel}</span>
                </div>
            </div>`;
    }).join('');

    container.querySelectorAll('.player-on-pitch').forEach(el => {
        el.addEventListener('click', () => showDetail(parseInt(el.dataset.id)));
    });
}

function renderBench() {
    const container = document.getElementById('benchPlayers');
    const { suplentes } = getPlayersInMatch(currentMatch);

    const visible = currentFilter === 'all' ? suplentes :
        currentFilter === 'suplente' ? suplentes : [];

    container.innerHTML = visible.map(p => {
        const rc = getRatingClass(p.rating);
        const sc = getShirtClass(p.pos);
        const subLabel = p.isSubIn ? '<span class="sub-in">ENTRÓ</span>' : '';
        const sources = getRatingSources(players[p.id].ratings, currentMatch);
        const sourcesText = sources.map(s => `${s.source}: ${s.rating}`).join(', ');
        return `
            <div class="bench-player" data-id="${p.id}" title="${sourcesText}">
                <div class="bench-player-number ${sc}">${p.num}</div>
                <div class="bench-player-info">
                    <div class="bench-player-name">${p.short} ${subLabel}</div>
                    <div class="bench-player-pos">${p.pos}</div>
                </div>
                <span class="bench-player-rating ${rc}">${p.rating !== null ? p.rating.toFixed(1) : '-'}</span>
            </div>`;
    }).join('');

    container.querySelectorAll('.bench-player').forEach(el => {
        el.addEventListener('click', () => showDetail(parseInt(el.dataset.id)));
    });
}

function showDetail(id) {
    const p = players[id];
    if (!p) return;
    const panel = document.getElementById('playerDetail');
    const content = document.getElementById('detailContent');
    const sc = getShirtClass(p.pos);

    const avg = getAverageRating(p.ratings, currentMatch);
    const sources = getRatingSources(p.ratings, currentMatch);
    const d = matchData[currentMatch];

    const sourcesList = sources.map(s => `
        <div class="detail-source-item">
            <span class="detail-source-name">${s.source}</span>
            <span class="detail-source-rating">${s.rating.toFixed(1)}</span>
        </div>
    `).join('');

    const ratingHtml = `
        <div class="detail-rating-main">
            <span class="detail-rating-opponent">vs ${d.code}</span>
            <span class="detail-rating-value ${getRatingClass(avg)}">${avg !== null ? avg.toFixed(1) : '-'}</span>
        </div>
        ${sources.length > 0 ? `<div class="detail-rating-sources">${sourcesList}</div>` : ''}
    `;

    const stats = p.stats[currentMatch] || {};
    const statsKeys = Object.keys(stats);
    const statsHtml = statsKeys.length > 0 ? `
        <div class="detail-stats-title">Stats vs ${d.code}</div>
        <div class="detail-stats-grid">
            ${stats.goles !== undefined ? `<div class="detail-stat"><span class="detail-stat-value">${stats.goles}</span><span class="detail-stat-label">Goles</span></div>` : ''}
            ${stats.asist !== undefined ? `<div class="detail-stat"><span class="detail-stat-value">${stats.asist}</span><span class="detail-stat-label">Asist.</span></div>` : ''}
            ${stats.paradas !== undefined ? `<div class="detail-stat"><span class="detail-stat-value">${stats.paradas}</span><span class="detail-stat-label">Paradas</span></div>` : ''}
            ${stats.entradas !== undefined ? `<div class="detail-stat"><span class="detail-stat-value">${stats.entradas}</span><span class="detail-stat-label">Entradas</span></div>` : ''}
            ${stats.tiros !== undefined ? `<div class="detail-stat"><span class="detail-stat-value">${stats.tiros}</span><span class="detail-stat-label">Tiros</span></div>` : ''}
            ${stats.pases !== undefined ? `<div class="detail-stat"><span class="detail-stat-value">${stats.pases}</span><span class="detail-stat-label">Pases</span></div>` : ''}
        </div>` : '<p style="color:var(--text-secondary);font-size:0.75rem;margin-top:8px;">Sin estadísticas</p>';

    content.innerHTML = `
        <div class="detail-header">
            <div class="detail-shirt ${sc}">${p.num}</div>
            <div><div class="detail-name">${p.name}</div><div class="detail-club">${p.club}</div></div>
        </div>
        <div class="detail-ratings-title">Calificación</div>
        ${ratingHtml}
        ${statsHtml}`;

    panel.style.display = 'block';
}

function renderTopPlayers() {
    const all = [];
    Object.keys(players).forEach(id => {
        const p = players[id];
        [1,2,3,4,5].forEach(m => {
            const avg = getAverageRating(p.ratings, m);
            if (avg !== null && avg !== undefined) {
                all.push({ name: p.short, rating: avg, match: matchData[m].code });
            }
        });
    });
    all.sort((a, b) => b.rating - a.rating);
    const top5 = all.slice(0, 5);

    document.getElementById('topPlayers').innerHTML = top5.map((item, i) => {
        const mc = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
        const rank = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i+1}`;
        return `<div class="top-player-card ${mc}"><div class="top-rank">${rank}</div><p class="top-player-name">${item.name}</p><p class="top-player-rating">${item.rating.toFixed(1)}</p><p class="top-player-match">vs ${item.match}</p></div>`;
    }).join('');
}

function updateSummary() {
    const m = matchData[currentMatch];
    const [home, away] = m.score.split('-');
    document.querySelector('.score-display').innerHTML = `
        <span class="score-team">ARG</span>
        <span class="score-number">${home}</span>
        <span class="score-divider">-</span>
        <span class="score-number">${away.split(' ')[0]}</span>
        <span class="score-team">${m.code}</span>`;
    document.querySelector('.match-details').innerHTML = `
        <p><strong>${m.venue}</strong></p>
        <p>${m.date} · ${m.stage} · ${m.formation}</p>
        <p><strong>Goles:</strong> ${m.goals}</p>`;
}

function renderChart() {
    const canvas = document.getElementById('averagesChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = canvas.parentElement.offsetWidth - 40;
    const H = canvas.height = 220;

    const avgs = [1,2,3,4,5].map(m => {
        const lineup = lineups[m] || [];
        const ratings = lineup.map(([id]) => getAverageRating(players[id].ratings, m)).filter(r => r !== null && r !== undefined);
        return ratings.length ? ratings.reduce((a,b) => a+b, 0) / ratings.length : 0;
    });

    const pad = { t: 25, r: 20, b: 40, l: 45 };
    const cW = W - pad.l - pad.r;
    const cH = H - pad.t - pad.b;
    const bW = cW / 5 - 10;

    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    for (let i = 0; i <= 10; i++) {
        const y = pad.t + (cH / 10) * (10 - i);
        ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
        ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '10px Inter'; ctx.textAlign = 'right';
        ctx.fillText(i.toFixed(0), pad.l - 6, y + 3);
    }

    const colors = ['#75aadb', '#f4d03f', '#27ae60', '#e74c3c', '#9b59b6'];
    const labels = ['vs ALG', 'vs AUT', 'vs JOR', 'vs CPV', 'vs EGY'];

    avgs.forEach((avg, i) => {
        const x = pad.l + (cW / 5) * i + 5;
        const bH = (avg / 10) * cH;
        const y = pad.t + cH - bH;

        const grad = ctx.createLinearGradient(x, y, x, pad.t + cH);
        grad.addColorStop(0, colors[i]); grad.addColorStop(1, colors[i] + '30');
        ctx.fillStyle = grad;
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, bW, bH, [5, 5, 0, 0]);
        else ctx.rect(x, y, bW, bH);
        ctx.fill();

        ctx.fillStyle = '#fff'; ctx.font = 'bold 11px Inter'; ctx.textAlign = 'center';
        ctx.fillText(avg.toFixed(1), x + bW / 2, y - 6);
        ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = '10px Inter';
        ctx.fillText(labels[i], x + bW / 2, H - 10);
    });

    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.font = 'bold 12px Inter'; ctx.textAlign = 'center';
    ctx.fillText('Promedio Titulares por Partido', W / 2, 14);
}

function setupEvents() {
    document.querySelectorAll('.match-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.match-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentMatch = parseInt(tab.dataset.match);
            renderAll();
        });
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderPitch();
            renderBench();
        });
    });

    document.getElementById('closeDetail').addEventListener('click', () => {
        document.getElementById('playerDetail').style.display = 'none';
    });

    document.addEventListener('click', e => {
        const panel = document.getElementById('playerDetail');
        if (panel.style.display === 'block' && !panel.contains(e.target) && !e.target.closest('.player-on-pitch') && !e.target.closest('.bench-player')) {
            panel.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    setTimeout(renderChart, 100);
});
window.addEventListener('resize', renderChart);

import { NewsData, LaunchItem } from './types';

const INITIAL_LAUNCHES: LaunchItem[] = [
  {
    id: 'l1',
    title: 'Artemis II: Flyby Mission',
    description: 'The first crewed mission of the Artemis program sending four astronauts around the Moon.',
    thumbnailUrl: 'https://images-assets.nasa.gov/image/artemis-ii-map/artemis-ii-map~orig.jpg',
    videoUrl: 'https://www.youtube.com/results?search_query=Artemis+II+Mission+Trailer',
    category: 'Mission',
    date: 'Sept 2025',
    agency: 'NASA'
  },
  {
    id: 'l2',
    title: 'Starship Orbital Refueling Test',
    description: 'Critical demonstration of propellant transfer in orbit for deep space missions.',
    thumbnailUrl: 'https://img.youtube.com/vi/-Oox2w5sMcA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=-Oox2w5sMcA',
    category: 'Mission',
    date: 'Late 2025',
    agency: 'SpaceX'
  },
  {
    id: 'l3',
    title: 'Gaganyaan H1',
    description: 'India\'s first crewed spaceflight mission carrying astronauts to LEO.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/results?search_query=Gaganyaan+Mission+ISRO',
    category: 'Mission',
    date: '2025',
    agency: 'ISRO'
  },
  {
    id: 'l4',
    title: 'Chang\'e 7 Lunar South Pole',
    description: 'Robotic mission to explore the lunar south pole for resources.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/results?search_query=Chang%27e+7+mission',
    category: 'Probe',
    date: '2026',
    agency: 'CNSA'
  },
  {
    id: 'l5',
    title: 'Venera-D Venus Orbiter',
    description: 'Proposed Russian orbiter and lander mission to Venus.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1614728853980-6043080c3f5e?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/results?search_query=Venera-D+mission',
    category: 'Probe',
    date: '2026',
    agency: 'Roscosmos'
  }
];

export const INITIAL_NEWS_DATA: NewsData = {
  nasa: [
    {
      id: 'n1',
      title: 'Artemis III Landing Site Selection',
      summary: 'NASA narrows down potential landing regions near the lunar South Pole for the first human landing since Apollo.',
      date: 'Aug 2025',
      url: 'https://www.google.com/search?q=Artemis+III+Landing+Site+Selection'
    },
    {
      id: 'n2',
      title: 'Roman Space Telescope Assembly',
      summary: 'Final integration of the Nancy Grace Roman Space Telescope begins ahead of its 2027 launch.',
      date: 'Oct 2025',
      url: 'https://www.google.com/search?q=Roman+Space+Telescope+Assembly'
    },
    {
      id: 'n3',
      title: 'Gateway Station Module Launch',
      summary: 'The first components of the lunar Gateway space station prepare for launch on a Falcon Heavy.',
      date: 'Late 2025',
      url: 'https://www.google.com/search?q=Gateway+Station+Module+Launch'
    }
  ],
  esa: [
    {
      id: 'e1',
      title: 'Ariane 6 Commercial Operations',
      summary: 'ESA\'s heavy-lift launcher enters full commercial service with multiple satellite deployments.',
      date: 'July 2025',
      url: 'https://www.google.com/search?q=Ariane+6+Commercial+Operations'
    },
    {
      id: 'e2',
      title: 'PLATO Mission Preparations',
      summary: 'ESA\'s exoplanet hunter PLATO completes critical design review.',
      date: 'Nov 2025',
      url: 'https://www.google.com/search?q=PLATO+Mission+Preparations'
    },
    {
      id: 'e3',
      title: 'Argonaut Lunar Lander',
      summary: 'ESA advances development of the Argonaut heavy cargo lander for lunar logistics.',
      date: 'Jan 2026',
      url: 'https://www.google.com/search?q=Argonaut+Lunar+Lander+ESA'
    }
  ],
  jaxa: [
    {
      id: 'j1',
      title: 'MMX Martian Moons Exploration',
      summary: 'JAXA prepares to launch the MMX probe to return samples from Phobos.',
      date: 'Sept 2026',
      url: 'https://www.google.com/search?q=MMX+Martian+Moons+Exploration'
    },
    {
      id: 'j2',
      title: 'H3 Rocket Upgrades',
      summary: 'Japan\'s H3 rocket receives performance upgrades for heavier payloads.',
      date: 'Mid 2025',
      url: 'https://www.google.com/search?q=H3+Rocket+Upgrades'
    }
  ],
  isro: [
    {
      id: 'i1',
      title: 'Bharatiya Antariksha Station',
      summary: 'ISRO reveals final designs for the first module of the Indian Space Station.',
      date: 'Dec 2025',
      url: 'https://www.google.com/search?q=Bharatiya+Antariksha+Station'
    },
    {
      id: 'i2',
      title: 'Chandrayaan-4 Sample Return',
      summary: 'Mission definition finalized for a complex lunar sample return mission.',
      date: 'Early 2026',
      url: 'https://www.google.com/search?q=Chandrayaan-4+Sample+Return'
    }
  ],
  cnsa: [
    {
      id: 'c1',
      title: 'Tiangong Station Expansion',
      summary: 'China launches expansion modules to double the size of the Tiangong space station.',
      date: 'Late 2025',
      url: 'https://www.google.com/search?q=Tiangong+Station+Expansion'
    },
    {
      id: 'c2',
      title: 'Tianwen-2 Asteroid Mission',
      summary: 'Launch of the Tianwen-2 mission to collect samples from asteroid 469219 Kamoʻoalewa.',
      date: 'May 2025',
      url: 'https://www.google.com/search?q=Tianwen-2+Asteroid+Mission'
    }
  ],
  roscosmos: [
    {
      id: 'r1',
      title: 'Orel Spacecraft Tests',
      summary: 'Initial flight tests for the new Orel crewed spacecraft.',
      date: '2025',
      url: 'https://www.google.com/search?q=Orel+Spacecraft+Tests'
    },
    {
      id: 'r2',
      title: 'Ross Station Module',
      summary: 'Development updates on the proposed Russian Orbital Service Station (ROSS).',
      date: '2026',
      url: 'https://www.google.com/search?q=ROSS+Station+Module'
    }
  ],
  csa: [
    {
      id: 'ca1',
      title: 'Canadarm3 Delivery',
      summary: 'Components of the AI-enabled Canadarm3 are prepared for the Lunar Gateway.',
      date: '2026',
      url: 'https://www.google.com/search?q=Canadarm3+Delivery'
    },
    {
      id: 'ca2',
      title: 'Lunar Rover Selection',
      summary: 'CSA selects the final design for Canada\'s first lunar rover.',
      date: 'Late 2025',
      url: 'https://www.google.com/search?q=CSA+Lunar+Rover+Selection'
    }
  ],
  spacex: [
    {
      id: 's1',
      title: 'Starship Moon Landing Demo',
      summary: 'Uncrewed Starship demonstration landing on the lunar surface for Artemis.',
      date: '2026',
      url: 'https://www.google.com/search?q=Starship+Moon+Landing+Demo'
    },
    {
      id: 's2',
      title: 'Polaris Dawn Follow-up',
      summary: 'New private astronaut missions announced under the Polaris program.',
      date: 'Mid 2025',
      url: 'https://www.google.com/search?q=Polaris+Program+Missions'
    }
  ],
  launches: INITIAL_LAUNCHES
};
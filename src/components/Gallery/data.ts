export interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'team-vibes' | 'creative-campaigns' | 'work-play' | 'behind-scenes';
  tags: string[];
  width: number;
  height: number;
}

// Using Pexels photos as required in technology preferences
export const photos: Photo[] = [
  {
    id: 1,
    src: "https://www.collegetips.in/images/header-image-1.jpg",
    alt: "Students collaborating on a project",
    title: "Brainstorming Session",
    description: "Our team putting their heads together to create amazing campaigns for college students.",
    category: "team-vibes",
    tags: ["teamwork", "collaboration", "creativity"],
    width: 4,
    height: 3
  },
  {
    id: 2,
    src: "https://www.collegetips.in/images/header-image-2.jpg",
    alt: "Creative campaign planning",
    title: "Campaign Planning",
    description: "Developing innovative marketing strategies to engage with our college audience.",
    category: "creative-campaigns",
    tags: ["marketing", "strategy", "innovation"],
    width: 3,
    height: 4
  },
  {
    id: 3,
    src: "https://www.collegetips.in/images/wi.jpeg",
    alt: "Team celebration after project completion",
    title: "Victory Celebration",
    description: "Celebrating the successful launch of our latest college tips campaign!",
    category: "work-play",
    tags: ["celebration", "success", "team-spirit"],
    width: 4,
    height: 2
  },
  {
    id: 4,
    src: "https://www.collegetips.in/images/chooseus-image-1.jpg",
    alt: "Behind the scenes of content creation",
    title: "Content Creation",
    description: "A peek behind the curtain of our content creation process.",
    category: "behind-scenes",
    tags: ["content", "creation", "process"],
    width: 4,
    height: 3
  },
  {
    id: 5,
    src: "https://www.collegetips.in/images/chooseus-image-4.jpg",
    alt: "Team meeting with laptops and coffee",
    title: "Morning Strategy",
    description: "Our morning strategy sessions always include good coffee and better ideas.",
    category: "team-vibes",
    tags: ["meeting", "strategy", "morning-routine"],
    width: 4,
    height: 3
  },
  {
    id: 6,
    src: "https://www.collegetips.in/images/bs2424.jpeg",
    alt: "Social media campaign planning",
    title: "Social Media Magic",
    description: "Creating engaging social media content that resonates with college students.",
    category: "creative-campaigns",
    tags: ["social-media", "content", "engagement"],
    width: 3,
    height: 4
  },
  {
    id: 7,
    src: "https://www.collegetips.in/images/cl.jpg",
    alt: "Team playing board games during break",
    title: "Game Break",
    description: "Taking a break with some board games to refresh our creative minds.",
    category: "work-play",
    tags: ["break", "games", "fun"],
    width: 4,
    height: 3
  },
  {
    id: 8,
    src: "https://www.collegetips.in/images/chooseus-image-2.jpg",
    alt: "Setting up for a photoshoot",
    title: "Photoshoot Prep",
    description: "Behind the scenes of setting up for our latest photoshoot.",
    category: "behind-scenes",
    tags: ["photoshoot", "preparation", "behind-the-scenes"],
    width: 4,
    height: 3
  },
  {
    id: 9,
    src: "https://www.collegetips.in/images/about-header-image3.jpg",
    alt: "Team building exercise",
    title: "Team Building",
    description: "Strengthening our team bonds through fun team building activities.",
    category: "team-vibes",
    tags: ["team-building", "activities", "bonds"],
    width: 4,
    height: 3
  },
  {
    id: 10,
    src: "https://www.collegetips.in/images/wedding.jpg",
    alt: "Design brainstorming session",
    title: "Design Workshop",
    description: "Our creative team brainstorming design concepts for upcoming campaigns.",
    category: "creative-campaigns",
    tags: ["design", "brainstorming", "creativity"],
    width: 4,
    height: 3
  },
  {
    id: 11,
    src: "https://www.collegetips.in/images/night-party.jpg",
    alt: "Office party celebration",
    title: "Office Celebration",
    description: "Celebrating our achievements with an office party!",
    category: "work-play",
    tags: ["celebration", "party", "achievements"],
    width: 4,
    height: 3
  },
  {
    id: 12,
    src: "https://www.collegetips.in/images/lf21.jpg",
    alt: "Recording a podcast episode",
    title: "Podcast Recording",
    description: "Recording an episode of our college tips podcast series.",
    category: "behind-scenes",
    tags: ["podcast", "recording", "content-creation"],
    width: 3,
    height: 4
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg",
    alt: "Team lunch gathering",
    title: "Team Lunch",
    description: "Enjoying lunch together as a team, sharing ideas and laughter.",
    category: "team-vibes",
    tags: ["lunch", "team-bonding", "relaxation"],
    width: 4,
    height: 3
  },
  {
    id: 14,
    src: "https://www.collegetips.in/images/office-party.jpg",
    alt: "Whiteboard brainstorming session",
    title: "Ideas Workshop",
    description: "Our team filling whiteboards with brilliant ideas for future campaigns.",
    category: "creative-campaigns",
    tags: ["brainstorming", "ideas", "whiteboard"],
    width: 4,
    height: 3
  },
  {
    id: 15,
    src: "https://www.collegetips.in/images/chooseus-image-4.jpg",
    alt: "Team outdoor adventure day",
    title: "Adventure Day",
    description: "Building team spirit with outdoor adventures and challenges.",
    category: "work-play",
    tags: ["outdoor", "adventure", "team-building"],
    width: 4,
    height: 3
  },
  {
    id: 16,
    src: "https://www.collegetips.in/images/bs2424.jpeg",
    alt: "Video editing session",
    title: "Video Magic",
    description: "Creating engaging video content for our social media channels.",
    category: "behind-scenes",
    tags: ["video-editing", "content-creation", "social-media"],
    width: 3,
    height: 4
  }
];
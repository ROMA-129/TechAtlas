# TechAtlas — Project Structure

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- JSON
- LocalStorage
- GitHub Pages

Future experiments may include Three.js, CSS 3D, or model-viewer.

The initial website does not require a backend or a frontend framework.

## Directory Structure

```text
TechAtlas/
├── archive/
├── assets/
│   ├── icons/
│   ├── images/
│   └── models/
├── courses/
│   ├── cybersecurity/
│   ├── databases/
│   ├── networking/
│   └── operating-systems/
├── css/
│   ├── main.css
│   └── responsive.css
├── data/
│   ├── ar.json
│   └── en.json
├── docs/
│   ├── FEATURES.md
│   ├── ROADMAP.md
│   ├── DESIGN.md
│   ├── STRUCTURE.md
│   ├── CHANGELOG.md
│   └── REFERENCES.md
├── js/
│   ├── main.js
│   ├── lang-toggle.js
│   └── 3d-viewer.js
├── pages/
│   ├── about.html
│   ├── careers.html
│   ├── contact.html
│   ├── courses.html
│   └── encyclopedia.html
├── .gitignore
├── index.html
├── LICENSE
├── NOTICE.md
└── README.md
```

## Directory Responsibilities

| Directory | Responsibility |
|---|---|
| archive | Previous versions and experiments |
| assets | Images, icons, and 3D models |
| courses | Educational content |
| css | Website styling |
| data | Translation and structured data |
| docs | Project documentation |
| js | Website behavior and interactivity |
| pages | General website pages |

## Future Career Pages

Individual career pages will be organized under `pages/careers/`.

Each career page will reference existing courses instead of duplicating educational content.

## Architecture Principles

- Separate content, styling, and behavior.
- Organize courses into independent folders.
- Reuse shared components and styles.
- Link multiple career paths to the same courses.
- Maintain a scalable structure without unnecessary complexity.
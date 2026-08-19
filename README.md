# John Lester Mayuga — Portfolio

Personal portfolio website for John Lester Mayuga, a Senior Agile Software Engineer and Full Stack Developer with more than 11 years of enterprise software engineering experience.

The site highlights professional experience, technical skills, services, selected projects across SaaS and other product domains, education, certifications, and contact information.

## Features

- Responsive, single-page portfolio layout
- Recruiter-focused hero with a prominent profile image
- Downloadable CV
- Experience, skills, tools, and AI-assisted development sections
- Selected SaaS, education, healthcare, enterprise HR, creative services, and data-platform projects
- Education and professional certifications
- LinkedIn, GitHub, email, and phone contact options
- Accessible image preview and external links

## Technology

- Next.js 14 with the App Router
- React 18
- TypeScript
- CSS

## Getting started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Production build

```bash
npm run build
npm start
```

## Project structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Hero.tsx
    ├── Experience.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Credentials.tsx
    └── Contact.tsx

public/assets/
├── jl.png
├── John_Lester_Mayuga_CV.pdf
└── project and technology logos
```

## Portfolio content

Most page content is maintained in the components under `src/components`. Static images, logos, and the downloadable CV are stored in `public/assets`.

When adding career projects, include only publicly available information and approved assets. Avoid publishing client data, credentials, private source code, internal architecture, or confidential implementation details.

## Contact

- GitHub: [github.com/jlmayuga](https://github.com/jlmayuga)
- LinkedIn: [linkedin.com/in/jlmayuga](https://www.linkedin.com/in/jlmayuga/)
- Email: [johnlester.mayuga@gmail.com](mailto:johnlester.mayuga@gmail.com)

## License

This repository contains personal portfolio content and assets. Unless a separate license is added, the content is not licensed for reuse.

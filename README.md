# Interactive Team Profile Component

A playful and engaging way to showcase team members using interactive smiley faces that flip to reveal profile photos. Built with Next.js, Framer Motion, and Tailwind CSS.

![Team Profile Demo](public/demo.gif)

## Features

- 🎭 Interactive flip animations with 3D transforms
- 🌊 Coordinated wave-like motion effects
- 🎨 Clean, minimal design with customizable styling
- 📱 Fully responsive across all devices
- ⚡ Optimized performance with Next.js
- 🖼️ Progressive image loading

## Demo

[Live Demo](https://smiley-one.vercel.app/)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/danielapassos/Smiley-component
cd Smiley-component
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add your team photos to the `public` directory

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage

1. Import the component:
```typescript
import FlippingCircles from '@/components/FlippingCircles';
```

2. Use it in your project:
```typescript
<TeamProfile
  members={[
    {
      id: 1,
      name: "Team Member 1",
      photo: "/member1.jpg"
    },
    // Add more team members...
  ]}
/>
```

## Configuration

### Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `members` | `Member[]` | Array of team member objects | `[]` |
| `circleSize` | `number` | Size of circles in pixels | `150` |
| `spacing` | `number` | Space between circles in pixels | `18` |
| `backgroundColor` | `string` | Color of smiley faces | `#D0FF00` |

### Types

```typescript
interface Member {
  id: number;
  name: string;
  photo: string;
}
```

## Technical Details

### Animation System

The component uses a coordinated animation system where:
- Clicked circles rise and flip
- Adjacent circles move downward
- Movement intensity decreases with distance
- Spring physics create natural motion

Key animation code:
```typescript
const getYOffset = (index: number) => {
    if (activeIndex === null) return 0;
    const distance = Math.abs(index - activeIndex);
    
    if (distance === 0) return -20;     // Up
    if (distance === 1) return 15;      // Down
    if (distance === 2) return 5;       // Slight
    return 0;                           // Still
};
```

### Performance Considerations

- Uses CSS `backface-visibility` for smooth flips
- Implements `transform-style: preserve-3d` for proper 3D
- Optimizes images with Next.js Image component
- Manages state efficiently with React hooks

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## Contact

Your Name - [@danizeres](https://x.com/danizeres)

import './index.css';
import background from '@/assets/logo.png';
import txtContent from './text.txt?raw';

export default function Hello() {
  return (
    <div className="home container">
      <h1>Hello, World!</h1>
      <p>Welcome to the China page.</p>
          <img src={background} />
      <p>Text content from text.txt:</p>
      <pre>{txtContent}</pre>
    </div>
  );
}
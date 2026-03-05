import { events } from '../../data/demoData';
import type { Route } from './+types/home';
import Scheduler from 'components/Scheduler/Scheduler';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'DHTMLX React Scheduler | Remix (React Router) Quick Start' },
    { name: 'description', content: 'DHTMLX React Scheduler | Remix (React Router) Quick Start' },
  ];
}

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Scheduler events={events} />
    </div>
  );
}
